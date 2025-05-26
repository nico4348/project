import { useState, useEffect } from "react";
import { Calendar, Clock, User, FileText, MessageSquare } from "lucide-react";
import { Link } from "react-router-dom";
import { useUser } from "../../context/UserContext";
import { Appointment } from "../../types/appointment";
import { getAppointmentsByPatient } from "../../services/appointmentService";

const PatientDashboard = () => {
	const { user } = useUser();
	const [upcomingAppointments, setUpcomingAppointments] = useState<Appointment[]>([]);
	const [isLoading, setIsLoading] = useState(true);
	useEffect(() => {
		const fetchData = async () => {
			try {
				if (user?.id) {
					const appointments = await getAppointmentsByPatient(user.id);
					// Filter upcoming appointments (today and future)
					const now = new Date();
					const upcoming = appointments.filter((apt) => new Date(apt.date) >= now);
					setUpcomingAppointments(upcoming.slice(0, 3));
				}
			} catch (error) {
				console.error("Error al obtener las citas:", error);
			} finally {
				setIsLoading(false);
			}
		};
		fetchData();
	}, [user?.id]);

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

	return (
		<div>
			<div className="mb-6">
				<h1 className="text-2xl font-bold text-gray-900">¡Bienvenido, {user?.name}!</h1>
				<p className="text-gray-600">Esto es lo que está pasando con tu salud</p>
			</div>

			{/* Acciones rápidas */}
			<div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
				<Link
					to="/patient/appointments"
					className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
				>
					<div className="flex items-center">
						<div className="bg-cyan-100 p-3 rounded-full">
							<Calendar className="h-6 w-6 text-cyan-700" />
						</div>
						<div className="ml-4">
							<h3 className="text-lg font-medium text-gray-900">Agendar cita</h3>
							<p className="text-sm text-gray-500">
								Reserva una visita con un médico
							</p>
						</div>
					</div>
				</Link>

				<Link
					to="/patient/medical-records"
					className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
				>
					<div className="flex items-center">
						<div className="bg-teal-100 p-3 rounded-full">
							<FileText className="h-6 w-6 text-teal-700" />
						</div>
						<div className="ml-4">
							<h3 className="text-lg font-medium text-gray-900">Historial médico</h3>
							<p className="text-sm text-gray-500">Consulta tu historial de salud</p>
						</div>
					</div>
				</Link>

				<Link
					to="/patient/messages"
					className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
				>
					<div className="flex items-center">
						<div className="bg-pink-100 p-3 rounded-full">
							<MessageSquare className="h-6 w-6 text-pink-700" />
						</div>
						<div className="ml-4">
							<h3 className="text-lg font-medium text-gray-900">Mensajes</h3>
							<p className="text-sm text-gray-500">Contacta a tu equipo médico</p>
						</div>
					</div>
				</Link>
			</div>

			{/* Próximas citas */}
			<div className="bg-white rounded-lg shadow-sm border border-gray-200 mb-8">
				<div className="border-b border-gray-200 px-6 py-4 flex items-center justify-between">
					<h2 className="text-xl font-semibold text-gray-900">Próximas citas</h2>
					<Link
						to="/patient/appointments"
						className="text-sm font-medium text-cyan-600 hover:text-cyan-700"
					>
						Ver todas
					</Link>
				</div>

				<div className="divide-y divide-gray-200">
					{isLoading ? (
						<div className="p-6 flex justify-center">
							<div className="animate-pulse flex space-x-4 w-full">
								<div className="flex-1 space-y-4 py-1">
									<div className="h-4 bg-gray-200 rounded w-3/4"></div>
									<div className="space-y-2">
										<div className="h-4 bg-gray-200 rounded"></div>
										<div className="h-4 bg-gray-200 rounded w-5/6"></div>
									</div>
								</div>
							</div>
						</div>
					) : upcomingAppointments.length > 0 ? (
						upcomingAppointments.map((appointment, index) => (
							<div
								key={index}
								className="px-6 py-4 flex flex-col md:flex-row md:items-center md:justify-between"
							>
								<div className="flex items-start">
									<div className="p-2 bg-cyan-50 rounded-lg">
										<User className="h-10 w-10 text-cyan-700" />
									</div>
									<div className="ml-4">
										<h3 className="text-lg font-medium text-gray-900">
											Dr. {appointment.doctorName}
										</h3>
										<p className="text-sm text-gray-500">
											{appointment.specialty}
										</p>
										<div className="mt-2 flex items-center text-sm text-gray-500">
											<Calendar className="h-4 w-4 mr-1" />
											<span>{formatDate(appointment.date)}</span>
										</div>
										<div className="mt-1 flex items-center text-sm text-gray-500">
											<Clock className="h-4 w-4 mr-1" />
											<span>{formatTime(appointment.date)}</span>
										</div>
									</div>
								</div>
								<div className="mt-4 md:mt-0 flex flex-col sm:flex-row sm:space-x-3">
									<button className="px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 mb-2 sm:mb-0">
										Reagendar
									</button>
									<button className="px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-cyan-600 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500">
										Unirse a consulta virtual
									</button>
								</div>
							</div>
						))
					) : (
						<div className="p-6 text-center">
							<p className="text-gray-500">No tienes próximas citas</p>
							<Link
								to="/patient/appointments"
								className="inline-block mt-2 px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-cyan-600 hover:bg-cyan-700"
							>
								Agendar ahora
							</Link>
						</div>
					)}
				</div>
			</div>

			{/* Métricas de salud y recordatorios */}
			<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
				{/* Métricas de salud */}
				<div className="bg-white rounded-lg shadow-sm border border-gray-200">
					<div className="border-b border-gray-200 px-6 py-4">
						<h2 className="text-xl font-semibold text-gray-900">Métricas de salud</h2>
					</div>
					<div className="p-6">
						<div className="space-y-4">
							<div>
								<div className="flex items-center justify-between mb-2">
									<span className="text-sm font-medium text-gray-500">
										Presión arterial
									</span>
									<span className="text-sm font-semibold text-gray-900">
										120/80 mmHg
									</span>
								</div>
								<div className="w-full bg-gray-200 rounded-full h-2">
									<div
										className="bg-green-500 h-2 rounded-full"
										style={{ width: "70%" }}
									></div>
								</div>
								<div className="flex justify-between text-xs text-gray-500 mt-1">
									<span>Última actualización: 15 de mayo de 2025</span>
									<span>Normal</span>
								</div>
							</div>

							<div>
								<div className="flex items-center justify-between mb-2">
									<span className="text-sm font-medium text-gray-500">
										Frecuencia cardíaca
									</span>
									<span className="text-sm font-semibold text-gray-900">
										72 lpm
									</span>
								</div>
								<div className="w-full bg-gray-200 rounded-full h-2">
									<div
										className="bg-green-500 h-2 rounded-full"
										style={{ width: "65%" }}
									></div>
								</div>
								<div className="flex justify-between text-xs text-gray-500 mt-1">
									<span>Última actualización: 15 de mayo de 2025</span>
									<span>Normal</span>
								</div>
							</div>

							<div>
								<div className="flex items-center justify-between mb-2">
									<span className="text-sm font-medium text-gray-500">
										Glucosa en sangre
									</span>
									<span className="text-sm font-semibold text-gray-900">
										95 mg/dL
									</span>
								</div>
								<div className="w-full bg-gray-200 rounded-full h-2">
									<div
										className="bg-green-500 h-2 rounded-full"
										style={{ width: "60%" }}
									></div>
								</div>
								<div className="flex justify-between text-xs text-gray-500 mt-1">
									<span>Última actualización: 14 de mayo de 2025</span>
									<span>Normal</span>
								</div>
							</div>
						</div>

						<div className="mt-6">
							<button className="w-full px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500">
								Actualizar métricas
							</button>
						</div>
					</div>
				</div>

				{/* Recordatorios y tareas */}
				<div className="bg-white rounded-lg shadow-sm border border-gray-200">
					<div className="border-b border-gray-200 px-6 py-4">
						<h2 className="text-xl font-semibold text-gray-900">
							Recordatorios y tareas
						</h2>
					</div>
					<div className="divide-y divide-gray-200">
						<div className="p-4 flex items-start">
							<div className="h-5 w-5 border-2 border-cyan-600 rounded-full flex-shrink-0 mt-0.5"></div>
							<div className="ml-3">
								<h3 className="text-sm font-medium text-gray-900">
									Tomar medicamento
								</h3>
								<p className="text-xs text-gray-500">
									Lisinopril - 10mg - Diario a las 8:00 AM
								</p>
							</div>
						</div>

						<div className="p-4 flex items-start">
							<div className="h-5 w-5 border-2 border-cyan-600 rounded-full flex-shrink-0 mt-0.5"></div>
							<div className="ml-3">
								<h3 className="text-sm font-medium text-gray-900">
									Completar cuestionario previo a la cita
								</h3>
								<p className="text-xs text-gray-500">
									Para la cita con el Dr. Johnson el 20 de mayo
								</p>
								<button className="mt-2 px-3 py-1 text-xs font-medium rounded text-cyan-700 bg-cyan-100 hover:bg-cyan-200">
									Completar ahora
								</button>
							</div>
						</div>

						<div className="p-4 flex items-start">
							<div className="h-5 w-5 border-2 border-green-600 rounded-full flex-shrink-0 mt-0.5 flex items-center justify-center">
								<div className="h-2.5 w-2.5 bg-green-600 rounded-full"></div>
							</div>
							<div className="ml-3">
								<h3 className="text-sm font-medium text-gray-900 line-through">
									Agendar cita de seguimiento
								</h3>
								<p className="text-xs text-gray-500 line-through">
									Con el Dr. Smith para chequeo anual
								</p>
								<span className="text-xs text-green-600">
									Completado el 10 de mayo
								</span>
							</div>
						</div>

						<div className="p-4">
							<button className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500">
								<span className="text-cyan-600 font-bold mr-1">+</span> Agregar
								recordatorio
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PatientDashboard;
