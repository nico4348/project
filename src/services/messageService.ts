import {
	Message,
	Conversation,
	MessageThread,
	SendMessageRequest,
	CreateConversationRequest,
} from "../types/message";

// Base API URL - should match your backend
const API_BASE = "http://localhost:5000/api";

export const getConversationsByDoctor = async (doctorId: string): Promise<Conversation[]> => {
	try {
		const response = await fetch(`${API_BASE}/doctors/${doctorId}/conversations`);
		if (!response.ok) {
			throw new Error("Failed to fetch conversations");
		}
		return response.json();
	} catch (error) {
		console.error("Error fetching conversations:", error);
		// Return mock data for development
		return generateMockConversations(doctorId);
	}
};

export const getMessageThread = async (conversationId: string): Promise<MessageThread> => {
	try {
		const response = await fetch(`${API_BASE}/conversations/${conversationId}/messages`);
		if (!response.ok) {
			throw new Error("Failed to fetch message thread");
		}
		return response.json();
	} catch (error) {
		console.error("Error fetching message thread:", error);
		// Return mock data for development
		return generateMockMessageThread(conversationId);
	}
};

export const sendMessage = async (messageData: SendMessageRequest): Promise<Message> => {
	try {
		const formData = new FormData();
		formData.append("conversationId", messageData.conversationId);
		formData.append("content", messageData.content);

		if (messageData.attachments) {
			messageData.attachments.forEach((file, index) => {
				formData.append(`attachment_${index}`, file);
			});
		}

		const response = await fetch(`${API_BASE}/messages`, {
			method: "POST",
			body: formData,
		});

		if (!response.ok) {
			throw new Error("Failed to send message");
		}

		return response.json();
	} catch (error) {
		console.error("Error sending message:", error);
		throw error;
	}
};

export const createConversation = async (
	doctorId: string,
	conversationData: CreateConversationRequest
): Promise<Conversation> => {
	try {
		const response = await fetch(`${API_BASE}/conversations`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				doctorId,
				...conversationData,
			}),
		});

		if (!response.ok) {
			throw new Error("Failed to create conversation");
		}

		return response.json();
	} catch (error) {
		console.error("Error creating conversation:", error);
		throw error;
	}
};

export const markMessageAsRead = async (messageId: string): Promise<void> => {
	try {
		const response = await fetch(`${API_BASE}/messages/${messageId}/read`, {
			method: "PUT",
		});

		if (!response.ok) {
			throw new Error("Failed to mark message as read");
		}
	} catch (error) {
		console.error("Error marking message as read:", error);
	}
};

export const markConversationAsRead = async (conversationId: string): Promise<void> => {
	try {
		const response = await fetch(`${API_BASE}/conversations/${conversationId}/read`, {
			method: "PUT",
		});

		if (!response.ok) {
			throw new Error("Failed to mark conversation as read");
		}
	} catch (error) {
		console.error("Error marking conversation as read:", error);
	}
};

export const searchMessages = async (doctorId: string, query: string): Promise<Message[]> => {
	try {
		const response = await fetch(
			`${API_BASE}/doctors/${doctorId}/messages/search?q=${encodeURIComponent(query)}`
		);
		if (!response.ok) {
			throw new Error("Failed to search messages");
		}
		return response.json();
	} catch (error) {
		console.error("Error searching messages:", error);
		return [];
	}
};

// Patient-specific messaging functions
export const getConversationsByPatient = async (patientId: string): Promise<Conversation[]> => {
	try {
		const response = await fetch(`${API_BASE}/patients/${patientId}/conversations`);
		if (!response.ok) {
			throw new Error("Failed to fetch patient conversations");
		}
		return response.json();
	} catch (error) {
		console.error("Error fetching patient conversations:", error);
		// Return mock data for development
		return generateMockPatientConversations(patientId);
	}
};

export const markAsRead = async (conversationId: string): Promise<void> => {
	try {
		await markConversationAsRead(conversationId);
	} catch (error) {
		console.error("Error marking as read:", error);
	}
};

export const getMessagesByConversation = async (
	conversationId: string
): Promise<{ messages: Message[] }> => {
	try {
		const messageThread = await getMessageThread(conversationId);
		return { messages: messageThread.messages };
	} catch (error) {
		console.error("Error fetching messages:", error);
		return { messages: [] };
	}
};

// Mock data generators for development
const generateMockConversations = (doctorId: string): Conversation[] => {
	return [
		{
			id: "1",
			patientId: "patient1",
			patientName: "María García",
			doctorId: doctorId,
			doctorName: "Dr. Juan Pérez",
			lastMessage: {
				id: "msg1",
				conversationId: "1",
				senderId: "patient1",
				senderName: "María García",
				senderType: "patient",
				content: "Doctor, tengo algunas dudas sobre mi medicación",
				timestamp: new Date(Date.now() - 30 * 60 * 1000).toISOString(),
				isRead: false,
			},
			lastActivity: new Date(Date.now() - 30 * 60 * 1000).toISOString(),
			unreadCount: 1,
			status: "active",
			subject: "Consulta sobre medicación",
		},
		{
			id: "2",
			patientId: "patient2",
			patientName: "Carlos Rodriguez",
			doctorId: doctorId,
			doctorName: "Dr. Juan Pérez",
			lastMessage: {
				id: "msg2",
				conversationId: "2",
				senderId: doctorId,
				senderName: "Dr. Juan Pérez",
				senderType: "doctor",
				content: "Perfecto, nos vemos en la próxima cita",
				timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
				isRead: true,
			},
			lastActivity: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
			unreadCount: 0,
			status: "active",
			subject: "Seguimiento post-consulta",
		},
		{
			id: "3",
			patientId: "patient3",
			patientName: "Ana López",
			doctorId: doctorId,
			doctorName: "Dr. Juan Pérez",
			lastMessage: {
				id: "msg3",
				conversationId: "3",
				senderId: "patient3",
				senderName: "Ana López",
				senderType: "patient",
				content: "¿Puedo reprogramar mi cita?",
				timestamp: new Date(Date.now() - 4 * 60 * 60 * 1000).toISOString(),
				isRead: false,
			},
			lastActivity: new Date(Date.now() - 4 * 60 * 60 * 1000).toISOString(),
			unreadCount: 2,
			status: "active",
			subject: "Reprogramación de cita",
		},
	];
};

const generateMockMessageThread = (conversationId: string): MessageThread => {
	const conversations = generateMockConversations("current-doctor");
	const conversation = conversations.find((c) => c.id === conversationId) || conversations[0];

	return {
		conversation,
		messages: [
			{
				id: "msg1-1",
				conversationId: conversationId,
				senderId: conversation.patientId,
				senderName: conversation.patientName,
				senderType: "patient",
				content:
					"Hola Doctor, espero que esté bien. Tengo algunas preguntas sobre mi tratamiento.",
				timestamp: new Date(Date.now() - 3 * 60 * 60 * 1000).toISOString(),
				isRead: true,
			},
			{
				id: "msg1-2",
				conversationId: conversationId,
				senderId: conversation.doctorId,
				senderName: conversation.doctorName,
				senderType: "doctor",
				content:
					"Hola! Por supuesto, estoy aquí para ayudarle. ¿Qué dudas tiene sobre su tratamiento?",
				timestamp: new Date(Date.now() - 2.5 * 60 * 60 * 1000).toISOString(),
				isRead: true,
			},
			{
				id: "msg1-3",
				conversationId: conversationId,
				senderId: conversation.patientId,
				senderName: conversation.patientName,
				senderType: "patient",
				content:
					"Principalmente sobre los horarios de la medicación. ¿Es importante tomarla exactamente a la misma hora todos los días?",
				timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
				isRead: true,
			},
			{
				id: "msg1-4",
				conversationId: conversationId,
				senderId: conversation.doctorId,
				senderName: conversation.doctorName,
				senderType: "doctor",
				content:
					"Es recomendable mantener horarios regulares, pero no tiene que ser exactamente la misma hora. Un margen de 1-2 horas está bien. Lo importante es mantener el intervalo entre dosis.",
				timestamp: new Date(Date.now() - 1.5 * 60 * 60 * 1000).toISOString(),
				isRead: true,
			},
			{
				id: "msg1-5",
				conversationId: conversationId,
				senderId: conversation.patientId,
				senderName: conversation.patientName,
				senderType: "patient",
				content: "Perfecto, muchas gracias por la aclaración. ¿Y si me olvido una dosis?",
				timestamp: new Date(Date.now() - 30 * 60 * 1000).toISOString(),
				isRead: false,
			},
		],
	};
};

// Generate mock conversations for patient
const generateMockPatientConversations = (patientId: string): Conversation[] => {
	return [
		{
			id: "1",
			patientId,
			patientName: "Paciente",
			doctorId: "doctor1",
			doctorName: "Dr. Juan Pérez",
			lastMessage: {
				id: "msg1",
				conversationId: "1",
				senderId: "doctor1",
				senderName: "Dr. Juan Pérez",
				senderType: "doctor",
				content: "Recuerde tomar su medicación según las indicaciones.",
				timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
				isRead: false,
			},
			lastActivity: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
			unreadCount: 1,
			status: "active",
			subject: "Consulta sobre medicación",
		},
		{
			id: "2",
			patientId,
			patientName: "Paciente",
			doctorId: "doctor2",
			doctorName: "Dra. María López",
			lastMessage: {
				id: "msg2",
				conversationId: "2",
				senderId: patientId,
				senderName: "Paciente",
				senderType: "patient",
				content: "Gracias por la explicación detallada.",
				timestamp: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(),
				isRead: true,
			},
			lastActivity: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(),
			unreadCount: 0,
			status: "active",
			subject: "Resultados de análisis",
		},
		{
			id: "3",
			patientId,
			patientName: "Paciente",
			doctorId: "doctor1",
			doctorName: "Dr. Juan Pérez",
			lastMessage: {
				id: "msg3",
				conversationId: "3",
				senderId: "doctor1",
				senderName: "Dr. Juan Pérez",
				senderType: "doctor",
				content: "Su próxima cita está programada para el próximo martes.",
				timestamp: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(),
				isRead: true,
			},
			lastActivity: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(),
			unreadCount: 0,
			status: "active",
			subject: "Programación de cita",
		},
	];
};
