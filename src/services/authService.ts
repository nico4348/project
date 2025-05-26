import { UserData, UserRole, RegisterUserData } from "../types/user";

const API_BASE_URL = "http://localhost:5000/api";

// Storage key for logged in user
const USER_STORAGE_KEY = "saludplus_user";

export const loginUser = async (email: string, password: string): Promise<UserData | null> => {
	try {
		const response = await fetch(`${API_BASE_URL}/auth/login`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ email, contraseña: password }),
		});

		if (response.ok) {
			const user = await response.json();
			const userData: UserData = {
				id: user.id, // Already a UUID string
				name: user.nombre,
				email: user.email,
				role: user.rol as UserRole,
				phone: user.telefono,
				dateOfBirth: user.fechaNacimiento,
			};

			// Store user in localStorage for persistence
			localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(userData));
			return userData;
		} else {
			const errorData = await response.json();
			console.error("Login error:", errorData.error || "Invalid credentials");
			return null;
		}
	} catch (error) {
		console.error("Login error:", error);
		return null;
	}
};

export const registerUser = async (userData: RegisterUserData): Promise<UserData | null> => {
	try {
		// Prepare the request body, only including especialidadId if it has a value
		const requestBody: {
			nombre: string;
			email: string;
			contraseña: string;
			rol: string;
			fechaNacimiento?: string;
			telefono?: string;
			especialidadId?: string;
		} = {
			nombre: userData.name,
			email: userData.email,
			contraseña: userData.password,
			rol: userData.role,
			fechaNacimiento: userData.dateOfBirth,
			telefono: userData.phone,
		};

		// Only include especialidadId if it's provided and not empty
		if (userData.especialidadId && userData.especialidadId.trim() !== "") {
			requestBody.especialidadId = userData.especialidadId;
		}

		console.log("Registration request body:", requestBody);

		const response = await fetch(`${API_BASE_URL}/auth/register`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(requestBody),
		});

		if (response.ok) {
			const user = await response.json();
			const newUserData: UserData = {
				id: user.id, // Already a UUID string
				name: user.nombre,
				email: user.email,
				role: user.rol as UserRole,
				dateOfBirth: userData.dateOfBirth,
				phone: userData.phone,
			};

			// Store user in localStorage for persistence
			localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(newUserData));
			return newUserData;
		} else {
			const error = await response.json();
			console.error("Registration error:", error.error || "Registration failed");
			return null;
		}
	} catch (error) {
		console.error("Registration error:", error);
		return null;
	}
};

export const logoutUser = (): void => {
	localStorage.removeItem(USER_STORAGE_KEY);
};

export const getCurrentUser = (): UserData | null => {
	const userJson = localStorage.getItem(USER_STORAGE_KEY);
	return userJson ? JSON.parse(userJson) : null;
};

export const isAuthenticated = (): boolean => {
	return !!getCurrentUser();
};

export const hasRole = (requiredRole: UserRole): boolean => {
	const user = getCurrentUser();
	return user ? user.role === requiredRole : false;
};
