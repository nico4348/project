import { useState, useEffect } from "react";
import { User, Calendar, Clock, FileText, MessageSquare, BarChart2 } from "lucide-react";
import { Link } from "react-router-dom";
import { useUser } from "../../context/UserContext";
import { Appointment } from "../../types/appointment";
import { getAppointmentsByDoctor } from "../../services/appointmentService";

const DoctorDashboard = () => {
	const { user } = useUser();
	const [todayAppointments, setTodayAppointments] = useState<Appointment[]>([]);
	const [isLoading, setIsLoading] = useState(true);
	useEffect(() => {
		const fetchData = async () => {
			try {
				if (user?.id) {
					const appointments = await getAppointmentsByDoctor(user.id);
					const today = new Date();
					today.setHours(0, 0, 0, 0);
					const tomorrow = new Date(today);
					tomorrow.setDate(tomorrow.getDate() + 1);
					const filtered = appointments.filter((appointment: Appointment) => {
						const appointmentDate = new Date(appointment.date);
						return appointmentDate >= today && appointmentDate < tomorrow;
					});
					setTodayAppointments(filtered.slice(0, 5));
				}
			} catch (error) {
				console.error("Error al obtener citas:", error);
			} finally {
				setIsLoading(false);
			}
		};
		fetchData();
	}, [user?.id]);

	const formatTime = (dateString: string) => {
		const options: Intl.DateTimeFormatOptions = {
			hour: "numeric",
			minute: "numeric",
			hour12: true,
		};
		return new Date(dateString).toLocaleTimeString("es-ES", options);
	};

	return (
		<div>
			<div className="mb-6">
				<h1 className="text-2xl font-bold text-gray-900">
					¡Bienvenido/a, Dr. {user?.name}!
				</h1>
				<p className="text-gray-600">Este es tu horario para hoy</p>
			</div>

			{/* Resumen de estadísticas */}
			<div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
				<div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
					<div className="flex items-center">
						<div className="p-3 rounded-full bg-cyan-100 text-cyan-800">
							<Calendar className="h-6 w-6" />
						</div>
						<div className="ml-4">
							<h3 className="text-sm font-medium text-gray-500">Pacientes de hoy</h3>
							<p className="text-2xl font-bold text-gray-900">
								{todayAppointments.length}
							</p>
						</div>
					</div>
				</div>

				<div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
					<div className="flex items-center">
						<div className="p-3 rounded-full bg-teal-100 text-teal-800">
							<User className="h-6 w-6" />
						</div>
						<div className="ml-4">
							<h3 className="text-sm font-medium text-gray-500">
								Total de pacientes
							</h3>
							<p className="text-2xl font-bold text-gray-900">452</p>
						</div>
					</div>
				</div>

				<div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
					<div className="flex items-center">
						<div className="p-3 rounded-full bg-pink-100 text-pink-800">
							<MessageSquare className="h-6 w-6" />
						</div>
						<div className="ml-4">
							<h3 className="text-sm font-medium text-gray-500">Mensajes sin leer</h3>
							<p className="text-2xl font-bold text-gray-900">5</p>
						</div>
					</div>
				</div>

				<div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
					<div className="flex items-center">
						<div className="p-3 rounded-full bg-amber-100 text-amber-800">
							<FileText className="h-6 w-6" />
						</div>
						<div className="ml-4">
							<h3 className="text-sm font-medium text-gray-500">
								Registros pendientes
							</h3>
							<p className="text-2xl font-bold text-gray-900">3</p>
						</div>
					</div>
				</div>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
				{/* Horario de hoy */}
				<div className="md:col-span-2 bg-white rounded-lg shadow-sm border border-gray-200">
					<div className="border-b border-gray-200 px-6 py-4 flex items-center justify-between">
						<h2 className="text-xl font-semibold text-gray-900">Agenda de hoy</h2>
						<Link
							to="/doctor/appointments"
							className="text-sm font-medium text-cyan-600 hover:text-cyan-700"
						>
							Ver todas
						</Link>
					</div>

					<div className="divide-y divide-gray-200">
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
						) : todayAppointments.length > 0 ? (
							todayAppointments.map((appointment, index) => (
								<div key={index} className="p-4 flex items-center">
									<div className="bg-cyan-50 p-3 rounded-full mr-4">
										<User className="h-6 w-6 text-cyan-700" />
									</div>
									<div className="flex-1">
										<h3 className="text-base font-medium text-gray-900">
											{appointment.patientName}
										</h3>
										<div className="flex items-center text-sm text-gray-500 mt-1">
											<Clock className="h-4 w-4 mr-1" />
											<span>{formatTime(appointment.date)}</span>
											<span className="mx-1">•</span>
											<span>
												{appointment.type === "virtual"
													? "Consulta virtual"
													: "Presencial"}
											</span>
										</div>
									</div>
									<div className="ml-4 flex">
										<button className="mr-2 p-2 text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded-full">
											<FileText className="h-5 w-5" />
										</button>
										<button className="p-2 text-cyan-600 hover:text-cyan-700 hover:bg-cyan-50 rounded-full">
											<MessageSquare className="h-5 w-5" />
										</button>
									</div>
								</div>
							))
						) : (
							<div className="p-6 text-center">
								<p className="text-gray-500">No hay citas programadas para hoy</p>
							</div>
						)}
					</div>
				</div>

				{/* Resumen semanal */}
				<div className="bg-white rounded-lg shadow-sm border border-gray-200">
					<div className="border-b border-gray-200 px-6 py-4">
						<h2 className="text-xl font-semibold text-gray-900">Resumen semanal</h2>
					</div>

					<div className="p-6">
						<div className="mb-6">
							<h3 className="text-sm font-medium text-gray-500 mb-2">
								Pacientes por grupo de edad
							</h3>
							<div className="space-y-2">
								<div>
									<div className="flex items-center justify-between mb-1">
										<span className="text-xs text-gray-500">0-18</span>
										<span className="text-xs font-medium text-gray-700">
											25%
										</span>
									</div>
									<div className="w-full bg-gray-200 rounded-full h-2">
										<div
											className="bg-cyan-500 h-2 rounded-full"
											style={{ width: "25%" }}
										></div>
									</div>
								</div>
								<div>
									<div className="flex items-center justify-between mb-1">
										<span className="text-xs text-gray-500">19-35</span>
										<span className="text-xs font-medium text-gray-700">
											30%
										</span>
									</div>
									<div className="w-full bg-gray-200 rounded-full h-2">
										<div
											className="bg-cyan-500 h-2 rounded-full"
											style={{ width: "30%" }}
										></div>
									</div>
								</div>
								<div>
									<div className="flex items-center justify-between mb-1">
										<span className="text-xs text-gray-500">36-50</span>
										<span className="text-xs font-medium text-gray-700">
											35%
										</span>
									</div>
									<div className="w-full bg-gray-200 rounded-full h-2">
										<div
											className="bg-cyan-500 h-2 rounded-full"
											style={{ width: "35%" }}
										></div>
									</div>
								</div>
								<div>
									<div className="flex items-center justify-between mb-1">
										<span className="text-xs text-gray-500">51+</span>
										<span className="text-xs font-medium text-gray-700">
											10%
										</span>
									</div>
									<div className="w-full bg-gray-200 rounded-full h-2">
										<div
											className="bg-cyan-500 h-2 rounded-full"
											style={{ width: "10%" }}
										></div>
									</div>
								</div>
							</div>
						</div>

						<div className="mb-6">
							<h3 className="text-sm font-medium text-gray-500 mb-2">
								Tipos de consulta
							</h3>
							<div className="flex items-center">
								<div className="w-24 h-24 relative">
									<svg viewBox="0 0 36 36" className="block w-full h-full">
										<path
											d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
											fill="none"
											stroke="#E5E7EB"
											strokeWidth="3"
										/>
										<path
											d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
											fill="none"
											stroke="#0891B2"
											strokeWidth="3"
											strokeDasharray="70, 100"
										/>
									</svg>
									<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
										<span className="text-2xl font-bold text-gray-900">
											70%
										</span>
									</div>
								</div>
								<div className="ml-4">
									<div className="flex items-center mb-1">
										<div className="w-3 h-3 bg-cyan-500 rounded-full mr-2"></div>
										<span className="text-sm text-gray-700">Presencial</span>
									</div>
									<div className="flex items-center">
										<div className="w-3 h-3 bg-gray-200 rounded-full mr-2"></div>
										<span className="text-sm text-gray-700">Virtual</span>
									</div>
								</div>
							</div>
						</div>

						<div>
							<h3 className="text-sm font-medium text-gray-500 mb-2">
								Tendencias de visitas
							</h3>
							<div className="flex items-center justify-between space-x-2">
								{["Lun", "Mar", "Mié", "Jue", "Vie", "Sáb", "Dom"].map((day, i) => (
									<div key={i} className="flex flex-col items-center">
										<div
											className="w-6 bg-cyan-500"
											style={{
												height: `${[40, 65, 50, 80, 70, 20, 10][i]}px`,
												opacity: i === 3 ? 1 : 0.7,
											}}
										></div>
										<span className="text-xs text-gray-500 mt-1">{day}</span>
									</div>
								))}
							</div>
						</div>

						<div className="mt-6 text-center">
							<Link
								to="/doctor/analytics"
								className="inline-flex items-center text-sm font-medium text-cyan-600 hover:text-cyan-700"
							>
								<BarChart2 className="h-4 w-4 mr-1" />
								Ver analíticas detalladas
							</Link>
						</div>
					</div>
				</div>
			</div>

			{/* Tareas y recordatorios */}
			<div className="mt-6 bg-white rounded-lg shadow-sm border border-gray-200">
				<div className="border-b border-gray-200 px-6 py-4">
					<h2 className="text-xl font-semibold text-gray-900">Tareas y recordatorios</h2>
				</div>

				<div className="divide-y divide-gray-200">
					<div className="p-4 flex items-start">
						<input
							type="checkbox"
							className="h-4 w-4 mt-1 text-cyan-600 focus:ring-cyan-500 border-gray-300 rounded"
						/>
						<div className="ml-3">
							<h3 className="text-sm font-medium text-gray-900">
								Revisar resultados de laboratorio de Johnson, Maria
							</h3>
							<p className="text-xs text-gray-500">Para hoy</p>
						</div>
						<div className="ml-auto">
							<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
								Urgente
							</span>
						</div>
					</div>

					<div className="p-4 flex items-start">
						<input
							type="checkbox"
							className="h-4 w-4 mt-1 text-cyan-600 focus:ring-cyan-500 border-gray-300 rounded"
						/>
						<div className="ml-3">
							<h3 className="text-sm font-medium text-gray-900">
								Completar certificado médico para Garcia, Juan
							</h3>
							<p className="text-xs text-gray-500">Para mañana</p>
						</div>
						<div className="ml-auto">
							<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
								Media
							</span>
						</div>
					</div>

					<div className="p-4 flex items-start">
						<input
							type="checkbox"
							className="h-4 w-4 mt-1 text-cyan-600 focus:ring-cyan-500 border-gray-300 rounded"
							defaultChecked
						/>
						<div className="ml-3">
							<h3 className="text-sm font-medium text-gray-900 line-through">
								Firmar notas de residentes
							</h3>
							<p className="text-xs text-gray-500 line-through">Completado hoy</p>
						</div>
						<div className="ml-auto">
							<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
								Completado
							</span>
						</div>
					</div>

					<div className="p-4">
						<button className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500">
							<span className="text-cyan-600 font-bold mr-1">+</span> Agregar tarea
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default DoctorDashboard;
