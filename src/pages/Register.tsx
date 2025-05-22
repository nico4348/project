import { useState, FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff, ArrowRight, AlertCircle, Check } from "lucide-react";
import { useUser } from "../context/UserContext";
import { UserData } from "../types/user";

const Register = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		password: "",
		confirmPassword: "",
		role: "patient",
		dateOfBirth: "",
		phone: "",
	});
	const [showPassword, setShowPassword] = useState(false);
	const [error, setError] = useState("");
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [step, setStep] = useState(1);

	const { register } = useUser();
	const navigate = useNavigate();

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	const validateStep1 = () => {
		if (!formData.name || !formData.email || !formData.password || !formData.confirmPassword) {
			setError("Por favor completa todos los campos requeridos");
			return false;
		}

		if (formData.password !== formData.confirmPassword) {
			setError("Las contraseñas no coinciden");
			return false;
		}

		if (formData.password.length < 6) {
			setError("La contraseña debe tener al menos 6 caracteres");
			return false;
		}

		return true;
	};

	const handleNextStep = () => {
		if (validateStep1()) {
			setError("");
			setStep(2);
		}
	};

	const handlePrevStep = () => {
		setStep(1);
	};

	const handleSubmit = async (e: FormEvent) => {
		e.preventDefault();

		try {
			setError("");
			setIsSubmitting(true);

			const userData: Omit<UserData, "id"> = {
				name: formData.name,
				email: formData.email,
				role: formData.role as "patient" | "doctor" | "admin",
				dateOfBirth: formData.dateOfBirth,
				phone: formData.phone,
			};

			const success = await register(userData);

			if (success) {
				navigate(formData.role === "patient" ? "/patient/dashboard" : "/login");
			} else {
				setError("El registro falló. Por favor intenta nuevamente.");
			}
		} catch (err) {
			setError("Ocurrió un error. Por favor intenta nuevamente.");
			console.error(err);
		} finally {
			setIsSubmitting(false);
		}
	};

	const passwordStrength = (): { strength: string; color: string } => {
		const { password } = formData;
		if (!password) return { strength: "Ninguna", color: "gray-200" };
		if (password.length < 6) return { strength: "Débil", color: "red-500" };
		if (password.length < 10) return { strength: "Media", color: "yellow-500" };
		return { strength: "Fuerte", color: "green-500" };
	};

	const renderStep1 = () => (
		<>
			<div>
				<label htmlFor="name" className="block text-sm font-medium text-gray-700">
					Nombre completo
				</label>
				<div className="mt-1">
					<input
						id="name"
						name="name"
						type="text"
						autoComplete="name"
						required
						value={formData.name}
						onChange={handleChange}
						className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm"
						placeholder="Ingresa tu nombre completo"
					/>
				</div>
			</div>

			<div>
				<label htmlFor="email" className="block text-sm font-medium text-gray-700">
					Correo electrónico
				</label>
				<div className="mt-1">
					<input
						id="email"
						name="email"
						type="email"
						autoComplete="email"
						required
						value={formData.email}
						onChange={handleChange}
						className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm"
						placeholder="Ingresa tu correo electrónico"
					/>
				</div>
			</div>

			<div>
				<label htmlFor="password" className="block text-sm font-medium text-gray-700">
					Contraseña
				</label>
				<div className="mt-1 relative">
					<input
						id="password"
						name="password"
						type={showPassword ? "text" : "password"}
						autoComplete="new-password"
						required
						value={formData.password}
						onChange={handleChange}
						className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm"
						placeholder="Crea una contraseña"
					/>
					<button
						type="button"
						className="absolute inset-y-0 right-0 pr-3 flex items-center"
						onClick={() => setShowPassword(!showPassword)}
					>
						{showPassword ? (
							<EyeOff className="h-5 w-5 text-gray-400" />
						) : (
							<Eye className="h-5 w-5 text-gray-400" />
						)}
					</button>
				</div>

				{formData.password && (
					<div className="mt-2">
						<div className="h-1 w-full bg-gray-200 rounded overflow-hidden">
							<div
								className={`h-full bg-${passwordStrength().color}`}
								style={{
									width: `${Math.min(
										100,
										(formData.password.length / 12) * 100
									)}%`,
								}}
							></div>
						</div>
						<p className={`text-xs mt-1 text-${passwordStrength().color}`}>
							Fortaleza de la contraseña: {passwordStrength().strength}
						</p>
					</div>
				)}
			</div>

			<div>
				<label
					htmlFor="confirmPassword"
					className="block text-sm font-medium text-gray-700"
				>
					Confirmar contraseña
				</label>
				<div className="mt-1 relative">
					<input
						id="confirmPassword"
						name="confirmPassword"
						type={showPassword ? "text" : "password"}
						autoComplete="new-password"
						required
						value={formData.confirmPassword}
						onChange={handleChange}
						className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm"
						placeholder="Confirma tu contraseña"
					/>
				</div>

				{formData.password && formData.confirmPassword && (
					<div className="mt-1 flex items-center">
						{formData.password === formData.confirmPassword ? (
							<div className="flex items-center text-green-500 text-xs">
								<Check className="h-3 w-3 mr-1" />
								Las contraseñas coinciden
							</div>
						) : (
							<p className="text-red-500 text-xs">Las contraseñas no coinciden</p>
						)}
					</div>
				)}
			</div>

			<div className="pt-4">
				<button
					type="button"
					onClick={handleNextStep}
					className="w-full flex justify-center items-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-cyan-600 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
				>
					<div className="flex items-center">
						Continuar
						<ArrowRight className="ml-2 h-4 w-4" />
					</div>
				</button>
			</div>
		</>
	);

	const renderStep2 = () => (
		<>
			<div>
				<label htmlFor="role" className="block text-sm font-medium text-gray-700">
					Soy
				</label>
				<div className="mt-1">
					<select
						id="role"
						name="role"
						value={formData.role}
						onChange={handleChange}
						className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm"
					>
						<option value="patient">Paciente</option>
						<option value="doctor">Médico</option>
						{/* El registro de administrador normalmente está restringido */}
					</select>
				</div>
			</div>

			<div>
				<label htmlFor="dateOfBirth" className="block text-sm font-medium text-gray-700">
					Fecha de nacimiento
				</label>
				<div className="mt-1">
					<input
						id="dateOfBirth"
						name="dateOfBirth"
						type="date"
						value={formData.dateOfBirth}
						onChange={handleChange}
						className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm"
					/>
				</div>
			</div>

			<div>
				<label htmlFor="phone" className="block text-sm font-medium text-gray-700">
					Teléfono
				</label>
				<div className="mt-1">
					<input
						id="phone"
						name="phone"
						type="tel"
						autoComplete="tel"
						value={formData.phone}
						onChange={handleChange}
						className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm"
						placeholder="Ingresa tu número de teléfono"
					/>
				</div>
			</div>

			{formData.role === "doctor" && (
				<div className="rounded-md bg-yellow-50 p-4">
					<div className="flex">
						<div className="flex-shrink-0">
							<AlertCircle className="h-5 w-5 text-yellow-400" />
						</div>
						<div className="ml-3">
							<h3 className="text-sm font-medium text-yellow-800">
								Verificación de médico requerida
							</h3>
							<div className="mt-2 text-sm text-yellow-700">
								<p>
									Después del registro, deberás enviar tus credenciales médicas
									para verificación antes de poder acceder al portal de médicos.
								</p>
							</div>
						</div>
					</div>
				</div>
			)}

			<div className="pt-4 flex space-x-2">
				<button
					type="button"
					onClick={handlePrevStep}
					className="flex-1 flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
				>
					Atrás
				</button>
				<button
					type="submit"
					disabled={isSubmitting}
					className="flex-1 flex justify-center items-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-cyan-600 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 disabled:opacity-75 disabled:cursor-not-allowed"
				>
					{isSubmitting ? (
						<div className="flex items-center">
							<div className="animate-spin rounded-full h-4 w-4 border-t-2 border-b-2 border-white mr-2"></div>
							Registrando...
						</div>
					) : (
						<div className="flex items-center">Crear cuenta</div>
					)}
				</button>
			</div>
		</>
	);

	return (
		<div className="min-h-screen flex bg-gray-50">
			{/* Lado izquierdo - Formulario de registro */}
			<div className="flex-1 flex flex-col justify-center px-4 py-12 sm:px-6 lg:px-20 xl:px-24">
				<div className="mx-auto w-full max-w-sm lg:max-w-md">
					<div className="text-center">
						<div className="mx-auto h-12 w-12 bg-cyan-600 rounded-full flex items-center justify-center">
							<span className="text-white font-bold text-lg">SP</span>
						</div>
						<h2 className="mt-6 text-3xl font-extrabold text-gray-900">
							Crea tu cuenta
						</h2>
						<p className="mt-2 text-sm text-gray-600">
							Únete a SaludPlus para gestionar tu salud
						</p>
					</div>

					<div className="mt-8">
						{/* Indicador de progreso */}
						<div className="mb-8">
							<div className="flex items-center justify-between">
								<div className="flex flex-col items-center">
									<div
										className={`h-8 w-8 rounded-full flex items-center justify-center ${
											step >= 1
												? "bg-cyan-600 text-white"
												: "bg-gray-200 text-gray-600"
										}`}
									>
										1
									</div>
									<span className="mt-1 text-xs text-gray-500">Cuenta</span>
								</div>
								<div className="flex-1 h-1 mx-2 bg-gray-200">
									<div
										className={`h-full ${
											step >= 2 ? "bg-cyan-600" : "bg-gray-200"
										}`}
									></div>
								</div>
								<div className="flex flex-col items-center">
									<div
										className={`h-8 w-8 rounded-full flex items-center justify-center ${
											step >= 2
												? "bg-cyan-600 text-white"
												: "bg-gray-200 text-gray-600"
										}`}
									>
										2
									</div>
									<span className="mt-1 text-xs text-gray-500">Perfil</span>
								</div>
							</div>
						</div>

						{error && (
							<div className="mb-4 bg-red-50 border-l-4 border-red-500 p-4 rounded">
								<div className="flex items-center">
									<AlertCircle className="h-5 w-5 text-red-500 mr-2" />
									<p className="text-sm text-red-700">{error}</p>
								</div>
							</div>
						)}

						<form className="space-y-6" onSubmit={handleSubmit}>
							{step === 1 ? renderStep1() : renderStep2()}
						</form>

						<div className="mt-6 text-center">
							<p className="text-sm text-gray-600">
								¿Ya tienes una cuenta?{" "}
								<Link
									to="/login"
									className="font-medium text-cyan-600 hover:text-cyan-500"
								>
									Iniciar sesión
								</Link>
							</p>
						</div>
					</div>
				</div>
			</div>

			{/* Lado derecho - Imagen (oculto en móvil) */}
			<div className="hidden lg:block relative w-0 flex-1">
				<div className="absolute inset-0 h-full w-full bg-gradient-to-br from-cyan-600 to-cyan-900">
					<div className="flex flex-col justify-center items-center h-full text-white p-12">
						<h2 className="text-3xl font-bold mb-6">Únete a SaludPlus hoy</h2>
						<div className="max-w-md">
							<p className="mb-6 text-cyan-50">
								Crea tu cuenta y disfruta de estos beneficios:
							</p>
							<ul className="space-y-4">
								<li className="flex items-start">
									<div className="flex-shrink-0 h-6 w-6 bg-cyan-500 rounded-full flex items-center justify-center">
										<span className="text-white text-sm">✓</span>
									</div>
									<p className="ml-3 text-sm text-cyan-50">
										Agenda turnos con tus médicos preferidos
									</p>
								</li>
								<li className="flex items-start">
									<div className="flex-shrink-0 h-6 w-6 bg-cyan-500 rounded-full flex items-center justify-center">
										<span className="text-white text-sm">✓</span>
									</div>
									<p className="ml-3 text-sm text-cyan-50">
										Accede a tu historial médico completo en un solo lugar
									</p>
								</li>
								<li className="flex items-start">
									<div className="flex-shrink-0 h-6 w-6 bg-cyan-500 rounded-full flex items-center justify-center">
										<span className="text-white text-sm">✓</span>
									</div>
									<p className="ml-3 text-sm text-cyan-50">
										Mensajería segura con tu equipo de salud
									</p>
								</li>
								<li className="flex items-start">
									<div className="flex-shrink-0 h-6 w-6 bg-cyan-500 rounded-full flex items-center justify-center">
										<span className="text-white text-sm">✓</span>
									</div>
									<p className="ml-3 text-sm text-cyan-50">
										Recibe recordatorios de turnos y seguimiento
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

export default Register;
