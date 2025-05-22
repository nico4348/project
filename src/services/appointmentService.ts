import { Appointment } from "../types/appointment";

// Mock appointment data for demo purposes
const mockAppointments: Appointment[] = [
	{
		id: "apt1",
		patientId: "patient1",
		patientName: "Jane Doe",
		doctorId: "doctor1",
		doctorName: "John Smith",
		specialty: "Cardiology",
		date: "2025-05-25T09:00:00",
		status: "confirmed",
		type: "in-person",
		notes: "Follow-up appointment for heart condition",
	},
	{
		id: "apt2",
		patientId: "patient2",
		patientName: "Robert Johnson",
		doctorId: "doctor2",
		doctorName: "Sarah Williams",
		specialty: "Dermatology",
		date: "2025-05-26T10:30:00",
		status: "scheduled",
		type: "virtual",
		notes: "Initial consultation for skin rash",
	},
	{
		id: "apt3",
		patientId: "patient3",
		patientName: "Michael Brown",
		doctorId: "doctor3",
		doctorName: "Emily Davis",
		specialty: "Pediatrics",
		date: "2025-05-24T14:15:00",
		status: "completed",
		type: "in-person",
		notes: "Annual check-up",
	},
	{
		id: "apt4",
		patientId: "patient1",
		patientName: "Jane Doe",
		doctorId: "doctor4",
		doctorName: "David Wilson",
		specialty: "Neurology",
		date: "2025-05-28T11:00:00",
		status: "scheduled",
		type: "in-person",
		notes: "Consultation for recurring headaches",
	},
	{
		id: "apt5",
		patientId: "patient4",
		patientName: "Lisa Garcia",
		doctorId: "doctor1",
		doctorName: "John Smith",
		specialty: "Cardiology",
		date: "2025-05-25T13:30:00",
		status: "scheduled",
		type: "in-person",
		notes: "Initial consultation for chest pain",
	},
];

export const getMockAppointments = async (): Promise<Appointment[]> => {
	// In a real app, this would make an API call to fetch appointments
	return new Promise((resolve) => {
		// Simulate API call delay
		setTimeout(() => {
			resolve(mockAppointments);
		}, 800);
	});
};

export const createAppointment = async (
	appointment: Omit<Appointment, "id">
): Promise<Appointment> => {
	// In a real app, this would make an API call to create an appointment
	return new Promise((resolve) => {
		// Simulate API call delay
		setTimeout(() => {
			const newAppointment: Appointment = {
				...appointment,
				id: `apt${Date.now()}`,
			};
			resolve(newAppointment);
		}, 800);
	});
};

export const updateAppointment = async (appointment: Appointment): Promise<Appointment> => {
	// In a real app, this would make an API call to update an appointment
	return new Promise((resolve) => {
		// Simulate API call delay
		setTimeout(() => {
			resolve(appointment);
		}, 800);
	});
};

export const cancelAppointment = async (appointmentId: string): Promise<boolean> => {
	// In a real app, this would make an API call to cancel an appointment
	return new Promise((resolve) => {
		// Simulate API call delay
		setTimeout(() => {
			resolve(true);
		}, 800);
	});
};

export const getAppointmentsByPatient = async (patientId: string): Promise<Appointment[]> => {
	// In a real app, this would make an API call to fetch appointments for a specific patient
	return new Promise((resolve) => {
		// Simulate API call delay
		setTimeout(() => {
			const filteredAppointments = mockAppointments.filter(
				(appointment) => appointment.patientId === patientId
			);
			resolve(filteredAppointments);
		}, 800);
	});
};

export const getAppointmentsByDoctor = async (doctorId: string): Promise<Appointment[]> => {
	// In a real app, this would make an API call to fetch appointments for a specific doctor
	return new Promise((resolve) => {
		// Simulate API call delay
		setTimeout(() => {
			const filteredAppointments = mockAppointments.filter(
				(appointment) => appointment.doctorId === doctorId
			);
			resolve(filteredAppointments);
		}, 800);
	});
};
