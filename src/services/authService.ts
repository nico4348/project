import { UserData, UserRole } from '../types/user';

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
    email: 'doctor@example.com',
    role: 'doctor',
  },
  {
    id: 'patient1',
    name: 'Jane Doe',
    email: 'patient@example.com',
    role: 'patient',
  },
];

// Storage key for logged in user
const USER_STORAGE_KEY = 'saludplus_user';

export const loginUser = async (email: string, password: string): Promise<UserData | null> => {
  // In a real app, this would make an API call to authenticate the user
  return new Promise((resolve) => {
    // Simulate API call delay
    setTimeout(() => {
      const user = mockUsers.find((u) => u.email.toLowerCase() === email.toLowerCase());
      
      if (user) {
        // Store user in localStorage for persistence
        localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(user));
        resolve(user);
      } else {
        resolve(null);
      }
    }, 800);
  });
};

export const registerUser = async (userData: Omit<UserData, 'id'>): Promise<UserData | null> => {
  // In a real app, this would make an API call to register the user
  return new Promise((resolve) => {
    // Simulate API call delay
    setTimeout(() => {
      const newUser: UserData = {
        ...userData,
        id: `user${Date.now()}`,
      };
      
      // Store user in localStorage for persistence
      localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(newUser));
      resolve(newUser);
    }, 800);
  });
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