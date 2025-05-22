import { useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import {
	Home,
	Calendar,
	FileText,
	MessageSquare,
	Users,
	BarChart,
	Settings,
	X,
	Heart,
	Stethoscope,
	ShieldCheck,
} from "lucide-react";
import { UserRole } from "../../types/user";

interface SidebarProps {
	isOpen: boolean;
	toggleSidebar: () => void;
	userRole?: UserRole;
}

const Sidebar = ({ isOpen, toggleSidebar, userRole }: SidebarProps) => {
	const location = useLocation();
	const sidebarRef = useRef<HTMLDivElement>(null);

	// Cierra el sidebar al hacer clic fuera en móvil
	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (
				isOpen &&
				sidebarRef.current &&
				!sidebarRef.current.contains(event.target as Node)
			) {
				toggleSidebar();
			}
		};

		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [isOpen, toggleSidebar]);

	const isActive = (path: string) => {
		return location.pathname.startsWith(path);
	};

	const renderNavItems = () => {
		switch (userRole) {
			case "patient":
				return (
					<>
						<NavItem
							to="/patient/dashboard"
							icon={<Home className="h-5 w-5" />}
							label="Inicio"
							active={isActive("/patient/dashboard")}
						/>
						<NavItem
							to="/patient/appointments"
							icon={<Calendar className="h-5 w-5" />}
							label="Mis turnos"
							active={isActive("/patient/appointments")}
						/>
						<NavItem
							to="/patient/medical-records"
							icon={<FileText className="h-5 w-5" />}
							label="Historia clínica"
							active={isActive("/patient/medical-records")}
						/>
						<NavItem
							to="/patient/messages"
							icon={<MessageSquare className="h-5 w-5" />}
							label="Mensajes"
							active={isActive("/patient/messages")}
						/>
					</>
				);
			case "doctor":
				return (
					<>
						<NavItem
							to="/doctor/dashboard"
							icon={<Home className="h-5 w-5" />}
							label="Inicio"
							active={isActive("/doctor/dashboard")}
						/>
						<NavItem
							to="/doctor/appointments"
							icon={<Calendar className="h-5 w-5" />}
							label="Turnos"
							active={isActive("/doctor/appointments")}
						/>
						<NavItem
							to="/doctor/medical-records"
							icon={<FileText className="h-5 w-5" />}
							label="Historias clínicas"
							active={isActive("/doctor/medical-records")}
						/>
						<NavItem
							to="/doctor/messages"
							icon={<MessageSquare className="h-5 w-5" />}
							label="Mensajes"
							active={isActive("/doctor/messages")}
						/>
					</>
				);
			case "admin":
				return (
					<>
						<NavItem
							to="/admin/dashboard"
							icon={<Home className="h-5 w-5" />}
							label="Inicio"
							active={isActive("/admin/dashboard")}
						/>
						<NavItem
							to="/admin/users"
							icon={<Users className="h-5 w-5" />}
							label="Usuarios"
							active={isActive("/admin/users")}
						/>
						<NavItem
							to="/admin/analytics"
							icon={<BarChart className="h-5 w-5" />}
							label="Analíticas"
							active={isActive("/admin/analytics")}
						/>
						<NavItem
							to="/admin/settings"
							icon={<Settings className="h-5 w-5" />}
							label="Configuración"
							active={isActive("/admin/settings")}
						/>
					</>
				);
			default:
				return null;
		}
	};

	return (
		<>
			{/* Fondo del sidebar en móvil */}
			{isOpen && (
				<div
					className="fixed inset-0 bg-gray-600 bg-opacity-75 z-20 md:hidden"
					onClick={toggleSidebar}
				></div>
			)}

			{/* Sidebar */}
			<div
				ref={sidebarRef}
				className={`fixed md:sticky top-0 bottom-0 left-0 flex flex-col w-64 h-screen bg-white border-r border-gray-200 z-30 transform transition-transform duration-300 ease-in-out ${
					isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
				}`}
			>
				<div className="flex items-center justify-between p-4 border-b border-gray-200">
					<div className="flex items-center">
						<div className="h-8 w-8 bg-cyan-600 rounded-full flex items-center justify-center">
							<span className="text-white font-bold text-sm">SP</span>
						</div>
						<h1 className="ml-2 text-xl font-bold text-gray-900">SaludPlus</h1>
					</div>
					<button
						onClick={toggleSidebar}
						className="rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-cyan-600 md:hidden"
					>
						<X className="h-6 w-6" />
					</button>
				</div>

				<div className="flex-1 overflow-y-auto">
					<div className="px-4 py-6">
						{userRole === "patient" && (
							<div className="flex items-center px-2 py-3 mb-6 bg-cyan-50 rounded-lg">
								<Heart className="h-5 w-5 text-pink-500 mr-3" />
								<div>
									<p className="text-sm font-medium text-gray-900">
										Tu próximo turno
									</p>
									<p className="text-xs text-gray-500">Mañana, 9:00 AM</p>
								</div>
							</div>
						)}

						{userRole === "doctor" && (
							<div className="flex items-center px-2 py-3 mb-6 bg-cyan-50 rounded-lg">
								<Stethoscope className="h-5 w-5 text-teal-600 mr-3" />
								<div>
									<p className="text-sm font-medium text-gray-900">
										Próximos turnos
									</p>
									<p className="text-xs text-gray-500">Hoy: 6 pacientes</p>
								</div>
							</div>
						)}

						{userRole === "admin" && (
							<div className="flex items-center px-2 py-3 mb-6 bg-cyan-50 rounded-lg">
								<ShieldCheck className="h-5 w-5 text-cyan-600 mr-3" />
								<div>
									<p className="text-sm font-medium text-gray-900">
										Estado del sistema
									</p>
									<p className="text-xs text-gray-500">
										Todos los sistemas operativos
									</p>
								</div>
							</div>
						)}

						<nav className="space-y-1">{renderNavItems()}</nav>
					</div>
				</div>

				<div className="p-4 border-t border-gray-200">
					<Link
						to="/help"
						className="flex items-center px-2 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-100"
					>
						<span className="mr-3">?</span>
						<span>Ayuda y soporte</span>
					</Link>
				</div>
			</div>
		</>
	);
};

interface NavItemProps {
	to: string;
	icon: React.ReactNode;
	label: string;
	active: boolean;
}

const NavItem = ({ to, icon, label, active }: NavItemProps) => {
	return (
		<Link
			to={to}
			className={`flex items-center px-2 py-2 text-sm font-medium rounded-md transition-colors ${
				active
					? "bg-cyan-50 text-cyan-700"
					: "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
			}`}
		>
			<span className={`mr-3 ${active ? "text-cyan-700" : "text-gray-500"}`}>{icon}</span>
			<span>{label}</span>
		</Link>
	);
};

export default Sidebar;
