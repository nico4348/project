import { UserData, Doctor, Patient } from '../types/user';

// Mock user data for demo purposes
const mockUsers: UserData[] = [
  {
    id: 'admin1',
    name: 'Admin User',
    email: 'admin@example.com',
    role: 'admin',
  },
  {
    id: 'doctor1',
    name: 'John Smith',
    email: 'doctor1@example.com',
    role: 'doctor',
  },
  {
    id: 'doctor2',
    name: 'Sarah Williams',
    email: 'doctor2@example.com',
    role: 'doctor',
  },
  {
    id: 'doctor3',
    name: 'Emily Davis',
    email: 'doctor3@example.com',
    role: 'doctor',
  },
  {
    id: 'doctor4',
    name: 'David Wilson',
    email: 'doctor4@example.com',
    role: 'doctor',
  },
  {
    id: 'patient1',
    name: 'Jane Doe',
    email: 'patient1@example.com',
    role: 'patient',
  },
  {
    id: 'patient2',
    name: 'Robert Johnson',
    email: 'patient2@example.com',
    role: 'patient',
  },
  {
    id: 'patient3',
    name: 'Michael Brown',
    email: 'patient3@example.com',
    role: 'patient',
  },
  {
    id: 'patient4',
    name: 'Lisa Garcia',
    email: 'patient4@example.com',
    role: 'patient',
  },
];

// Mock doctor data with specialties and other doctor-specific fields
const mockDoctors: Doctor[] = [
  {
    id: 'doctor1',
    name: 'John Smith',
    email: 'doctor1@example.com',
    role: 'doctor',
    specialty: 'Cardiology',
    education: 'MD, Harvard Medical School',
    experience: 15,
  },
  {
    id: 'doctor2',
    name: 'Sarah Williams',
    email: 'doctor2@example.com',
    role: 'doctor',
    specialty: 'Dermatology',
    education: 'MD, Johns Hopkins University',
    experience: 10,
  },
  {
    id: 'doctor3',
    name: 'Emily Davis',
    email: 'doctor3@example.com',
    role: 'doctor',
    specialty: 'Pediatrics',
    education: 'MD, Stanford University',
    experience: 8,
  },
  {
    id: 'doctor4',
    name: 'David Wilson',
    email: 'doctor4@example.com',
    role: 'doctor',
    specialty: 'Neurology',
    education: 'MD, Yale University',
    experience: 12,
  },
  {
    id: 'doctor5',
    name: 'Maria Rodriguez',
    email: 'doctor5@example.com',
    role: 'doctor',
    specialty: 'Family Medicine',
    education: 'MD, University of California',
    experience: 7,
  },
  {
    id: 'doctor6',
    name: 'James Johnson',
    email: 'doctor6@example.com',
    role: 'doctor',
    specialty: 'Psychiatry',
    education: 'MD, Columbia University',
    experience: 9,
  },
];

// Mock patient data with patient-specific fields
const mockPatients: Patient[] = [
  {
    id: 'patient1',
    name: 'Jane Doe',
    email: 'patient1@example.com',
    role: 'patient',
    dateOfBirth: '1985-04-15',
    phone: '555-123-4567',
  },
  {
    id: 'patient2',
    name: 'Robert Johnson',
    email: 'patient2@example.com',
    role: 'patient',
    dateOfBirth: '1978-09-22',
    phone: '555-234-5678',
  },
  {
    id: 'patient3',
    name: 'Michael Brown',
    email: 'patient3@example.com',
    role: 'patient',
    dateOfBirth: '1990-07-30',
    phone: '555-345-6789',
  },
  {
    id: 'patient4',
    name: 'Lisa Garcia',
    email: 'patient4@example.com',
    role: 'patient',
    dateOfBirth: '1982-12-05',
    phone: '555-456-7890',
  },
];

export const getMockUsers = async (): Promise<UserData[]> => {
  // In a real app, this would make an API call to fetch users
  return new Promise((resolve) => {
    // Simulate API call delay
    setTimeout(() => {
      resolve(mockUsers);
    }, 800);
  });
};

export const getMockDoctors = async (): Promise<Doctor[]> => {
  // In a real app, this would make an API call to fetch doctors
  return new Promise((resolve) => {
    // Simulate API call delay
    setTimeout(() => {
      resolve(mockDoctors);
    }, 800);
  });
};

export const getMockPatients = async (): Promise<Patient[]> => {
  // In a real app, this would make an API call to fetch patients
  return new Promise((resolve) => {
    // Simulate API call delay
    setTimeout(() => {
      resolve(mockPatients);
    }, 800);
  });
};

export const getUserById = async (userId: string): Promise<UserData | null> => {
  // In a real app, this would make an API call to fetch a specific user
  return new Promise((resolve) => {
    // Simulate API call delay
    setTimeout(() => {
      const user = mockUsers.find((u) => u.id === userId);
      resolve(user || null);
    }, 800);
  });
};

export const createUser = async (userData: Omit<UserData, 'id'>): Promise<UserData> => {
  // In a real app, this would make an API call to create a user
  return new Promise((resolve) => {
    // Simulate API call delay
    setTimeout(() => {
      const newUser: UserData = {
        ...userData,
        id: `user${Date.now()}`,
      };
      resolve(newUser);
    }, 800);
  });
};

export const updateUser = async (userData: UserData): Promise<UserData> => {
  // In a real app, this would make an API call to update a user
  return new Promise((resolve) => {
    // Simulate API call delay
    setTimeout(() => {
      resolve(userData);
    }, 800);
  });
};

export const deleteUser = async (userId: string): Promise<boolean> => {
  // In a real app, this would make an API call to delete a user
  return new Promise((resolve) => {
    // Simulate API call delay
    setTimeout(() => {
      resolve(true);
    }, 800);
  });
};