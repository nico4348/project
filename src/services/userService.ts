import { UserData, UserRole } from "../types/user";

const API_BASE_URL = "http://localhost:5000/api";

export interface ApiUser {
	id: string; // Changed to string for UUID
	nombre: string;
	email: string;
	rol: string;
	telefono?: string;
	fechaNacimiento?: string;
	fechaCreacion?: string;
	medicos?: {
		id: string;
		especialidad?: {
			id: string;
			nombre: string;
		};
	}[];
}

export const getAllUsers = async (): Promise<UserData[]> => {
	try {
		const response = await fetch(`${API_BASE_URL}/users`);
		if (!response.ok) {
			throw new Error("Failed to fetch users");
		}

		const users: ApiUser[] = await response.json();
		return users.map((user) => ({
			id: user.id,
			name: user.nombre,
			email: user.email,
			role: user.rol as UserRole,
			phone: user.telefono,
			birthDate: user.fechaNacimiento,
			createdAt: user.fechaCreacion,
			specialty: user.medicos?.[0]?.especialidad?.nombre,
		}));
	} catch (error) {
		console.error("Error fetching users:", error);
		return [];
	}
};

export const getUserById = async (userId: string): Promise<UserData | null> => {
	try {
		const response = await fetch(`${API_BASE_URL}/users/${userId}`);
		if (!response.ok) {
			if (response.status === 404) {
				return null;
			}
			throw new Error("Failed to fetch user");
		}

		const user: ApiUser = await response.json();
		return {
			id: user.id,
			name: user.nombre,
			email: user.email,
			role: user.rol as UserRole,
			phone: user.telefono,
			birthDate: user.fechaNacimiento,
			createdAt: user.fechaCreacion,
			specialty: user.medicos?.[0]?.especialidad?.nombre,
		};
	} catch (error) {
		console.error("Error fetching user:", error);
		return null;
	}
};

export const createUser = async (
	userData: Omit<UserData, "id"> & { password?: string; especialidadId?: string }
): Promise<UserData> => {
	try {
		const response = await fetch(`${API_BASE_URL}/users`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				nombre: userData.name,
				email: userData.email,
				contraseña: userData.password || "defaultPassword123",
				rol: userData.role,
				telefono: userData.phone,
				fechaNacimiento: userData.birthDate || userData.dateOfBirth,
				especialidadId: userData.especialidadId,
			}),
		});

		if (!response.ok) {
			const errorData = await response.json();
			throw new Error(errorData.error || "Failed to create user");
		}

		const user: ApiUser = await response.json();
		return {
			id: user.id,
			name: user.nombre,
			email: user.email,
			role: user.rol as UserRole,
			phone: user.telefono,
			birthDate: user.fechaNacimiento,
			specialty: user.medicos?.[0]?.especialidad?.nombre,
		};
	} catch (error) {
		console.error("Error creating user:", error);
		throw error;
	}
};

export const updateUser = async (userData: UserData & { password?: string }): Promise<UserData> => {
	try {
		const updateData: {
			nombre: string;
			email: string;
			rol: string;
			telefono?: string;
			fechaNacimiento?: string;
			contraseña?: string;
		} = {
			nombre: userData.name,
			email: userData.email,
			rol: userData.role,
			telefono: userData.phone,
			fechaNacimiento: userData.birthDate || userData.dateOfBirth,
		};

		if (userData.password) {
			updateData.contraseña = userData.password;
		}

		const response = await fetch(`${API_BASE_URL}/users/${userData.id}`, {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(updateData),
		});

		if (!response.ok) {
			const errorData = await response.json();
			throw new Error(errorData.error || "Failed to update user");
		}

		const user: ApiUser = await response.json();
		return {
			id: user.id,
			name: user.nombre,
			email: user.email,
			role: user.rol as UserRole,
			phone: user.telefono,
			birthDate: user.fechaNacimiento,
			specialty: user.medicos?.[0]?.especialidad?.nombre,
		};
	} catch (error) {
		console.error("Error updating user:", error);
		throw error;
	}
};

export const deleteUser = async (userId: string): Promise<boolean> => {
	try {
		const response = await fetch(`${API_BASE_URL}/users/${userId}`, {
			method: "DELETE",
		});

		if (!response.ok) {
			throw new Error("Failed to delete user");
		}

		return true;
	} catch (error) {
		console.error("Error deleting user:", error);
		return false;
	}
};

// Keep the legacy getMockUsers function for backward compatibility during migration
export const getMockUsers = getAllUsers;

// Search functions
export const searchPatients = async (query: string): Promise<UserData[]> => {
	try {
		const response = await fetch(
			`${API_BASE_URL}/search/patients?q=${encodeURIComponent(query)}`
		);
		if (!response.ok) {
			throw new Error("Failed to search patients");
		}

		const patients: ApiUser[] = await response.json();
		return patients.map((patient) => ({
			id: patient.id,
			name: patient.nombre,
			email: patient.email,
			role: "patient" as UserRole,
			phone: patient.telefono,
			birthDate: patient.fechaNacimiento,
			createdAt: patient.fechaCreacion,
		}));
	} catch (error) {
		console.error("Error searching patients:", error);
		return [];
	}
};

export const searchDoctors = async (
	query: string,
	especialidadId?: string
): Promise<UserData[]> => {
	try {
		let url = `${API_BASE_URL}/search/doctors?q=${encodeURIComponent(query)}`;
		if (especialidadId) {
			url += `&especialidadId=${especialidadId}`;
		}

		const response = await fetch(url);
		if (!response.ok) {
			throw new Error("Failed to search doctors");
		}

		const doctors: any[] = await response.json();
		return doctors.map((doctor) => ({
			id: doctor.usuario.id,
			name: doctor.usuario.nombre,
			email: doctor.usuario.email,
			role: "doctor" as UserRole,
			phone: doctor.usuario.telefono,
			specialty: doctor.especialidad?.nombre,
		}));
	} catch (error) {
		console.error("Error searching doctors:", error);
		return [];
	}
};

// Dashboard stats
export const getDashboardStats = async () => {
	try {
		const response = await fetch(`${API_BASE_URL}/stats/dashboard`);
		if (!response.ok) {
			throw new Error("Failed to fetch dashboard stats");
		}

		return await response.json();
	} catch (error) {
		console.error("Error fetching dashboard stats:", error);
		return {
			total_usuarios: 0,
			total_citas: 0,
			total_medicos: 0,
			total_pacientes: 0,
			citas_por_estado: [],
			citas_por_prioridad: [],
			citas_recientes: 0,
		};
	}
};

// Audit logs
export const getAuditLogs = async (filters?: {
	usuarioId?: string;
	accion?: string;
	entidadTipo?: string;
	fecha?: string;
}) => {
	try {
		const params = new URLSearchParams();
		if (filters?.usuarioId) params.append("usuarioId", filters.usuarioId);
		if (filters?.accion) params.append("accion", filters.accion);
		if (filters?.entidadTipo) params.append("entidadTipo", filters.entidadTipo);
		if (filters?.fecha) params.append("fecha", filters.fecha);

		const response = await fetch(`${API_BASE_URL}/audit-logs?${params}`);
		if (!response.ok) {
			throw new Error("Failed to fetch audit logs");
		}

		return await response.json();
	} catch (error) {
		console.error("Error fetching audit logs:", error);
		return [];
	}
};
