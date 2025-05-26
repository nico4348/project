import { useState, useEffect } from "react";
import {
	Calendar,
	Clock,
	User,
	MapPin,
	Search,
	Plus,
	Filter,
	ChevronLeft,
	ChevronRight,
} from "lucide-react";
import { useUser } from "../../context/UserContext";
import { Appointment } from "../../types/appointment";
import { getAppointmentsByPatient, createAppointment } from "../../services/appointmentService";

// Type for doctor data from API
interface DoctorApiResponse {
	id: number;
	usuarioId: number;
	especialidadId: number;
	usuario: {
		id: number;
		nombre: string;
		email: string;
		contraseña: string;
		rol: string;
	};
	especialidad: {
		id: number;
		nombre: string;
	};
}

// Simple doctor interface for appointment booking
interface DoctorForBooking {
	id: string;
	name: string;
	email: string;
	role: "doctor";
	specialty?: string;
}

const AppointmentsPatient = () => {
	const { user } = useUser();
	const [appointments, setAppointments] = useState<Appointment[]>([]);
	const [doctors, setDoctors] = useState<DoctorForBooking[]>([]);
	const [isLoading, setIsLoading] = useState(true);
	const [view, setView] = useState<"upcoming" | "past" | "book">("upcoming");
	const [selectedDoctor, setSelectedDoctor] = useState<DoctorForBooking | null>(null);
	const [selectedDate, setSelectedDate] = useState<string>("");
	const [selectedTime, setSelectedTime] = useState<string>("");
	const [searchQuery, setSearchQuery] = useState("");
	const [specialtyFilter, setSpecialtyFilter] = useState("");

	const specialties = [
		"Cardiología",
		"Dermatología",
		"Medicina Familiar",
		"Neurología",
		"Pediatría",
		"Psiquiatría",
	];
	useEffect(() => {
		const fetchData = async () => {
			console.log("=== APPOINTMENTS DEBUG ===");
			console.log("Starting data fetch for user:", user);
			console.log("User object details:", JSON.stringify(user, null, 2));
			try {
				if (user?.id) {
					console.log("User ID found, fetching data...");
					console.log("About to call getAllUsers()..."); // Handle appointments and users separately to avoid Promise.all failure
					let appointmentsData: Appointment[] = [];
					let doctorsData: DoctorForBooking[] = [];

					// Fetch doctors data (this should always work)
					try {
						console.log("Fetching doctors from /api/doctors...");
						const doctorsResponse = await fetch("http://localhost:5000/api/doctors");
						if (!doctorsResponse.ok) {
							throw new Error(`HTTP error! status: ${doctorsResponse.status}`);
						}
						const doctorsApiData: DoctorApiResponse[] = await doctorsResponse.json();
						console.log("Raw doctors data from API:", doctorsApiData);
						console.log("Number of doctors fetched:", doctorsApiData.length);

						// Transform doctors data to match our interface
						doctorsData = doctorsApiData.map((doctor) => ({
							id: doctor.id.toString(), // Use medico ID (1,2,3,4)
							name: doctor.usuario.nombre,
							email: doctor.usuario.email,
							role: "doctor" as const,
							specialty: doctor.especialidad.nombre,
						}));
						console.log("Transformed doctors data:", doctorsData);
						setDoctors(doctorsData);
					} catch (usersError) {
						console.error("Error fetching doctors:", usersError);
					}
					// Fetch appointments data (this might fail, but shouldn't block doctors)
					try {
						console.log("Fetching appointments...");
						appointmentsData = await getAppointmentsByPatient(user.id);
						console.log("Raw appointments data:", appointmentsData);
						setAppointments(appointmentsData);
					} catch (appointmentsError) {
						console.error(
							"Error fetching appointments (continuing anyway):",
							appointmentsError
						);
						setAppointments([]); // Set empty array if appointments fail
					}
				} else {
					console.log("No user ID found, user object:", user);
				}
			} catch (error) {
				console.error("Error al obtener datos:", error);
				if (error instanceof Error) {
					console.error("Error stack:", error.stack);
				}
			} finally {
				console.log("Setting loading to false");
				setIsLoading(false);
			}
		};

		console.log("useEffect triggered, user state:", user);
		fetchData();
	}, [user]);

	const upcomingAppointments = appointments.filter(
		(appointment) => new Date(appointment.date) > new Date()
	);

	const pastAppointments = appointments.filter(
		(appointment) => new Date(appointment.date) <= new Date()
	);
	const filteredDoctors = doctors.filter((doctor) => {
		const matchesSearch = doctor.name.toLowerCase().includes(searchQuery.toLowerCase());
		const matchesSpecialty = !specialtyFilter || doctor.specialty === specialtyFilter;
		console.log(
			`Doctor ${doctor.name}: search="${searchQuery}", specialty="${specialtyFilter}", matchesSearch=${matchesSearch}, matchesSpecialty=${matchesSpecialty}`
		);
		return matchesSearch && matchesSpecialty;
	});

	console.log("=== FILTER RESULTS ===");
	console.log("Total doctors:", doctors.length);
	console.log("Filtered doctors:", filteredDoctors.length);
	console.log("Search query:", searchQuery);
	console.log("Specialty filter:", specialtyFilter);
	const handleBookAppointment = async () => {
		if (selectedDoctor && selectedDate && selectedTime && user?.id) {
			try {
				const newAppointmentData: Omit<Appointment, "id"> = {
					patientId: user.id,
					patientName: user.name,
					doctorId: selectedDoctor.id,
					doctorName: selectedDoctor.name,
					specialty: selectedDoctor.specialty || "Medicina General",
					date: `${selectedDate}T${selectedTime}:00`,
					status: "scheduled",
					type: "in-person",
					notes: "",
				};

				const createdAppointment = await createAppointment(newAppointmentData);
				setAppointments([...appointments, createdAppointment]);
				setView("upcoming");
				setSelectedDoctor(null);
				setSelectedDate("");
				setSelectedTime("");
			} catch (error) {
				console.error("Error creating appointment:", error);
				alert("Error al crear la cita. Por favor intenta de nuevo.");
			}
		}
	};

	const formatDate = (dateString: string) => {
		const options: Intl.DateTimeFormatOptions = {
			weekday: "long",
			year: "numeric",
			month: "long",
			day: "numeric",
		};
		return new Date(dateString).toLocaleDateString("es-ES", options);
	};

	const formatTime = (dateString: string) => {
		const options: Intl.DateTimeFormatOptions = {
			hour: "numeric",
			minute: "numeric",
			hour12: true,
		};
		return new Date(dateString).toLocaleTimeString("es-ES", options);
	};

	const getAvailableTimes = () => {
		const times = [];
		const date = new Date();
		date.setHours(9, 0, 0, 0);

		for (let i = 0; i < 16; i++) {
			const hour = date.getHours();
			const minute = date.getMinutes();
			times.push(`${hour.toString().padStart(2, "0")}:${minute.toString().padStart(2, "0")}`);
			date.setMinutes(date.getMinutes() + 30);
		}

		return times;
	};

	const renderAppointmentList = (appointmentList: Appointment[]) => {
		if (appointmentList.length === 0) {
			return (
				<div className="text-center py-8">
					<p className="text-gray-500 mb-4">No se encontraron turnos</p>
					<button
						onClick={() => setView("book")}
						className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-cyan-600 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
					>
						<Plus className="mr-2 h-4 w-4" />
						Solicitar turno
					</button>
				</div>
			);
		}

		return (
			<div className="divide-y divide-gray-200">
				{appointmentList.map((appointment) => (
					<div
						key={appointment.id}
						className="p-4 md:p-6 flex flex-col md:flex-row md:items-center md:justify-between"
					>
						<div className="flex items-start">
							<div className="p-2 bg-cyan-50 rounded-lg">
								<User className="h-10 w-10 text-cyan-700" />
							</div>
							<div className="ml-4">
								<h3 className="text-lg font-medium text-gray-900">
									Dr. {appointment.doctorName}
								</h3>
								<p className="text-sm text-gray-500">{appointment.specialty}</p>
								<div className="mt-2 flex flex-col sm:flex-row sm:items-center text-sm text-gray-500">
									<div className="flex items-center mb-2 sm:mb-0 sm:mr-4">
										<Calendar className="h-4 w-4 mr-1" />
										<span>{formatDate(appointment.date)}</span>
									</div>
									<div className="flex items-center">
										<Clock className="h-4 w-4 mr-1" />
										<span>{formatTime(appointment.date)}</span>
									</div>
								</div>
								<div className="mt-1 flex items-center text-sm text-gray-500">
									<MapPin className="h-4 w-4 mr-1" />
									<span>
										{appointment.type === "virtual"
											? "Consulta virtual"
											: "Centro Médico SaludPlus"}
									</span>
								</div>
							</div>
						</div>
						<div className="mt-4 md:mt-0 flex flex-col sm:flex-row sm:space-x-3">
							{view === "upcoming" && (
								<>
									<button className="px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 mb-2 sm:mb-0">
										Reprogramar
									</button>
									<button className="px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-cyan-600 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500">
										{appointment.type === "virtual"
											? "Unirse a consulta virtual"
											: "Registrar llegada"}
									</button>
								</>
							)}
							{view === "past" && (
								<>
									<button className="px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 mb-2 sm:mb-0">
										Ver resumen
									</button>
									<button className="px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-cyan-600 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500">
										Solicitar seguimiento
									</button>
								</>
							)}
						</div>
					</div>
				))}
			</div>
		);
	};

	const renderBookAppointment = () => {
		return (
			<div>
				<div className="mb-6">
					<h3 className="text-lg font-medium text-gray-900 mb-2">Buscar profesional</h3>
					<div className="flex flex-col md:flex-row md:space-x-4">
						<div className="flex-1 mb-4 md:mb-0">
							<div className="relative">
								<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
									<Search className="h-5 w-5 text-gray-400" />
								</div>
								<input
									type="text"
									placeholder="Buscar por nombre"
									value={searchQuery}
									onChange={(e) => setSearchQuery(e.target.value)}
									className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm"
								/>
							</div>
						</div>

						<div className="w-full md:w-64">
							<div className="relative">
								<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
									<Filter className="h-5 w-5 text-gray-400" />
								</div>
								<select
									value={specialtyFilter}
									onChange={(e) => setSpecialtyFilter(e.target.value)}
									className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm"
								>
									<option value="">Todas las especialidades</option>
									{specialties.map((specialty) => (
										<option key={specialty} value={specialty}>
											{specialty}
										</option>
									))}
								</select>
							</div>
						</div>
					</div>
				</div>

				{selectedDoctor ? (
					// Paso 2: Seleccionar fecha y hora
					<div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
						<div className="flex items-center mb-6">
							<button
								onClick={() => setSelectedDoctor(null)}
								className="mr-2 p-1 rounded-full text-gray-500 hover:text-gray-900 hover:bg-gray-100"
							>
								<ChevronLeft className="h-5 w-5" />
							</button>
							<h3 className="text-lg font-medium text-gray-900">
								Agendar con Dr. {selectedDoctor.name}
							</h3>
						</div>

						<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
							<div>
								<h4 className="text-sm font-medium text-gray-700 mb-2">
									Seleccionar fecha
								</h4>
								<input
									type="date"
									value={selectedDate}
									onChange={(e) => setSelectedDate(e.target.value)}
									min={new Date().toISOString().split("T")[0]}
									className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm"
								/>

								{selectedDate && (
									<div className="mt-6">
										<h4 className="text-sm font-medium text-gray-700 mb-2">
											Seleccionar hora
										</h4>
										<div className="grid grid-cols-3 gap-2">
											{getAvailableTimes().map((time) => (
												<button
													key={time}
													onClick={() => setSelectedTime(time)}
													className={`py-2 px-3 text-sm font-medium rounded-md ${
														selectedTime === time
															? "bg-cyan-600 text-white"
															: "border border-gray-300 text-gray-700 bg-white hover:bg-gray-50"
													}`}
												>
													{time}
												</button>
											))}
										</div>
									</div>
								)}
							</div>

							<div className="bg-gray-50 p-4 rounded-lg">
								<h4 className="text-sm font-medium text-gray-700 mb-4">
									Resumen del turno
								</h4>

								<div className="space-y-3">
									<div className="flex">
										<User className="h-5 w-5 text-gray-400 mr-2" />
										<div>
											<p className="text-sm font-medium text-gray-900">
												Dr. {selectedDoctor.name}
											</p>
											<p className="text-xs text-gray-500">
												{selectedDoctor.specialty}
											</p>
										</div>
									</div>

									{selectedDate && (
										<div className="flex">
											<Calendar className="h-5 w-5 text-gray-400 mr-2" />
											<p className="text-sm text-gray-900">
												{new Date(selectedDate).toLocaleDateString(
													"es-ES",
													{
														weekday: "long",
														year: "numeric",
														month: "long",
														day: "numeric",
													}
												)}
											</p>
										</div>
									)}

									{selectedTime && (
										<div className="flex">
											<Clock className="h-5 w-5 text-gray-400 mr-2" />
											<p className="text-sm text-gray-900">{selectedTime}</p>
										</div>
									)}

									<div className="flex">
										<MapPin className="h-5 w-5 text-gray-400 mr-2" />
										<p className="text-sm text-gray-900">
											Centro Médico SaludPlus
										</p>
									</div>
								</div>

								<div className="mt-6">
									<button
										onClick={handleBookAppointment}
										disabled={!selectedDate || !selectedTime}
										className="w-full px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-cyan-600 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 disabled:opacity-50 disabled:cursor-not-allowed"
									>
										Confirmar turno
									</button>
								</div>
							</div>
						</div>
					</div>
				) : (
					// Paso 1: Seleccionar profesional
					<div className="bg-white rounded-lg shadow-sm border border-gray-200">
						<div className="divide-y divide-gray-200">
							{isLoading ? (
								<div className="p-6">
									<div className="animate-pulse flex space-x-4">
										<div className="rounded-full bg-gray-200 h-12 w-12"></div>
										<div className="flex-1 space-y-4 py-1">
											<div className="h-4 bg-gray-200 rounded w-3/4"></div>
											<div className="space-y-2">
												<div className="h-4 bg-gray-200 rounded"></div>
												<div className="h-4 bg-gray-200 rounded w-5/6"></div>
											</div>
										</div>
									</div>
								</div>
							) : filteredDoctors.length === 0 ? (
								<div className="p-6 text-center">
									<p className="text-gray-500">
										No se encontraron profesionales con esos criterios
									</p>
								</div>
							) : (
								filteredDoctors.map((doctor) => (
									<div
										key={doctor.id}
										className="p-4 hover:bg-gray-50 cursor-pointer transition-colors"
										onClick={() => setSelectedDoctor(doctor)}
									>
										<div className="flex items-start">
											<div className="p-2 bg-cyan-50 rounded-lg">
												<User className="h-10 w-10 text-cyan-700" />
											</div>
											<div className="ml-4">
												<h3 className="text-lg font-medium text-gray-900">
													Dr. {doctor.name}
												</h3>{" "}
												<p className="text-sm text-gray-500">
													{doctor.specialty}
												</p>
												<div className="mt-2 text-sm text-gray-500">
													<p>Médico Especialista</p>
													<p>Disponible para consultas</p>
												</div>
											</div>
											<div className="ml-auto">
												<ChevronRight className="h-5 w-5 text-gray-400" />
											</div>
										</div>
									</div>
								))
							)}
						</div>
					</div>
				)}
			</div>
		);
	};

	return (
		<div>
			<div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between">
				<div>
					<h1 className="text-2xl font-bold text-gray-900">Turnos</h1>
					<p className="text-gray-600">Gestioná tus turnos programados</p>
				</div>

				{view !== "book" && (
					<button
						onClick={() => setView("book")}
						className="mt-4 sm:mt-0 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-cyan-600 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
					>
						<Plus className="mr-2 h-4 w-4" />
						Solicitar turno
					</button>
				)}
			</div>

			{view !== "book" && (
				<div className="bg-white rounded-lg shadow-sm border border-gray-200 mb-6">
					<div className="flex border-b border-gray-200">
						<button
							className={`flex-1 py-4 px-4 text-center text-sm font-medium ${
								view === "upcoming"
									? "text-cyan-700 border-b-2 border-cyan-600"
									: "text-gray-500 hover:text-gray-700"
							}`}
							onClick={() => setView("upcoming")}
						>
							Próximos ({upcomingAppointments.length})
						</button>
						<button
							className={`flex-1 py-4 px-4 text-center text-sm font-medium ${
								view === "past"
									? "text-cyan-700 border-b-2 border-cyan-600"
									: "text-gray-500 hover:text-gray-700"
							}`}
							onClick={() => setView("past")}
						>
							Pasados ({pastAppointments.length})
						</button>
					</div>

					{isLoading ? (
						<div className="p-6">
							<div className="animate-pulse space-y-6">
								{[...Array(3)].map((_, i) => (
									<div key={i} className="flex space-x-4">
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
					) : view === "upcoming" ? (
						renderAppointmentList(upcomingAppointments)
					) : (
						renderAppointmentList(pastAppointments)
					)}
				</div>
			)}

			{view === "book" && renderBookAppointment()}
		</div>
	);
};

export default AppointmentsPatient;
