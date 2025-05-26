import { useState, useEffect, useCallback } from "react";
import {
	User,
	Calendar,
	MessageSquare,
	CheckCircle,
	XCircle,
	FileText,
	Plus,
	Filter,
	Search,
} from "lucide-react";
import { useUser } from "../../context/UserContext";
import { Appointment, AppointmentStatus, AppointmentType } from "../../types/appointment";
import {
	getAppointmentsByDoctor,
	updateAppointment,
	cancelAppointment,
} from "../../services/appointmentService";

// Tab options for appointment filtering
type AppointmentTab = "all" | "today" | "upcoming" | "past";

const AppointmentsDoctor = () => {
	const { user } = useUser();
	const [appointments, setAppointments] = useState<Appointment[]>([]);
	const [filteredAppointments, setFilteredAppointments] = useState<Appointment[]>([]);
	const [selectedTab, setSelectedTab] = useState<AppointmentTab>("today");
	const [isLoading, setIsLoading] = useState(true);
	const [searchTerm, setSearchTerm] = useState("");
	const [statusFilter, setStatusFilter] = useState<AppointmentStatus | "all">("all");
	const [typeFilter, setTypeFilter] = useState<AppointmentType | "all">("all");
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [selectedAppointment, setSelectedAppointment] = useState<Appointment | null>(null);
	const [viewMode, setViewMode] = useState<"list" | "calendar">("list");
	// Fetch appointments from the API
	const fetchAppointments = useCallback(async () => {
		if (!user?.id) return;

		try {
			setIsLoading(true);
			const data = await getAppointmentsByDoctor(user.id);
			setAppointments(data);
		} catch (error) {
			console.error("Error al obtener citas:", error);
		} finally {
			setIsLoading(false);
		}
	}, [user?.id]);

	// Apply filters to appointments
	const applyFilters = useCallback(
		(
			allAppointments: Appointment[],
			tab: AppointmentTab,
			search: string,
			status: AppointmentStatus | "all",
			type: AppointmentType | "all"
		) => {
			const today = new Date();
			today.setHours(0, 0, 0, 0);

			// First filter by tab
			let filtered = [...allAppointments];
			if (tab === "today") {
				const tomorrow = new Date(today);
				tomorrow.setDate(tomorrow.getDate() + 1);
				filtered = filtered.filter((appointment) => {
					const appointmentDate = new Date(appointment.date);
					appointmentDate.setHours(0, 0, 0, 0);
					return appointmentDate.getTime() === today.getTime();
				});
			} else if (tab === "upcoming") {
				filtered = filtered.filter((appointment) => {
					const appointmentDate = new Date(appointment.date);
					appointmentDate.setHours(0, 0, 0, 0);
					return appointmentDate > today;
				});
			} else if (tab === "past") {
				filtered = filtered.filter((appointment) => {
					const appointmentDate = new Date(appointment.date);
					appointmentDate.setHours(0, 0, 0, 0);
					return appointmentDate < today;
				});
			}

			// Then filter by search term
			if (search.trim() !== "") {
				const searchLower = search.toLowerCase();
				filtered = filtered.filter(
					(appointment) =>
						appointment.patientName.toLowerCase().includes(searchLower) ||
						appointment.notes.toLowerCase().includes(searchLower)
				);
			}

			// Then filter by status
			if (status !== "all") {
				filtered = filtered.filter((appointment) => appointment.status === status);
			}

			// Then filter by type
			if (type !== "all") {
				filtered = filtered.filter((appointment) => appointment.type === type);
			}

			// Sort appointments by date (ascending for today/upcoming, descending for past)
			if (tab === "past") {
				filtered.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
			} else {
				filtered.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
			}

			setFilteredAppointments(filtered);
		},
		[]
	);

	// Handle tab changes
	const handleTabChange = (tab: AppointmentTab) => {
		setSelectedTab(tab);
		applyFilters(appointments, tab, searchTerm, statusFilter, typeFilter);
	};

	// Handle search input changes
	const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value;
		setSearchTerm(value);
		applyFilters(appointments, selectedTab, value, statusFilter, typeFilter);
	};

	// Handle status filter changes
	const handleStatusFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		const value = e.target.value as AppointmentStatus | "all";
		setStatusFilter(value);
		applyFilters(appointments, selectedTab, searchTerm, value, typeFilter);
	};

	// Handle type filter changes
	const handleTypeFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		const value = e.target.value as AppointmentType | "all";
		setTypeFilter(value);
		applyFilters(appointments, selectedTab, searchTerm, statusFilter, value);
	};

	// Handle appointment selection for details
	const handleAppointmentSelect = (appointment: Appointment) => {
		setSelectedAppointment(appointment);
		setIsModalOpen(true);
	};

	// Handle closing the appointment details modal
	const handleCloseModal = () => {
		setIsModalOpen(false);
		setSelectedAppointment(null);
	};

	// Handle appointment status update
	const handleStatusUpdate = async (appointment: Appointment, newStatus: AppointmentStatus) => {
		try {
			const updatedAppointment = { ...appointment, status: newStatus };
			await updateAppointment(updatedAppointment);

			// Update appointments list
			setAppointments((prevAppointments) =>
				prevAppointments.map((appt) =>
					appt.id === appointment.id ? { ...appt, status: newStatus } : appt
				)
			);

			// Also update filtered appointments
			setFilteredAppointments((prevFiltered) =>
				prevFiltered.map((appt) =>
					appt.id === appointment.id ? { ...appt, status: newStatus } : appt
				)
			);

			// Close modal if open
			if (selectedAppointment?.id === appointment.id) {
				setSelectedAppointment({ ...selectedAppointment, status: newStatus });
			}
		} catch (error) {
			console.error("Error al actualizar estado de la cita:", error);
		}
	};
	// Handle appointment cancellation
	const handleCancelAppointment = async (appointmentId: string) => {
		try {
			await cancelAppointment(appointmentId);

			// Update appointments list
			setAppointments((prevAppointments) =>
				prevAppointments.map((appt) =>
					appt.id === appointmentId ? { ...appt, status: "CANCELADA" } : appt
				)
			);

			// Also update filtered appointments
			setFilteredAppointments((prevFiltered) =>
				prevFiltered.map((appt) =>
					appt.id === appointmentId ? { ...appt, status: "CANCELADA" } : appt
				)
			);

			// Close modal if open
			if (selectedAppointment?.id === appointmentId) {
				setSelectedAppointment({ ...selectedAppointment, status: "CANCELADA" });
			}
		} catch (error) {
			console.error("Error al cancelar la cita:", error);
		}
	};

	// Format time for display
	const formatTime = (dateString: string) => {
		const options: Intl.DateTimeFormatOptions = {
			hour: "numeric",
			minute: "numeric",
			hour12: true,
		};
		return new Date(dateString).toLocaleTimeString("es-ES", options);
	};

	// Format date for display
	const formatDate = (dateString: string) => {
		const options: Intl.DateTimeFormatOptions = {
			weekday: "long",
			year: "numeric",
			month: "long",
			day: "numeric",
		};
		return new Date(dateString).toLocaleDateString("es-ES", options);
	};
	// Get status badge color
	const getStatusBadge = (status: AppointmentStatus) => {
		switch (status) {
			case "PROGRAMADA":
				return "bg-blue-100 text-blue-800";
			case "CONFIRMADA":
				return "bg-green-100 text-green-800";
			case "CANCELADA":
				return "bg-red-100 text-red-800";
			case "COMPLETADA":
				return "bg-purple-100 text-purple-800";
			case "EN_PROGRESO":
				return "bg-yellow-100 text-yellow-800";
			case "NO_ASISTIO":
				return "bg-orange-100 text-orange-800";
			default:
				return "bg-gray-100 text-gray-800";
		}
	};
	// Get status display text
	const getStatusText = (status: AppointmentStatus) => {
		switch (status) {
			case "PROGRAMADA":
				return "Programada";
			case "CONFIRMADA":
				return "Confirmada";
			case "CANCELADA":
				return "Cancelada";
			case "COMPLETADA":
				return "Completada";
			case "EN_PROGRESO":
				return "En Progreso";
			case "NO_ASISTIO":
				return "No Asistió";
			default:
				return status;
		}
	};
	// Load appointments when component mounts or when relevant filters change
	useEffect(() => {
		fetchAppointments();
	}, [fetchAppointments]);

	// Apply filters whenever appointments or filter parameters change
	useEffect(() => {
		applyFilters(appointments, selectedTab, searchTerm, statusFilter, typeFilter);
	}, [appointments, selectedTab, searchTerm, statusFilter, typeFilter, applyFilters]);

	return (
		<div className="p-4 md:p-6">
			<div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
				<h1 className="text-2xl font-bold text-gray-900 mb-4 md:mb-0">Gestión de Citas</h1>
				<div className="flex flex-col sm:flex-row gap-2">
					<div className="flex space-x-2">
						<button
							onClick={() => setViewMode("list")}
							className={`px-3 py-2 text-sm font-medium rounded-md ${
								viewMode === "list"
									? "bg-cyan-100 text-cyan-800"
									: "bg-white text-gray-600 border border-gray-300"
							}`}
						>
							Lista
						</button>
						<button
							onClick={() => setViewMode("calendar")}
							className={`px-3 py-2 text-sm font-medium rounded-md ${
								viewMode === "calendar"
									? "bg-cyan-100 text-cyan-800"
									: "bg-white text-gray-600 border border-gray-300"
							}`}
						>
							Calendario
						</button>
					</div>
					<button className="flex items-center justify-center px-4 py-2 bg-cyan-600 text-white rounded-md hover:bg-cyan-700 transition-colors">
						<Plus className="h-4 w-4 mr-2" />
						Nueva cita
					</button>
				</div>
			</div>

			{/* Tab navigation */}
			<div className="border-b border-gray-200 mb-4">
				<nav className="flex space-x-8">
					<button
						onClick={() => handleTabChange("all")}
						className={`py-4 px-1 text-sm font-medium border-b-2 ${
							selectedTab === "all"
								? "border-cyan-500 text-cyan-600"
								: "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
						}`}
					>
						Todas
					</button>
					<button
						onClick={() => handleTabChange("today")}
						className={`py-4 px-1 text-sm font-medium border-b-2 ${
							selectedTab === "today"
								? "border-cyan-500 text-cyan-600"
								: "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
						}`}
					>
						Hoy
					</button>
					<button
						onClick={() => handleTabChange("upcoming")}
						className={`py-4 px-1 text-sm font-medium border-b-2 ${
							selectedTab === "upcoming"
								? "border-cyan-500 text-cyan-600"
								: "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
						}`}
					>
						Próximas
					</button>
					<button
						onClick={() => handleTabChange("past")}
						className={`py-4 px-1 text-sm font-medium border-b-2 ${
							selectedTab === "past"
								? "border-cyan-500 text-cyan-600"
								: "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
						}`}
					>
						Pasadas
					</button>
				</nav>
			</div>

			{/* Filters and search */}
			<div className="flex flex-col md:flex-row md:items-center mb-4 gap-2">
				<div className="relative flex-1 max-w-md">
					<div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
						<Search className="h-5 w-5 text-gray-400" />
					</div>
					<input
						type="text"
						className="pl-10 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-cyan-500 focus:ring focus:ring-cyan-500 focus:ring-opacity-50"
						placeholder="Buscar paciente..."
						value={searchTerm}
						onChange={handleSearchChange}
					/>
				</div>
				<div className="flex flex-1 gap-2">
					<div className="relative">
						<select
							className="pl-2 pr-8 py-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-cyan-500 focus:ring focus:ring-cyan-500 focus:ring-opacity-50"
							value={statusFilter}
							onChange={handleStatusFilterChange}
						>
							<option value="all">Todos los estados</option>
							<option value="scheduled">Programada</option>
							<option value="confirmed">Confirmada</option>
							<option value="cancelled">Cancelada</option>
							<option value="completed">Completada</option>
						</select>
						<div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
							<Filter className="h-4 w-4 text-gray-400" />
						</div>
					</div>
					<div className="relative">
						<select
							className="pl-2 pr-8 py-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-cyan-500 focus:ring focus:ring-cyan-500 focus:ring-opacity-50"
							value={typeFilter}
							onChange={handleTypeFilterChange}
						>
							<option value="all">Todos los tipos</option>
							<option value="in-person">Presencial</option>
							<option value="virtual">Virtual</option>
						</select>
						<div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
							<Filter className="h-4 w-4 text-gray-400" />
						</div>
					</div>
				</div>
			</div>

			{/* Loading state */}
			{isLoading ? (
				<div className="py-8">
					<div className="animate-pulse space-y-6">
						{[...Array(5)].map((_, i) => (
							<div
								key={i}
								className="flex space-x-4 bg-white p-4 rounded-lg shadow-sm"
							>
								<div className="rounded-full bg-gray-200 h-12 w-12"></div>
								<div className="flex-1 space-y-4 py-1">
									<div className="h-4 bg-gray-200 rounded w-3/4"></div>
									<div className="space-y-2">
										<div className="h-4 bg-gray-200 rounded"></div>
										<div className="h-4 bg-gray-200 rounded w-5/6"></div>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			) : filteredAppointments.length === 0 ? (
				// Empty state
				<div className="py-8 text-center">
					<Calendar className="h-12 w-12 text-gray-400 mx-auto mb-4" />
					<h3 className="text-lg font-medium text-gray-900 mb-1">
						No hay citas que mostrar
					</h3>
					<p className="text-gray-500 mb-6">
						{selectedTab === "today"
							? "No tienes citas programadas para hoy."
							: selectedTab === "upcoming"
							? "No tienes citas programadas próximamente."
							: selectedTab === "past"
							? "No tienes citas pasadas para mostrar."
							: "No se encontraron citas con los filtros seleccionados."}
					</p>
					<button className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-cyan-600 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500">
						<Plus className="h-4 w-4 mr-2" />
						Programar nueva cita
					</button>
				</div>
			) : // List view
			viewMode === "list" ? (
				<div className="bg-white rounded-lg shadow-sm overflow-hidden">
					<div className="overflow-x-auto">
						<table className="min-w-full divide-y divide-gray-200">
							<thead className="bg-gray-50">
								<tr>
									<th
										scope="col"
										className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
									>
										Paciente
									</th>
									<th
										scope="col"
										className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
									>
										Fecha y Hora
									</th>
									<th
										scope="col"
										className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
									>
										Tipo
									</th>
									<th
										scope="col"
										className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
									>
										Estado
									</th>
									<th
										scope="col"
										className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
									>
										Acciones
									</th>
								</tr>
							</thead>
							<tbody className="bg-white divide-y divide-gray-200">
								{filteredAppointments.map((appointment) => (
									<tr
										key={appointment.id}
										className="hover:bg-gray-50 cursor-pointer"
										onClick={() => handleAppointmentSelect(appointment)}
									>
										<td className="px-6 py-4 whitespace-nowrap">
											<div className="flex items-center">
												<div className="flex-shrink-0 h-10 w-10 bg-cyan-100 rounded-full flex items-center justify-center">
													<User className="h-5 w-5 text-cyan-700" />
												</div>
												<div className="ml-4">
													<div className="text-sm font-medium text-gray-900">
														{appointment.patientName}
													</div>
													<div className="text-sm text-gray-500">
														{appointment.notes.length > 30
															? `${appointment.notes.substring(
																	0,
																	30
															  )}...`
															: appointment.notes || "Sin notas"}
													</div>
												</div>
											</div>
										</td>
										<td className="px-6 py-4 whitespace-nowrap">
											<div className="text-sm text-gray-900">
												{formatDate(appointment.date)}
											</div>
											<div className="text-sm text-gray-500">
												{formatTime(appointment.date)}
											</div>
										</td>{" "}
										<td className="px-6 py-4 whitespace-nowrap">
											<span
												className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
													appointment.type === "EMERGENCIA"
														? "bg-red-100 text-red-800"
														: appointment.type === "ESPECIALISTA"
														? "bg-blue-100 text-blue-800"
														: "bg-green-100 text-green-800"
												}`}
											>
												{appointment.type === "EMERGENCIA"
													? "Emergencia"
													: appointment.type === "ESPECIALISTA"
													? "Especialista"
													: appointment.type === "CONSULTA"
													? "Consulta"
													: appointment.type === "SEGUIMIENTO"
													? "Seguimiento"
													: "Chequeo"}
											</span>
										</td>
										<td className="px-6 py-4 whitespace-nowrap">
											<span
												className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusBadge(
													appointment.status
												)}`}
											>
												{getStatusText(appointment.status)}
											</span>
										</td>
										<td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
											{" "}
											<div
												className="flex justify-end space-x-2"
												onClick={(e) => e.stopPropagation()}
											>
												{appointment.status === "PROGRAMADA" && (
													<button
														onClick={() =>
															handleStatusUpdate(
																appointment,
																"CONFIRMADA"
															)
														}
														className="text-cyan-600 hover:text-cyan-900"
														title="Confirmar cita"
													>
														<CheckCircle className="h-5 w-5" />
													</button>
												)}
												{(appointment.status === "PROGRAMADA" ||
													appointment.status === "CONFIRMADA") && (
													<button
														onClick={() =>
															handleCancelAppointment(appointment.id)
														}
														className="text-red-600 hover:text-red-900"
														title="Cancelar cita"
													>
														<XCircle className="h-5 w-5" />
													</button>
												)}
												{(appointment.status === "PROGRAMADA" ||
													appointment.status === "CONFIRMADA") && (
													<button
														onClick={() =>
															handleStatusUpdate(
																appointment,
																"COMPLETADA"
															)
														}
														className="text-purple-600 hover:text-purple-900"
														title="Marcar como completada"
													>
														<FileText className="h-5 w-5" />
													</button>
												)}
												<button
													className="text-gray-600 hover:text-gray-900"
													title="Enviar mensaje"
												>
													<MessageSquare className="h-5 w-5" />
												</button>
											</div>
										</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				</div>
			) : (
				// Calendar view (simplified for now)
				<div className="bg-white rounded-lg shadow-sm p-4">
					<div className="text-center mb-4">
						<h3 className="text-lg font-medium text-gray-900">
							Vista de calendario (en desarrollo)
						</h3>
						<p className="text-gray-500">
							Esta vista mostrará las citas en un calendario.
						</p>
					</div>
					<div className="border border-gray-200 rounded-md p-4 min-h-[600px]">
						<div className="grid grid-cols-7 gap-1 text-center">
							{["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"].map((day) => (
								<div key={day} className="p-2 font-medium text-gray-700">
									{day}
								</div>
							))}
							{/* Calendar grid would go here */}
							{Array.from({ length: 35 }).map((_, i) => (
								<div
									key={i}
									className="p-2 border border-gray-100 min-h-[80px] text-left"
								>
									<div className="text-sm text-gray-500">{i + 1}</div>
								</div>
							))}
						</div>
					</div>
				</div>
			)}

			{/* Appointment details modal */}
			{isModalOpen && selectedAppointment && (
				<div className="fixed inset-0 bg-gray-600 bg-opacity-75 flex items-center justify-center z-50">
					<div className="bg-white rounded-lg shadow-xl max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
						<div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
							<h3 className="text-lg font-medium text-gray-900">
								Detalles de la cita
							</h3>
							<button
								onClick={handleCloseModal}
								className="text-gray-400 hover:text-gray-500"
							>
								<XCircle className="h-6 w-6" />
							</button>
						</div>
						<div className="px-6 py-4">
							<div className="mb-4 flex items-center">
								<div className="h-12 w-12 bg-cyan-100 rounded-full flex items-center justify-center mr-4">
									<User className="h-6 w-6 text-cyan-700" />
								</div>{" "}
								<div>
									<h4 className="text-xl font-medium text-gray-900">
										{selectedAppointment.patientName}
									</h4>
									<p className="text-sm text-gray-500">
										Cita{" "}
										{selectedAppointment.type === "EMERGENCIA"
											? "de Emergencia"
											: selectedAppointment.type === "ESPECIALISTA"
											? "de Especialista"
											: selectedAppointment.type === "CONSULTA"
											? "de Consulta"
											: selectedAppointment.type === "SEGUIMIENTO"
											? "de Seguimiento"
											: "de Chequeo"}
									</p>
								</div>
								<div className="ml-auto">
									<span
										className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusBadge(
											selectedAppointment.status
										)}`}
									>
										{getStatusText(selectedAppointment.status)}
									</span>
								</div>
							</div>
							<div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
								<div className="bg-gray-50 p-4 rounded-md">
									<div className="flex items-center mb-2">
										<Calendar className="h-5 w-5 text-gray-500 mr-2" />
										<h5 className="text-sm font-medium text-gray-700">
											Fecha y Hora
										</h5>
									</div>
									<p className="text-gray-900">
										{formatDate(selectedAppointment.date)} a las{" "}
										{formatTime(selectedAppointment.date)}
									</p>
								</div>

								<div className="bg-gray-50 p-4 rounded-md">
									<div className="flex items-center mb-2">
										<FileText className="h-5 w-5 text-gray-500 mr-2" />
										<h5 className="text-sm font-medium text-gray-700">
											Especialidad
										</h5>
									</div>
									<p className="text-gray-900">{selectedAppointment.specialty}</p>
								</div>
							</div>
							<div className="mb-6">
								<h5 className="text-sm font-medium text-gray-700 mb-2">Notas</h5>
								<div className="bg-gray-50 p-4 rounded-md">
									<p className="text-gray-900">
										{selectedAppointment.notes ||
											"No hay notas para esta cita."}
									</p>
								</div>
							</div>{" "}
							<div className="border-t border-gray-200 pt-4 flex justify-between">
								<div className="flex space-x-2">
									{(selectedAppointment.status === "PROGRAMADA" ||
										selectedAppointment.status === "CONFIRMADA") && (
										<button
											onClick={() => {
												handleCancelAppointment(selectedAppointment.id);
												handleCloseModal();
											}}
											className="inline-flex items-center px-4 py-2 border border-red-300 rounded-md shadow-sm text-sm font-medium text-red-700 bg-white hover:bg-red-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
										>
											<XCircle className="h-4 w-4 mr-2" />
											Cancelar cita
										</button>
									)}
								</div>
								<div className="flex space-x-2">
									{selectedAppointment.status === "PROGRAMADA" && (
										<button
											onClick={() => {
												handleStatusUpdate(
													selectedAppointment,
													"CONFIRMADA"
												);
											}}
											className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
										>
											<CheckCircle className="h-4 w-4 mr-2" />
											Confirmar
										</button>
									)}
									{(selectedAppointment.status === "PROGRAMADA" ||
										selectedAppointment.status === "CONFIRMADA") && (
										<button
											onClick={() => {
												handleStatusUpdate(
													selectedAppointment,
													"COMPLETADA"
												);
												handleCloseModal();
											}}
											className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-cyan-600 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
										>
											<FileText className="h-4 w-4 mr-2" />
											Completar cita
										</button>
									)}
								</div>
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default AppointmentsDoctor;
