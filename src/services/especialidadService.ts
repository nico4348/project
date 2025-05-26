const API_BASE_URL = "http://localhost:5000/api";

export interface Especialidad {
	id: number;
	nombre: string;
}

export const getEspecialidades = async (): Promise<Especialidad[]> => {
	try {
		const response = await fetch(`${API_BASE_URL}/especialidades`);
		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}
		const especialidades = await response.json();
		return especialidades;
	} catch (error) {
		console.error("Error fetching especialidades:", error);
		throw error;
	}
};
