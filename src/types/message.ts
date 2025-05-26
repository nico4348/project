export interface Message {
	id: string;
	conversationId: string;
	senderId: string;
	senderName: string;
	senderType: "doctor" | "patient";
	content: string;
	timestamp: string;
	isRead: boolean;
	attachments?: MessageAttachment[];
}

export interface MessageAttachment {
	id: string;
	fileName: string;
	fileType: string;
	fileSize: number;
	url: string;
}

export interface Conversation {
	id: string;
	patientId: string;
	patientName: string;
	doctorId: string;
	doctorName: string;
	lastMessage: Message | null;
	lastActivity: string;
	unreadCount: number;
	status: "active" | "archived" | "closed";
	subject?: string;
}

export interface MessageThread {
	conversation: Conversation;
	messages: Message[];
}

export interface SendMessageRequest {
	conversationId: string;
	content: string;
	attachments?: File[];
}

export interface CreateConversationRequest {
	patientId: string;
	subject: string;
	initialMessage: string;
}
