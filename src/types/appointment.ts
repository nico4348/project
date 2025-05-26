export type AppointmentStatus =
	| "PROGRAMADA"
	| "CONFIRMADA"
	| "EN_PROGRESO"
	| "COMPLETADA"
	| "CANCELADA"
	| "NO_ASISTIO";
export type AppointmentType =
	| "CONSULTA"
	| "SEGUIMIENTO"
	| "EMERGENCIA"
	| "ESPECIALISTA"
	| "CHEQUEO";
export type AppointmentPriority = "BAJA" | "NORMAL" | "ALTA" | "URGENTE";

export interface Appointment {
	id: string;
	patientId: string;
	patientName: string;
	doctorId: string;
	doctorName: string;
	specialty: string;
	date: string;
	status: AppointmentStatus;
	type: AppointmentType;
	notes: string;
	symptoms?: string;
	priority?: AppointmentPriority;
}
