export type AppointmentStatus = 'scheduled' | 'confirmed' | 'cancelled' | 'completed';
export type AppointmentType = 'in-person' | 'virtual';

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
}