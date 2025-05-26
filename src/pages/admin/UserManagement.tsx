import { useState, useEffect, useCallback } from "react";
import { Trash2, Edit, Search, Filter, Plus, Download, ChevronDown, X } from "lucide-react";
import { UserData, UserRole, RegisterUserData } from "../../types/user";
import { getAllUsers, createUser, updateUser, deleteUser } from "../../services/userService";

const UserManagement = () => {
	const [users, setUsers] = useState<UserData[]>([]);
	const [filteredUsers, setFilteredUsers] = useState<UserData[]>([]);
	const [isLoading, setIsLoading] = useState(true);
	const [searchQuery, setSearchQuery] = useState("");
	const [roleFilter, setRoleFilter] = useState<UserRole | "all">("all");
	const [isAddUserModalOpen, setIsAddUserModalOpen] = useState(false);
	const [selectedUser, setSelectedUser] = useState<UserData | null>(null);
	const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

	// Use useCallback to memoize the function
	const filterUsers = useCallback(() => {
		let result = [...users];

		// Filtrar por búsqueda
		if (searchQuery) {
			const query = searchQuery.toLowerCase();
			result = result.filter(
				(user) =>
					user.name.toLowerCase().includes(query) ||
					user.email.toLowerCase().includes(query)
			);
		}

		// Filtrar por rol
		if (roleFilter !== "all") {
			result = result.filter((user) => user.role === roleFilter);
		}

		setFilteredUsers(result);
	}, [users, searchQuery, roleFilter]);

	useEffect(() => {
		const fetchUsers = async () => {
			try {
				const data = await getAllUsers();
				setUsers(data);
				setFilteredUsers(data);
			} catch (error) {
				console.error("Error al obtener usuarios:", error);
			} finally {
				setIsLoading(false);
			}
		};

		fetchUsers();
	}, []);

	useEffect(() => {
		filterUsers();
	}, [filterUsers]);

	const handleAddUser = () => {
		setSelectedUser(null);
		setIsAddUserModalOpen(true);
	};

	const handleEditUser = (user: UserData) => {
		setSelectedUser(user);
		setIsAddUserModalOpen(true);
	};

	const handleDeleteClick = (user: UserData) => {
		setSelectedUser(user);
		setIsDeleteModalOpen(true);
	};

	const handleDeleteUser = async () => {
		if (selectedUser) {
			try {
				const success = await deleteUser(selectedUser.id);
				if (success) {
					const updatedUsers = users.filter((user) => user.id !== selectedUser.id);
					setUsers(updatedUsers);
					setIsDeleteModalOpen(false);
					setSelectedUser(null);
				} else {
					console.error("Error al eliminar usuario");
				}
			} catch (error) {
				console.error("Error al eliminar usuario:", error);
			}
		}
	};

	const handleSubmitUser = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const formData = new FormData(event.currentTarget);

		try {
			if (selectedUser) {
				// Update existing user
				const userData = {
					id: selectedUser.id,
					name: formData.get("name") as string,
					email: formData.get("email") as string,
					role: formData.get("role") as UserRole,
				};
				const updatedUser = await updateUser(userData);
				const updatedUsers = users.map((user) =>
					user.id === selectedUser.id ? updatedUser : user
				);
				setUsers(updatedUsers);
			} else {
				// Create new user
				const newUserData: RegisterUserData = {
					name: formData.get("name") as string,
					email: formData.get("email") as string,
					role: formData.get("role") as UserRole,
					password: formData.get("password") as string,
				};
				const newUser = await createUser(newUserData);
				setUsers([...users, newUser]);
			}

			setIsAddUserModalOpen(false);
			setSelectedUser(null);
		} catch (error) {
			console.error("Error al guardar usuario:", error);
		}
	};

	const getRoleBadgeColor = (role: UserRole) => {
		switch (role) {
			case "admin":
				return "bg-purple-100 text-purple-800";
			case "doctor":
				return "bg-cyan-100 text-cyan-800";
			case "patient":
				return "bg-green-100 text-green-800";
			default:
				return "bg-gray-100 text-gray-800";
		}
	};

	const getRoleLabel = (role: UserRole) => {
		switch (role) {
			case "admin":
				return "Administrador";
			case "doctor":
				return "Médico";
			case "patient":
				return "Paciente";
			default:
				return role;
		}
	};

	return (
		<div>
			<div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between">
				<div>
					<h1 className="text-2xl font-bold text-gray-900">Gestión de Usuarios</h1>
					<p className="text-gray-600">
						Administra todos los usuarios del sistema y sus accesos
					</p>
				</div>

				<div className="mt-4 sm:mt-0 flex space-x-3">
					<button
						onClick={() => {
							/* Exportar funcionalidad */
						}}
						className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
					>
						<Download className="mr-2 h-4 w-4" />
						Exportar
					</button>

					<button
						onClick={handleAddUser}
						className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-cyan-600 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
					>
						<Plus className="mr-2 h-4 w-4" />
						Agregar Usuario
					</button>
				</div>
			</div>

			{/* Filtros */}
			<div className="bg-white rounded-lg shadow-sm border border-gray-200 mb-6">
				<div className="p-4 sm:p-6 flex flex-col sm:flex-row sm:items-center space-y-3 sm:space-y-0 sm:space-x-4">
					<div className="relative flex-1">
						<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
							<Search className="h-5 w-5 text-gray-400" />
						</div>
						<input
							type="text"
							placeholder="Buscar usuarios..."
							value={searchQuery}
							onChange={(e) => setSearchQuery(e.target.value)}
							className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm"
						/>
					</div>

					<div className="w-full sm:w-64">
						<div className="relative">
							<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
								<Filter className="h-5 w-5 text-gray-400" />
							</div>
							<select
								value={roleFilter}
								onChange={(e) => setRoleFilter(e.target.value as UserRole | "all")}
								className="block w-full pl-10 pr-10 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm"
							>
								<option value="all">Todos los roles</option>
								<option value="admin">Administrador</option>
								<option value="doctor">Médico</option>
								<option value="patient">Paciente</option>
							</select>
							<div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
								<ChevronDown className="h-4 w-4 text-gray-400" />
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Tabla de usuarios */}
			<div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
				<div className="overflow-x-auto">
					<table className="min-w-full divide-y divide-gray-200">
						<thead className="bg-gray-50">
							<tr>
								<th
									scope="col"
									className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
								>
									Usuario
								</th>
								<th
									scope="col"
									className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
								>
									Rol
								</th>
								<th
									scope="col"
									className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
								>
									Estado
								</th>
								<th
									scope="col"
									className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
								>
									Último acceso
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
							{isLoading ? (
								[...Array(5)].map((_, index) => (
									<tr key={index}>
										<td className="px-6 py-4 whitespace-nowrap">
											<div className="flex items-center">
												<div className="h-10 w-10 rounded-full bg-gray-200 animate-pulse"></div>
												<div className="ml-4">
													<div className="h-4 bg-gray-200 rounded w-24 animate-pulse"></div>
													<div className="h-3 bg-gray-200 rounded w-32 mt-1 animate-pulse"></div>
												</div>
											</div>
										</td>
										<td className="px-6 py-4 whitespace-nowrap">
											<div className="h-6 bg-gray-200 rounded w-16 animate-pulse"></div>
										</td>
										<td className="px-6 py-4 whitespace-nowrap">
											<div className="h-6 bg-gray-200 rounded w-16 animate-pulse"></div>
										</td>
										<td className="px-6 py-4 whitespace-nowrap">
											<div className="h-4 bg-gray-200 rounded w-24 animate-pulse"></div>
										</td>
										<td className="px-6 py-4 whitespace-nowrap text-right">
											<div className="h-8 bg-gray-200 rounded w-16 ml-auto animate-pulse"></div>
										</td>
									</tr>
								))
							) : filteredUsers.length > 0 ? (
								filteredUsers.map((user) => (
									<tr key={user.id} className="hover:bg-gray-50">
										<td className="px-6 py-4 whitespace-nowrap">
											<div className="flex items-center">
												<div className="h-10 w-10 rounded-full bg-cyan-100 flex items-center justify-center">
													<span className="text-cyan-800 font-medium">
														{user.name.charAt(0).toUpperCase()}
													</span>
												</div>
												<div className="ml-4">
													<div className="text-sm font-medium text-gray-900">
														{user.name}
													</div>
													<div className="text-sm text-gray-500">
														{user.email}
													</div>
												</div>
											</div>
										</td>
										<td className="px-6 py-4 whitespace-nowrap">
											<span
												className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getRoleBadgeColor(
													user.role
												)}`}
											>
												{getRoleLabel(user.role)}
											</span>
										</td>
										<td className="px-6 py-4 whitespace-nowrap">
											<span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
												Activo
											</span>
										</td>
										<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
											{new Date().toLocaleDateString("es-ES")}
										</td>
										<td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
											<button
												onClick={() => handleEditUser(user)}
												className="text-cyan-600 hover:text-cyan-900 mr-3"
												title="Editar"
											>
												<Edit className="h-5 w-5" />
											</button>
											<button
												onClick={() => handleDeleteClick(user)}
												className="text-red-600 hover:text-red-900"
												title="Eliminar"
											>
												<Trash2 className="h-5 w-5" />
											</button>
										</td>
									</tr>
								))
							) : (
								<tr>
									<td colSpan={5} className="px-6 py-4 text-center text-gray-500">
										No se encontraron usuarios que coincidan con tus criterios
									</td>
								</tr>
							)}
						</tbody>
					</table>
				</div>

				{!isLoading && filteredUsers.length > 0 && (
					<div className="px-6 py-3 border-t border-gray-200 flex items-center justify-between">
						<div className="text-sm text-gray-500">
							Mostrando <span className="font-medium">{filteredUsers.length}</span> de{" "}
							<span className="font-medium">{users.length}</span> usuarios
						</div>
						<div className="flex space-x-2">
							<button className="px-2 py-1 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
								Anterior
							</button>
							<button className="px-2 py-1 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
								Siguiente
							</button>
						</div>
					</div>
				)}
			</div>

			{/* Modal Agregar/Editar Usuario */}
			{isAddUserModalOpen && (
				<div className="fixed inset-0 z-50 overflow-y-auto">
					<div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
						<div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

						<span className="hidden sm:inline-block sm:align-middle sm:h-screen">
							&#8203;
						</span>

						<div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
							<div className="absolute top-0 right-0 pt-4 pr-4">
								<button
									type="button"
									onClick={() => setIsAddUserModalOpen(false)}
									className="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
								>
									<span className="sr-only">Cerrar</span>
									<X className="h-6 w-6" />
								</button>
							</div>

							<div>
								<div className="mt-3 text-center sm:mt-0 sm:text-left">
									<h3 className="text-lg leading-6 font-medium text-gray-900">
										{selectedUser ? "Editar usuario" : "Agregar nuevo usuario"}
									</h3>
									<div className="mt-2">
										<p className="text-sm text-gray-500">
											{selectedUser
												? "Actualiza los datos del usuario a continuación"
												: "Completa la información para crear un nuevo usuario"}
										</p>
									</div>
								</div>
							</div>

							<div className="mt-5">
								<form className="space-y-4" onSubmit={handleSubmitUser}>
									<div>
										<label
											htmlFor="name"
											className="block text-sm font-medium text-gray-700"
										>
											Nombre completo
										</label>
										<input
											type="text"
											name="name"
											id="name"
											required
											defaultValue={selectedUser?.name || ""}
											className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm"
										/>
									</div>

									<div>
										<label
											htmlFor="email"
											className="block text-sm font-medium text-gray-700"
										>
											Correo electrónico
										</label>
										<input
											type="email"
											name="email"
											id="email"
											required
											defaultValue={selectedUser?.email || ""}
											className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm"
										/>
									</div>

									<div>
										<label
											htmlFor="role"
											className="block text-sm font-medium text-gray-700"
										>
											Rol
										</label>
										<select
											id="role"
											name="role"
											defaultValue={selectedUser?.role || "patient"}
											className="mt-1 block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm rounded-md"
										>
											<option value="patient">Paciente</option>
											<option value="doctor">Médico</option>
											<option value="admin">Administrador</option>
										</select>
									</div>

									{!selectedUser && (
										<div>
											<label
												htmlFor="password"
												className="block text-sm font-medium text-gray-700"
											>
												Contraseña
											</label>
											<input
												type="password"
												name="password"
												id="password"
												required
												className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm"
											/>
										</div>
									)}

									<div className="mt-5 sm:mt-6 sm:grid sm:grid-cols-2 sm:gap-3 sm:grid-flow-row-dense">
										<button
											type="submit"
											className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-cyan-600 text-base font-medium text-white hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 sm:col-start-2 sm:text-sm"
										>
											{selectedUser ? "Guardar cambios" : "Crear usuario"}
										</button>
										<button
											type="button"
											className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 sm:mt-0 sm:col-start-1 sm:text-sm"
											onClick={() => setIsAddUserModalOpen(false)}
										>
											Cancelar
										</button>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			)}

			{/* Modal Confirmación de Eliminación */}
			{isDeleteModalOpen && selectedUser && (
				<div className="fixed inset-0 z-50 overflow-y-auto">
					<div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
						<div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

						<span className="hidden sm:inline-block sm:align-middle sm:h-screen">
							&#8203;
						</span>

						<div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
							<div className="sm:flex sm:items-start">
								<div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
									<Trash2 className="h-6 w-6 text-red-600" />
								</div>
								<div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
									<h3 className="text-lg leading-6 font-medium text-gray-900">
										Eliminar usuario
									</h3>
									<div className="mt-2">
										<p className="text-sm text-gray-500">
											¿Estás seguro que deseas eliminar al usuario "
											{selectedUser.name}"? Esta acción no se puede deshacer.
										</p>
									</div>
								</div>
							</div>
							<div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
								<button
									type="button"
									className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
									onClick={handleDeleteUser}
								>
									Eliminar
								</button>
								<button
									type="button"
									className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 sm:mt-0 sm:w-auto sm:text-sm"
									onClick={() => setIsDeleteModalOpen(false)}
								>
									Cancelar
								</button>
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default UserManagement;
