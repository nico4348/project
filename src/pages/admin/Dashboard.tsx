import { useState, useEffect } from "react";
import { User, Calendar, FileText, BarChart2, Settings, Clock, AlertTriangle } from "lucide-react";
import { Link } from "react-router-dom";
import { useUser } from "../../context/UserContext";
import { getAllAppointments } from "../../services/appointmentService";
import { getAllUsers } from "../../services/userService";

const AdminDashboard = () => {
	const { user } = useUser();
	const [stats, setStats] = useState({
		totalPatients: 0,
		totalDoctors: 0,
		totalAppointments: 0,
		todayAppointments: 0,
	});
	const [isLoading, setIsLoading] = useState(true);
	useEffect(() => {
		const fetchData = async () => {
			try {
				const [appointments, users] = await Promise.all([
					getAllAppointments(),
					getAllUsers(),
				]);				// Filter users by role
				const doctors = users.filter(user => user.role === 'doctor');
				const patients = users.filter(user => user.role === 'patient');

				// Calcular citas de hoy
				const today = new Date();
				today.setHours(0, 0, 0, 0);
				const tomorrow = new Date(today);
				tomorrow.setDate(tomorrow.getDate() + 1);

				const todayAppts = appointments.filter((appointment) => {
					const appointmentDate = new Date(appointment.date);
					return appointmentDate >= today && appointmentDate < tomorrow;
				});

				setStats({
					totalPatients: patients.length,
					totalDoctors: doctors.length,
					totalAppointments: appointments.length,
					todayAppointments: todayAppts.length,
				});
			} catch (error) {
				console.error("Error al obtener datos:", error);
			} finally {
				setIsLoading(false);
			}
		};

		fetchData();
	}, []);

	return (
		<div>
			<div className="mb-6">
				<h1 className="text-2xl font-bold text-gray-900">Panel de Administración</h1>
				<p className="text-gray-600">Bienvenido/a, {user?.name}</p>
			</div>

			{/* Resumen de estadísticas */}
			<div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
				<div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
					<div className="flex items-center">
						<div className="p-3 rounded-full bg-cyan-100 text-cyan-800">
							<User className="h-6 w-6" />
						</div>
						<div className="ml-4">
							<h3 className="text-sm font-medium text-gray-500">
								Total de Pacientes
							</h3>
							{isLoading ? (
								<div className="h-6 w-16 bg-gray-200 rounded animate-pulse"></div>
							) : (
								<p className="text-2xl font-bold text-gray-900">
									{stats.totalPatients}
								</p>
							)}
						</div>
					</div>
				</div>

				<div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
					<div className="flex items-center">
						<div className="p-3 rounded-full bg-teal-100 text-teal-800">
							<User className="h-6 w-6" />
						</div>
						<div className="ml-4">
							<h3 className="text-sm font-medium text-gray-500">Total de Doctores</h3>
							{isLoading ? (
								<div className="h-6 w-16 bg-gray-200 rounded animate-pulse"></div>
							) : (
								<p className="text-2xl font-bold text-gray-900">
									{stats.totalDoctors}
								</p>
							)}
						</div>
					</div>
				</div>

				<div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
					<div className="flex items-center">
						<div className="p-3 rounded-full bg-pink-100 text-pink-800">
							<Calendar className="h-6 w-6" />
						</div>
						<div className="ml-4">
							<h3 className="text-sm font-medium text-gray-500">Total de Citas</h3>
							{isLoading ? (
								<div className="h-6 w-16 bg-gray-200 rounded animate-pulse"></div>
							) : (
								<p className="text-2xl font-bold text-gray-900">
									{stats.totalAppointments}
								</p>
							)}
						</div>
					</div>
				</div>

				<div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
					<div className="flex items-center">
						<div className="p-3 rounded-full bg-amber-100 text-amber-800">
							<Clock className="h-6 w-6" />
						</div>
						<div className="ml-4">
							<h3 className="text-sm font-medium text-gray-500">Citas de Hoy</h3>
							{isLoading ? (
								<div className="h-6 w-16 bg-gray-200 rounded animate-pulse"></div>
							) : (
								<p className="text-2xl font-bold text-gray-900">
									{stats.todayAppointments}
								</p>
							)}
						</div>
					</div>
				</div>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
				{/* Línea de tiempo de actividad */}
				<div className="md:col-span-2 bg-white rounded-lg shadow-sm border border-gray-200">
					<div className="border-b border-gray-200 px-6 py-4">
						<h2 className="text-xl font-semibold text-gray-900">Actividad Reciente</h2>
					</div>

					<div className="p-6">
						{isLoading ? (
							<div className="animate-pulse space-y-6">
								{[...Array(4)].map((_, i) => (
									<div key={i} className="flex space-x-4">
										<div className="rounded-full bg-gray-200 h-10 w-10"></div>
										<div className="flex-1 space-y-3 py-1">
											<div className="h-4 bg-gray-200 rounded w-3/4"></div>
											<div className="h-3 bg-gray-200 rounded w-1/2"></div>
										</div>
									</div>
								))}
							</div>
						) : (
							<div className="flow-root">
								<ul className="-mb-8">
									<li>
										<div className="relative pb-8">
											<span
												className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200"
												aria-hidden="true"
											></span>
											<div className="relative flex space-x-3">
												<div>
													<span className="h-8 w-8 rounded-full bg-cyan-500 flex items-center justify-center ring-8 ring-white">
														<User className="h-5 w-5 text-white" />
													</span>
												</div>
												<div className="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
													<div>
														<p className="text-sm text-gray-900">
															Nuevo paciente{" "}
															<span className="font-medium">
																Jessica Chen
															</span>{" "}
															registrado
														</p>
													</div>
													<div className="text-right text-sm whitespace-nowrap text-gray-500">
														<time>Justo ahora</time>
													</div>
												</div>
											</div>
										</div>
									</li>

									<li>
										<div className="relative pb-8">
											<span
												className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200"
												aria-hidden="true"
											></span>
											<div className="relative flex space-x-3">
												<div>
													<span className="h-8 w-8 rounded-full bg-green-500 flex items-center justify-center ring-8 ring-white">
														<Calendar className="h-5 w-5 text-white" />
													</span>
												</div>
												<div className="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
													<div>
														<p className="text-sm text-gray-900">
															Dr. Johnson{" "}
															<span className="font-medium">
																confirmó
															</span>{" "}
															5 citas
														</p>
													</div>
													<div className="text-right text-sm whitespace-nowrap text-gray-500">
														<time>Hace 30 minutos</time>
													</div>
												</div>
											</div>
										</div>
									</li>

									<li>
										<div className="relative pb-8">
											<span
												className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200"
												aria-hidden="true"
											></span>
											<div className="relative flex space-x-3">
												<div>
													<span className="h-8 w-8 rounded-full bg-red-500 flex items-center justify-center ring-8 ring-white">
														<AlertTriangle className="h-5 w-5 text-white" />
													</span>
												</div>
												<div className="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
													<div>
														<p className="text-sm text-gray-900">
															Alerta del sistema:{" "}
															<span className="font-medium">
																Fallo en la copia de seguridad de la
																base de datos
															</span>
														</p>
													</div>
													<div className="text-right text-sm whitespace-nowrap text-gray-500">
														<time>Hace 2 horas</time>
													</div>
												</div>
											</div>
										</div>
									</li>

									<li>
										<div className="relative pb-8">
											<div className="relative flex space-x-3">
												<div>
													<span className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center ring-8 ring-white">
														<FileText className="h-5 w-5 text-white" />
													</span>
												</div>
												<div className="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
													<div>
														<p className="text-sm text-gray-900">
															Informe mensual{" "}
															<span className="font-medium">
																generado y enviado
															</span>{" "}
															a la gerencia
														</p>
													</div>
													<div className="text-right text-sm whitespace-nowrap text-gray-500">
														<time>Ayer</time>
													</div>
												</div>
											</div>
										</div>
									</li>
								</ul>
							</div>
						)}

						<div className="mt-6">
							<Link
								to="/admin/activity"
								className="text-sm font-medium text-cyan-600 hover:text-cyan-700"
							>
								Ver toda la actividad
							</Link>
						</div>
					</div>
				</div>

				{/* Estado del sistema */}
				<div className="bg-white rounded-lg shadow-sm border border-gray-200">
					<div className="border-b border-gray-200 px-6 py-4">
						<h2 className="text-xl font-semibold text-gray-900">Estado del Sistema</h2>
					</div>

					<div className="p-6">
						<div className="space-y-4">
							<div>
								<div className="flex items-center justify-between mb-2">
									<span className="text-sm font-medium text-gray-500">
										Tiempo en línea del servidor
									</span>
									<span className="text-sm font-medium text-green-600">
										En línea
									</span>
								</div>
								<div className="w-full bg-gray-200 rounded-full h-2">
									<div
										className="bg-green-500 h-2 rounded-full"
										style={{ width: "99.9%" }}
									></div>
								</div>
								<div className="flex justify-between text-xs text-gray-500 mt-1">
									<span>Último reinicio: hace 15 días</span>
									<span>99.9%</span>
								</div>
							</div>

							<div>
								<div className="flex items-center justify-between mb-2">
									<span className="text-sm font-medium text-gray-500">
										Carga de la base de datos
									</span>
									<span className="text-sm font-medium text-green-600">
										Normal
									</span>
								</div>
								<div className="w-full bg-gray-200 rounded-full h-2">
									<div
										className="bg-green-500 h-2 rounded-full"
										style={{ width: "42%" }}
									></div>
								</div>
								<div className="flex justify-between text-xs text-gray-500 mt-1">
									<span>Consultas actuales: 23/s</span>
									<span>42%</span>
								</div>
							</div>

							<div>
								<div className="flex items-center justify-between mb-2">
									<span className="text-sm font-medium text-gray-500">
										Tiempo de respuesta API
									</span>
									<span className="text-sm font-medium text-green-600">
										Rápido
									</span>
								</div>
								<div className="w-full bg-gray-200 rounded-full h-2">
									<div
										className="bg-green-500 h-2 rounded-full"
										style={{ width: "15%" }}
									></div>
								</div>
								<div className="flex justify-between text-xs text-gray-500 mt-1">
									<span>Promedio: 120ms</span>
									<span>15%</span>
								</div>
							</div>

							<div>
								<div className="flex items-center justify-between mb-2">
									<span className="text-sm font-medium text-gray-500">
										Almacenamiento usado
									</span>
									<span className="text-sm font-medium text-yellow-600">
										Advertencia
									</span>
								</div>
								<div className="w-full bg-gray-200 rounded-full h-2">
									<div
										className="bg-yellow-500 h-2 rounded-full"
										style={{ width: "76%" }}
									></div>
								</div>
								<div className="flex justify-between text-xs text-gray-500 mt-1">
									<span>76GB de 100GB usados</span>
									<span>76%</span>
								</div>
							</div>
						</div>

						<div className="mt-6">
							<button className="w-full px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500">
								<span className="flex items-center justify-center">
									<Settings className="h-4 w-4 mr-2" />
									Configuración del sistema
								</span>
							</button>
						</div>
					</div>
				</div>
			</div>

			{/* Resumen de analíticas */}
			<div className="bg-white rounded-lg shadow-sm border border-gray-200 mb-6">
				<div className="border-b border-gray-200 px-6 py-4 flex items-center justify-between">
					<h2 className="text-xl font-semibold text-gray-900">Resumen Analítico</h2>
					<Link
						to="/admin/analytics"
						className="text-sm font-medium text-cyan-600 hover:text-cyan-700"
					>
						Reportes Detallados
					</Link>
				</div>

				<div className="p-6">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
						{/* Citas por departamento */}
						<div>
							<h3 className="text-sm font-medium text-gray-700 mb-4">
								Citas por Departamento
							</h3>
							<div className="space-y-4">
								<div>
									<div className="flex items-center justify-between mb-1">
										<span className="text-sm text-gray-600">Cardiología</span>
										<span className="text-sm font-medium text-gray-900">
											32%
										</span>
									</div>
									<div className="w-full bg-gray-200 rounded-full h-2">
										<div
											className="bg-cyan-500 h-2 rounded-full"
											style={{ width: "32%" }}
										></div>
									</div>
								</div>
								<div>
									<div className="flex items-center justify-between mb-1">
										<span className="text-sm text-gray-600">Pediatría</span>
										<span className="text-sm font-medium text-gray-900">
											24%
										</span>
									</div>
									<div className="w-full bg-gray-200 rounded-full h-2">
										<div
											className="bg-cyan-500 h-2 rounded-full"
											style={{ width: "24%" }}
										></div>
									</div>
								</div>
								<div>
									<div className="flex items-center justify-between mb-1">
										<span className="text-sm text-gray-600">Dermatología</span>
										<span className="text-sm font-medium text-gray-900">
											18%
										</span>
									</div>
									<div className="w-full bg-gray-200 rounded-full h-2">
										<div
											className="bg-cyan-500 h-2 rounded-full"
											style={{ width: "18%" }}
										></div>
									</div>
								</div>
								<div>
									<div className="flex items-center justify-between mb-1">
										<span className="text-sm text-gray-600">Neurología</span>
										<span className="text-sm font-medium text-gray-900">
											14%
										</span>
									</div>
									<div className="w-full bg-gray-200 rounded-full h-2">
										<div
											className="bg-cyan-500 h-2 rounded-full"
											style={{ width: "14%" }}
										></div>
									</div>
								</div>
								<div>
									<div className="flex items-center justify-between mb-1">
										<span className="text-sm text-gray-600">Otros</span>
										<span className="text-sm font-medium text-gray-900">
											12%
										</span>
									</div>
									<div className="w-full bg-gray-200 rounded-full h-2">
										<div
											className="bg-cyan-500 h-2 rounded-full"
											style={{ width: "12%" }}
										></div>
									</div>
								</div>
							</div>
						</div>

						{/* Citas por mes */}
						<div>
							<h3 className="text-sm font-medium text-gray-700 mb-4">
								Citas por Mes
							</h3>
							<div className="flex items-end justify-between h-44 space-x-2">
								{["Ene", "Feb", "Mar", "Abr", "May", "Jun"].map((month, i) => {
									const heights = [30, 45, 60, 40, 75, 85];
									return (
										<div key={i} className="flex flex-col items-center flex-1">
											<div
												className="w-full bg-cyan-500 rounded-t-sm"
												style={{ height: `${heights[i]}%` }}
											></div>
											<span className="text-xs text-gray-500 mt-1">
												{month}
											</span>
										</div>
									);
								})}
							</div>
						</div>
					</div>

					<div className="mt-6 pt-6 border-t border-gray-200">
						<h3 className="text-sm font-medium text-gray-700 mb-4">
							Indicadores Clave de Desempeño
						</h3>
						<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
							<div className="bg-gray-50 p-4 rounded-lg">
								<div className="flex items-center">
									<div className="flex-shrink-0 p-2 bg-green-100 rounded-md">
										<div className="h-8 w-8 text-green-600">+4.2%</div>
									</div>
									<div className="ml-3">
										<p className="text-sm font-medium text-gray-900">
											Satisfacción del Paciente
										</p>
										<p className="text-xs text-gray-500">
											Mejoró respecto al mes pasado
										</p>
									</div>
								</div>
							</div>

							<div className="bg-gray-50 p-4 rounded-lg">
								<div className="flex items-center">
									<div className="flex-shrink-0 p-2 bg-red-100 rounded-md">
										<div className="h-8 w-8 text-red-600">-2.1%</div>
									</div>
									<div className="ml-3">
										<p className="text-sm font-medium text-gray-900">
											Tasa de Ausencias
										</p>
										<p className="text-xs text-gray-500">
											Disminuyó respecto al mes pasado
										</p>
									</div>
								</div>
							</div>

							<div className="bg-gray-50 p-4 rounded-lg">
								<div className="flex items-center">
									<div className="flex-shrink-0 p-2 bg-yellow-100 rounded-md">
										<div className="h-8 w-8 text-yellow-600">24 min</div>
									</div>
									<div className="ml-3">
										<p className="text-sm font-medium text-gray-900">
											Tiempo de Espera Promedio
										</p>
										<p className="text-xs text-gray-500">
											Igual que el mes pasado
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Acciones rápidas */}
			<div className="grid grid-cols-1 md:grid-cols-4 gap-4">
				<Link
					to="/admin/users"
					className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
				>
					<div className="flex items-center">
						<div className="bg-cyan-100 p-3 rounded-full">
							<User className="h-6 w-6 text-cyan-700" />
						</div>
						<div className="ml-4">
							<h3 className="text-lg font-medium text-gray-900">
								Gestión de Usuarios
							</h3>
							<p className="text-sm text-gray-500">
								Agregar o modificar cuentas de usuario
							</p>
						</div>
					</div>
				</Link>

				<Link
					to="/admin/analytics"
					className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
				>
					<div className="flex items-center">
						<div className="bg-teal-100 p-3 rounded-full">
							<BarChart2 className="h-6 w-6 text-teal-700" />
						</div>
						<div className="ml-4">
							<h3 className="text-lg font-medium text-gray-900">Analíticas</h3>
							<p className="text-sm text-gray-500">Ver reportes detallados</p>
						</div>
					</div>
				</Link>

				<Link
					to="/admin/settings"
					className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
				>
					<div className="flex items-center">
						<div className="bg-pink-100 p-3 rounded-full">
							<Settings className="h-6 w-6 text-pink-700" />
						</div>
						<div className="ml-4">
							<h3 className="text-lg font-medium text-gray-900">Configuración</h3>
							<p className="text-sm text-gray-500">Configurar ajustes del sistema</p>
						</div>
					</div>
				</Link>

				<button className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
					<div className="flex items-center">
						<div className="bg-amber-100 p-3 rounded-full">
							<FileText className="h-6 w-6 text-amber-700" />
						</div>
						<div className="ml-4">
							<h3 className="text-lg font-medium text-gray-900">Generar Informe</h3>
							<p className="text-sm text-gray-500">Crear un informe del sistema</p>
						</div>
					</div>
				</button>
			</div>
		</div>
	);
};

export default AdminDashboard;
