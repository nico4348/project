import { useState, FormEvent } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Eye, EyeOff, ArrowRight, AlertCircle } from "lucide-react";
import { useUser } from "../context/UserContext";

interface LocationState {
	from?: {
		pathname: string;
	};
}

const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [showPassword, setShowPassword] = useState(false);
	const [error, setError] = useState("");
	const [isSubmitting, setIsSubmitting] = useState(false);

	const { login, user } = useUser();
	const navigate = useNavigate();
	const location = useLocation();
	const locationState = location.state as LocationState;
	const getDefaultRedirectPath = () => {
		// If we have a user, use their role for redirection
		if (user?.role === "patient") return "/patient/dashboard";
		if (user?.role === "doctor") return "/doctor/dashboard";
		if (user?.role === "admin") return "/admin/dashboard";
		return "/";
	};
	const handleSubmit = async (e: FormEvent) => {
		e.preventDefault();

		if (!email || !password) {
			setError("Por favor ingrese correo y contraseña");
			return;
		}

		try {
			setError("");
			setIsSubmitting(true);

			const success = await login(email, password);

			if (success) {
				// Determine redirect path after successful login
				const userData = JSON.parse(localStorage.getItem('saludplus_user') || '{}');
				let redirectPath = "/";
				
				if (userData.role === "patient") redirectPath = "/patient/dashboard";
				else if (userData.role === "doctor") redirectPath = "/doctor/dashboard";
				else if (userData.role === "admin") redirectPath = "/admin/dashboard";
				
				// Use the intended destination or the role-based default
				const finalPath = locationState?.from?.pathname || redirectPath;
				navigate(finalPath, { replace: true });
			} else {
				setError("Correo o contraseña inválidos");
			}
		} catch (err) {
			setError("Ocurrió un error. Por favor intente nuevamente.");
			console.error(err);
		} finally {
			setIsSubmitting(false);
		}
	};

	const handleDemoLogin = (userType: "patient" | "doctor" | "admin") => {
		const credentials = {
			patient: { email: "patient@example.com", password: "patient123" },
			doctor: { email: "doctor@example.com", password: "doctor123" },
			admin: { email: "admin@example.com", password: "admin123" },
		};

		setEmail(credentials[userType].email);
		setPassword(credentials[userType].password);
	};

	return (
		<div className="min-h-screen flex">
			<div className="flex-1 flex flex-col justify-center px-4 py-12 sm:px-6 lg:px-20 xl:px-24">
				<div className="mx-auto w-full max-w-sm lg:max-w-md">
					<div className="text-center">
						<div className="mx-auto h-12 w-12 bg-cyan-600 rounded-full flex items-center justify-center">
							<span className="text-white font-bold text-lg">SP</span>
						</div>
						<h2 className="mt-6 text-3xl font-extrabold text-gray-900">SaludPlus</h2>
						<p className="mt-2 text-sm text-gray-600">
							Inicie sesión para acceder a los servicios médicos
						</p>
					</div>

					<div className="mt-8">
						{error && (
							<div className="mb-4 bg-red-50 border-l-4 border-red-500 p-4 rounded">
								<div className="flex items-center">
									<AlertCircle className="h-5 w-5 text-red-500 mr-2" />
									<p className="text-sm text-red-700">{error}</p>
								</div>
							</div>
						)}

						<form className="space-y-6" onSubmit={handleSubmit}>
							<div>
								<label
									htmlFor="email"
									className="block text-sm font-medium text-gray-700"
								>
									Correo electrónico
								</label>
								<div className="mt-1">
									<input
										id="email"
										name="email"
										type="email"
										autoComplete="email"
										required
										value={email}
										onChange={(e) => setEmail(e.target.value)}
										className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm"
										placeholder="Ingrese su correo"
									/>
								</div>
							</div>

							<div>
								<label
									htmlFor="password"
									className="block text-sm font-medium text-gray-700"
								>
									Contraseña
								</label>
								<div className="mt-1 relative">
									<input
										id="password"
										name="password"
										type={showPassword ? "text" : "password"}
										autoComplete="current-password"
										required
										value={password}
										onChange={(e) => setPassword(e.target.value)}
										className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm"
										placeholder="Ingrese su contraseña"
									/>
									<button
										type="button"
										className="absolute inset-y-0 right-0 pr-3 flex items-center"
										onClick={() => setShowPassword(!showPassword)}
										aria-label={
											showPassword
												? "Ocultar contraseña"
												: "Mostrar contraseña"
										}
									>
										{showPassword ? (
											<EyeOff className="h-5 w-5 text-gray-400" />
										) : (
											<Eye className="h-5 w-5 text-gray-400" />
										)}
									</button>
								</div>
							</div>

							<div className="flex items-center justify-between">
								<div className="flex items-center">
									<input
										id="remember-me"
										name="remember-me"
										type="checkbox"
										className="h-4 w-4 text-cyan-600 focus:ring-cyan-500 border-gray-300 rounded"
									/>
									<label
										htmlFor="remember-me"
										className="ml-2 block text-sm text-gray-700"
									>
										Recordarme
									</label>
								</div>

								<div className="text-sm">
									<a
										href="#"
										className="font-medium text-cyan-600 hover:text-cyan-500"
									>
										¿Olvidó su contraseña?
									</a>
								</div>
							</div>

							<div>
								<button
									type="submit"
									disabled={isSubmitting}
									className="w-full flex justify-center items-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-cyan-600 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 disabled:opacity-75 disabled:cursor-not-allowed"
								>
									{isSubmitting ? (
										<div className="flex items-center">
											<div className="animate-spin rounded-full h-4 w-4 border-t-2 border-b-2 border-white mr-2"></div>
											Iniciando sesión...
										</div>
									) : (
										<div className="flex items-center">
											Iniciar sesión
											<ArrowRight className="ml-2 h-4 w-4" />
										</div>
									)}
								</button>
							</div>
						</form>

						<div className="mt-6">
							<div className="relative">
								<div className="absolute inset-0 flex items-center">
									<div className="w-full border-t border-gray-300" />
								</div>
								<div className="relative flex justify-center text-sm">
									<span className="px-2 bg-white text-gray-500">
										¿No tiene una cuenta?
									</span>
								</div>
							</div>

							<div className="mt-6">
								<Link
									to="/register"
									className="w-full flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
								>
									Crear una cuenta
								</Link>
							</div>
						</div>

						<div className="mt-8">
							<div className="relative">
								<div className="absolute inset-0 flex items-center">
									<div className="w-full border-t border-gray-300" />
								</div>
								<div className="relative flex justify-center text-sm">
									<span className="px-2 bg-white text-gray-500">
										Cuentas de demostración
									</span>
								</div>
							</div>

							<div className="mt-4 grid grid-cols-3 gap-3">
								<button
									type="button"
									onClick={() => handleDemoLogin("patient")}
									className="inline-flex items-center justify-center px-3 py-2 border border-gray-300 shadow-sm text-xs font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
								>
									Paciente
								</button>
								<button
									type="button"
									onClick={() => handleDemoLogin("doctor")}
									className="inline-flex items-center justify-center px-3 py-2 border border-gray-300 shadow-sm text-xs font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
								>
									Doctor
								</button>
								<button
									type="button"
									onClick={() => handleDemoLogin("admin")}
									className="inline-flex items-center justify-center px-3 py-2 border border-gray-300 shadow-sm text-xs font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
								>
									Administrador
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="hidden lg:block relative w-0 flex-1">
				<div className="absolute inset-0 h-full w-full bg-cyan-700">
					<div className="absolute inset-0 bg-gradient-to-br from-cyan-600 to-cyan-900 opacity-90"></div>
					<div className="flex flex-col justify-center items-center h-full text-white p-12">
						<h2 className="text-3xl font-bold mb-6">Bienvenido a SaludPlus</h2>
						<div className="max-w-md">
							<p className="mb-6 text-cyan-50">
								Su solución integral de gestión sanitaria que prioriza a pacientes y
								profesionales.
							</p>
							<ul className="space-y-4">
								<li className="flex items-start">
									<div className="flex-shrink-0 h-6 w-6 bg-cyan-500 rounded-full flex items-center justify-center">
										<span className="text-white text-sm">✓</span>
									</div>
									<p className="ml-3 text-sm text-cyan-50">
										Programación de citas fácil con disponibilidad en tiempo
										real
									</p>
								</li>
								<li className="flex items-start">
									<div className="flex-shrink-0 h-6 w-6 bg-cyan-500 rounded-full flex items-center justify-center">
										<span className="text-white text-sm">✓</span>
									</div>
									<p className="ml-3 text-sm text-cyan-50">
										Acceso seguro a su historial médico completo
									</p>
								</li>
								<li className="flex items-start">
									<div className="flex-shrink-0 h-6 w-6 bg-cyan-500 rounded-full flex items-center justify-center">
										<span className="text-white text-sm">✓</span>
									</div>
									<p className="ml-3 text-sm text-cyan-50">
										Comunicación directa con sus profesionales de la salud
									</p>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;
