import { UserData, UserRole, RegisterUserData } from '../types/user';

const API_BASE_URL = 'http://localhost:5000/api';

// Storage key for logged in user
const USER_STORAGE_KEY = 'saludplus_user';

export const loginUser = async (email: string, password: string): Promise<UserData | null> => {
  try {
    const response = await fetch(`${API_BASE_URL}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, contraseña: password }),
    });
    
    if (response.ok) {
      const user = await response.json();
      const userData: UserData = {
        id: user.id.toString(),
        name: user.nombre,
        email: user.email,
        role: user.rol as UserRole,
      };
      
      // Store user in localStorage for persistence
      localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(userData));
      return userData;
    } else {
      return null;
    }
  } catch (error) {
    console.error('Login error:', error);
    return null;
  }
};

export const registerUser = async (userData: RegisterUserData): Promise<UserData | null> => {
  try {
    const response = await fetch(`${API_BASE_URL}/auth/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        nombre: userData.name,
        email: userData.email,
        contraseña: userData.password,
        rol: userData.role,
        fechaNacimiento: userData.dateOfBirth,
        telefono: userData.phone,
      }),
    });
    
    if (response.ok) {
      const user = await response.json();
      const newUserData: UserData = {
        id: user.id.toString(),
        name: user.nombre,
        email: user.email,
        role: user.rol as UserRole,
        dateOfBirth: userData.dateOfBirth,
        phone: userData.phone,
      };
      
      // Store user in localStorage for persistence
      localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(newUserData));
      return newUserData;
    } else {
      const error = await response.json();
      console.error('Registration error:', error);
      return null;
    }
  } catch (error) {
    console.error('Registration error:', error);
    return null;
  }
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