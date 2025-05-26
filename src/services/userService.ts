import { UserData, UserRole } from "../types/user";

const API_BASE_URL = "http://localhost:5000/api";

export interface ApiUser {
	id: number;
	nombre: string;
	email: string;
	contraseña: string;
	rol: string;
}

export const getAllUsers = async (): Promise<UserData[]> => {
	try {
		const response = await fetch(`${API_BASE_URL}/users`);
		if (!response.ok) {
			throw new Error("Failed to fetch users");
		}

		const users: ApiUser[] = await response.json();
		return users.map((user) => ({
			id: user.id.toString(),
			name: user.nombre,
			email: user.email,
			role: user.rol as UserRole,
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
			id: user.id.toString(),
			name: user.nombre,
			email: user.email,
			role: user.rol as UserRole,
		};
	} catch (error) {
		console.error("Error fetching user:", error);
		return null;
	}
};

export const createUser = async (userData: Omit<UserData, "id">): Promise<UserData> => {
	try {
		const response = await fetch(`${API_BASE_URL}/users`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				nombre: userData.name,
				email: userData.email,
				contraseña: "defaultPassword123", // You might want to add a password field to UserData
				rol: userData.role,
			}),
		});

		if (!response.ok) {
			throw new Error("Failed to create user");
		}

		const user: ApiUser = await response.json();
		return {
			id: user.id.toString(),
			name: user.nombre,
			email: user.email,
			role: user.rol as UserRole,
		};
	} catch (error) {
		console.error("Error creating user:", error);
		throw error;
	}
};

export const updateUser = async (userData: UserData): Promise<UserData> => {
	try {
		const response = await fetch(`${API_BASE_URL}/users/${userData.id}`, {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				nombre: userData.name,
				email: userData.email,
				rol: userData.role,
			}),
		});

		if (!response.ok) {
			throw new Error("Failed to update user");
		}

		const user: ApiUser = await response.json();
		return {
			id: user.id.toString(),
			name: user.nombre,
			email: user.email,
			role: user.rol as UserRole,
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
