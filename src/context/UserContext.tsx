import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { UserData, UserRole } from "../types/user";
import { loginUser, registerUser, logoutUser, getCurrentUser } from "../services/authService";

interface UserContextType {
	user: UserData | null;
	loading: boolean;
	login: (email: string, password: string) => Promise<boolean>;
	register: (userData: Omit<UserData, "id">) => Promise<boolean>;
	logout: () => void;
	isAuthenticated: boolean;
	hasRole: (roles: UserRole[]) => boolean;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
	const [user, setUser] = useState<UserData | null>(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const initAuth = async () => {
			try {
				const currentUser = getCurrentUser();
				if (currentUser) {
					setUser(currentUser);
				}
			} catch (error) {
				console.error("Authentication error:", error);
			} finally {
				setLoading(false);
			}
		};

		initAuth();
	}, []);

	const login = async (email: string, password: string): Promise<boolean> => {
		try {
			setLoading(true);
			const userData = await loginUser(email, password);
			if (userData) {
				setUser(userData);
				return true;
			}
			return false;
		} catch (error) {
			console.error("Login error:", error);
			return false;
		} finally {
			setLoading(false);
		}
	};

	const register = async (userData: Omit<UserData, "id">): Promise<boolean> => {
		try {
			setLoading(true);
			const newUser = await registerUser(userData);
			if (newUser) {
				setUser(newUser);
				return true;
			}
			return false;
		} catch (error) {
			console.error("Registration error:", error);
			return false;
		} finally {
			setLoading(false);
		}
	};

	const logout = () => {
		logoutUser();
		setUser(null);
	};

	const hasRole = (roles: UserRole[]): boolean => {
		if (!user) return false;
		return roles.includes(user.role);
	};

	return (
		<UserContext.Provider
			value={{
				user,
				loading,
				login,
				register,
				logout,
				isAuthenticated: !!user,
				hasRole,
			}}
		>
			{children}
		</UserContext.Provider>
	);
};

export const useUser = (): UserContextType => {
	const context = useContext(UserContext);
	if (context === undefined) {
		throw new Error("useUser must be used within a UserProvider");
	}
	return context;
};
