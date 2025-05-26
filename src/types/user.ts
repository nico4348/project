export type UserRole = "patient" | "doctor" | "admin";

export interface UserData {
	id: string;
	name: string;
	email: string;
	role: UserRole;
	dateOfBirth?: string;
	birthDate?: string; // Alternative field name for compatibility
	phone?: string;
	createdAt?: string;
	specialty?: string; // For doctors
}

export interface RegisterUserData extends Omit<UserData, "id"> {
	password: string;
	especialidadId?: string; // Changed to string for UUID
}

export interface Doctor extends UserData {
	role: "doctor";
	specialty: string;
	education?: string;
	experience?: number;
	availability?: string[];
}

export interface Patient extends UserData {
	role: "patient";
	medicalHistory?: string;
	insuranceInfo?: string;
}

export interface Admin extends UserData {
	role: "admin";
	department?: string;
}
