export interface MedicalRecord {
	id: string;
	patientId: string;
	patientName: string;
	doctorId: string;
	doctorName: string;
	date: string;
	diagnosis: string;
	symptoms: string;
	treatment: string;
	medications: Medication[];
	allergies: string[];
	familyHistory: string;
	vitalSigns: VitalSigns;
	notes: string;
	attachments: MedicalAttachment[];
	followUpDate?: string;
	status: "draft" | "completed" | "requires_review";
}

export interface Medication {
	id: string;
	name: string;
	dosage: string;
	frequency: string;
	duration: string;
	instructions: string;
}

export interface VitalSigns {
	bloodPressure: string;
	heartRate: string;
	temperature: string;
	weight: string;
	height: string;
	respiratoryRate: string;
}

export interface MedicalAttachment {
	id: string;
	fileName: string;
	fileType: "pdf" | "image" | "document";
	fileSize: number;
	uploadDate: string;
	description: string;
	url: string;
}

export interface PatientSummary {
	id: string;
	name: string;
	email: string;
	phone?: string;
	dateOfBirth?: string;
	gender?: string;
	bloodType?: string;
	emergencyContact?: string;
	totalRecords: number;
	lastVisit?: string;
}
