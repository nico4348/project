import { MedicalRecord, PatientSummary } from "../types/medicalRecord";

const API_BASE_URL = "http://localhost:5000/api";

// Backend medical record structure (matching HistoriaClinica schema with UUIDs)
interface BackendMedicalRecord {
	id: string;
	pacienteId: string;
	medicoId: string;
	fecha: string;
	descripcion?: string;
	diagnostico: string;
	sintomas?: string;
	tratamiento?: string;
	medicamentos?: string; // JSON string
	alergias?: string; // JSON string
	signosVitales?: string; // JSON string
	paciente?: {
		id: string;
		nombre: string;
		email: string;
	};
	medico?: {
		id: string;
		usuario: {
			nombre: string;
		};
		especialidad?: {
			nombre: string;
		};
	};
}

// Transform backend data to frontend format
const transformMedicalRecordData = (backendRecord: BackendMedicalRecord): MedicalRecord => {
	// Parse JSON fields
	let medicamentos: string[] = [];
	let alergias: string[] = [];
	let signosVitales: {
		bloodPressure: string;
		heartRate: string;
		temperature: string;
		weight: string;
		height: string;
		respiratoryRate: string;
	} = {
		bloodPressure: "",
		heartRate: "",
		temperature: "",
		weight: "",
		height: "",
		respiratoryRate: "",
	};

	try {
		if (backendRecord.medicamentos) {
			medicamentos = JSON.parse(backendRecord.medicamentos);
		}
	} catch (e) {
		console.warn("Error parsing medications:", e);
	}

	try {
		if (backendRecord.alergias) {
			alergias = JSON.parse(backendRecord.alergias);
		}
	} catch (e) {
		console.warn("Error parsing allergies:", e);
	}

	try {
		if (backendRecord.signosVitales) {
			signosVitales = { ...signosVitales, ...JSON.parse(backendRecord.signosVitales) };
		}
	} catch (e) {
		console.warn("Error parsing vital signs:", e);
	}

	// Transform string array to Medication objects
	const medicationObjects = medicamentos.map((med, index) => ({
		id: `med-${index}`,
		name: med,
		dosage: "",
		frequency: "",
		duration: "",
		instructions: "",
	}));

	return {
		id: backendRecord.id,
		patientId: backendRecord.pacienteId,
		patientName: backendRecord.paciente?.nombre || "Unknown Patient",
		doctorId: backendRecord.medicoId,
		doctorName: backendRecord.medico?.usuario?.nombre || "Unknown Doctor",
		date: backendRecord.fecha,
		diagnosis: backendRecord.diagnostico || "",
		symptoms: backendRecord.sintomas || "",
		treatment: backendRecord.tratamiento || "",
		medications: medicationObjects,
		allergies: alergias,
		familyHistory: "", // Not in schema yet, can be added later
		vitalSigns: signosVitales,
		notes: backendRecord.descripcion || "",
		attachments: [],
		followUpDate: undefined,
		status: "completed",
	};
};

// Get medical records for a specific doctor
export const getMedicalRecordsByDoctor = async (doctorId: string): Promise<MedicalRecord[]> => {
	try {
		const response = await fetch(`${API_BASE_URL}/doctors/${doctorId}/medical-records`);
		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}
		const backendRecords = await response.json();
		return backendRecords.map(transformMedicalRecordData);
	} catch (error) {
		console.error("Error fetching medical records:", error);
		throw error;
	}
};

// Get medical records for a specific patient
export const getMedicalRecordsByPatient = async (patientId: string): Promise<MedicalRecord[]> => {
	try {
		const response = await fetch(`${API_BASE_URL}/patients/${patientId}/medical-history`);
		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}
		const backendRecords = await response.json();
		return backendRecords.map(transformMedicalRecordData);
	} catch (error) {
		console.error("Error fetching patient medical records:", error);
		throw error;
	}
};

// Create a new medical record
export const createMedicalRecord = async (
	patientId: string,
	doctorId: string,
	recordData: Omit<MedicalRecord, "id" | "patientId" | "doctorId" | "patientName" | "doctorName">
): Promise<MedicalRecord> => {
	try {
		const requestBody = {
			medicoId: doctorId,
			fecha: recordData.date,
			diagnostico: recordData.diagnosis,
			sintomas: recordData.symptoms,
			tratamiento: recordData.treatment,
			medicamentos: JSON.stringify(recordData.medications.map((med) => med.name)),
			alergias: JSON.stringify(recordData.allergies),
			signosVitales: JSON.stringify(recordData.vitalSigns),
			descripcion: recordData.notes,
		};

		const response = await fetch(`${API_BASE_URL}/patients/${patientId}/medical-records`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(requestBody),
		});

		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}

		const backendRecord = await response.json();
		return transformMedicalRecordData(backendRecord);
	} catch (error) {
		console.error("Error creating medical record:", error);
		throw error;
	}
};

// Get doctor's patients summary
export const getDoctorPatients = async (doctorId: string): Promise<PatientSummary[]> => {
	try {
		const response = await fetch(`${API_BASE_URL}/doctors/${doctorId}/patients`);
		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}
		const patients = await response.json();

		// Transform to PatientSummary format
		return patients.map(
			(patient: { id: string; nombre: string; email: string; telefono?: string }) => ({
				id: patient.id,
				name: patient.nombre,
				email: patient.email,
				phone: patient.telefono,
				totalRecords: 0, // Would need additional API call to get count
				lastVisit: undefined, // Would need additional data
			})
		);
	} catch (error) {
		console.error("Error fetching doctor patients:", error);
		throw error;
	}
};

// Search medical records
export const searchMedicalRecords = async (
	doctorId: string,
	searchParams: {
		patientName?: string;
		dateFrom?: string;
		dateTo?: string;
		diagnosis?: string;
	}
): Promise<MedicalRecord[]> => {
	try {
		// Get all records first, then filter (in a real app, this would be server-side)
		const allRecords = await getMedicalRecordsByDoctor(doctorId);

		return allRecords.filter((record) => {
			const matchesPatient =
				!searchParams.patientName ||
				record.patientName.toLowerCase().includes(searchParams.patientName.toLowerCase());

			const matchesDateFrom =
				!searchParams.dateFrom || new Date(record.date) >= new Date(searchParams.dateFrom);

			const matchesDateTo =
				!searchParams.dateTo || new Date(record.date) <= new Date(searchParams.dateTo);

			const matchesDiagnosis =
				!searchParams.diagnosis ||
				record.diagnosis.toLowerCase().includes(searchParams.diagnosis.toLowerCase());

			return matchesPatient && matchesDateFrom && matchesDateTo && matchesDiagnosis;
		});
	} catch (error) {
		console.error("Error searching medical records:", error);
		throw error;
	}
};
