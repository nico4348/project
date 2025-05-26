import { Appointment } from "../types/appointment";

const API_BASE_URL = "http://localhost:5000/api";

// Backend appointment data structure with UUIDs
interface BackendAppointment {
	id: string;
	fecha: string;
	hora: string;
	pacienteId?: string;
	medicoId?: string;
	paciente?: {
		id: string;
		nombre: string;
	};
	medico?: {
		id: string;
		usuario?: {
			nombre: string;
		};
		especialidad?: {
			nombre: string;
		};
	};
	notas?: string;
	sintomas?: string;
	tipo?: string;
	estado?: string;
	prioridad?: string;
}

// Transform backend appointment data to frontend format
const transformAppointmentData = (backendAppointment: BackendAppointment): Appointment => {
	return {
		id: backendAppointment.id,
		patientId: backendAppointment.pacienteId || backendAppointment.paciente?.id || "",
		patientName: backendAppointment.paciente?.nombre || "Unknown Patient",
		doctorId: backendAppointment.medicoId || backendAppointment.medico?.id || "",
		doctorName: backendAppointment.medico?.usuario?.nombre || "Unknown Doctor",
		specialty: backendAppointment.medico?.especialidad?.nombre || "General",
		date: new Date(backendAppointment.fecha).toISOString(),
		status: backendAppointment.estado || "PROGRAMADA",
		type: backendAppointment.tipo || "CONSULTA",
		notes: backendAppointment.notas || "",
		symptoms: backendAppointment.sintomas || "",
		priority: backendAppointment.prioridad || "NORMAL",
	};
};

// Transform frontend appointment data to backend format
const transformToBackendFormat = (appointment: Omit<Appointment, "id">) => {
	const date = new Date(appointment.date);
	return {
		fecha: date.toISOString().split("T")[0], // Date only
		hora: date.toISOString(), // Full datetime
		medico_id: appointment.doctorId, // Now a UUID string
		notes: appointment.notes,
		type: appointment.type,
		sintomas: appointment.symptoms,
		prioridad: appointment.priority || "NORMAL",
	};
};

export const getMockAppointments = async (): Promise<Appointment[]> => {
	try {
		const response = await fetch(`${API_BASE_URL}/appointments`);
		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}
		const backendAppointments = await response.json();
		return backendAppointments.map(transformAppointmentData);
	} catch (error) {
		console.error("Error fetching appointments:", error);
		throw error;
	}
};

export const getAllAppointments = async (): Promise<Appointment[]> => {
	return getMockAppointments();
};

export const createAppointment = async (
	appointment: Omit<Appointment, "id">
): Promise<Appointment> => {
	try {
		const backendData = transformToBackendFormat(appointment);
		console.log("=== CREATING APPOINTMENT ===");
		console.log("Original appointment data:", appointment);
		console.log("Transformed backend data:", backendData);
		console.log(
			"Request URL:",
			`${API_BASE_URL}/patients/${appointment.patientId}/appointments`
		);

		const response = await fetch(
			`${API_BASE_URL}/patients/${appointment.patientId}/appointments`,
			{
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(backendData),
			}
		);

		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}

		const backendAppointment = await response.json();
		return transformAppointmentData(backendAppointment);
	} catch (error) {
		console.error("Error creating appointment:", error);
		throw error;
	}
};

export const updateAppointment = async (appointment: Appointment): Promise<Appointment> => {
	try {
		const date = new Date(appointment.date);
		const updateData = {
			fecha: date.toISOString().split("T")[0],
			hora: date.toISOString(),
			estado: appointment.status,
			notas: appointment.notes,
			tipo: appointment.type,
			prioridad: appointment.priority,
		};

		const response = await fetch(`${API_BASE_URL}/appointments/${appointment.id}`, {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(updateData),
		});

		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}

		const backendAppointment = await response.json();
		return transformAppointmentData(backendAppointment);
	} catch (error) {
		console.error("Error updating appointment:", error);
		throw error;
	}
};

export const cancelAppointment = async (appointmentId: string): Promise<boolean> => {
	try {
		const response = await fetch(`${API_BASE_URL}/appointments/${appointmentId}`, {
			method: "DELETE",
		});

		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}

		return true;
	} catch (error) {
		console.error("Error canceling appointment:", error);
		throw error;
	}
};

export const getAppointmentsByPatient = async (patientId: string): Promise<Appointment[]> => {
	try {
		const response = await fetch(`${API_BASE_URL}/patients/${patientId}/appointments`);
		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}
		const backendAppointments = await response.json();
		return backendAppointments.map(transformAppointmentData);
	} catch (error) {
		console.error("Error fetching patient appointments:", error);
		throw error;
	}
};

export const getAppointmentsByDoctor = async (doctorId: string): Promise<Appointment[]> => {
	try {
		const response = await fetch(`${API_BASE_URL}/doctors/${doctorId}/appointments`);
		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}
		const backendAppointments = await response.json();
		return backendAppointments.map(transformAppointmentData);
	} catch (error) {
		console.error("Error fetching doctor appointments:", error);
		throw error;
	}
};
