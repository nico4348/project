import { useState, useEffect, useCallback } from "react";
import {
	Search,
	Send,
	Paperclip,
	MoreVertical,
	Phone,
	Video,
	CheckCircle2,
	Circle,
	Stethoscope,
	MessageSquare,
} from "lucide-react";
import { useUser } from "../../context/UserContext";
import { Message, Conversation, SendMessageRequest } from "../../types/message";
import {
	getConversationsByPatient,
	getMessagesByConversation,
	sendMessage,
	markAsRead,
} from "../../services/messageService";

const MessagesPatient = () => {
	const { user } = useUser();
	const [conversations, setConversations] = useState<Conversation[]>([]);
	const [selectedConversation, setSelectedConversation] = useState<Conversation | null>(null);
	const [messages, setMessages] = useState<Message[]>([]);
	const [newMessage, setNewMessage] = useState("");
	const [searchTerm, setSearchTerm] = useState("");
	const [isLoading, setIsLoading] = useState(true);
	const [isSending, setIsSending] = useState(false);

	// Filter states for conversations
	const [filterStatus, setFilterStatus] = useState<"all" | "unread">("all");

	// Fetch conversations for the patient
	const fetchConversations = useCallback(async () => {
		if (!user?.id) return;

		try {
			setIsLoading(true);
			// For patients, we get conversations where they are a participant
			const data = await getConversationsByPatient(user.id);
			setConversations(data);
		} catch (error) {
			console.error("Error fetching conversations:", error);
		} finally {
			setIsLoading(false);
		}
	}, [user?.id]);

	// Fetch messages for selected conversation
	const fetchMessages = useCallback(async (conversationId: string) => {
		try {
			const messageData = await getMessagesByConversation(conversationId);
			setMessages(messageData.messages);

			// Mark messages as read
			await markAsRead(conversationId);

			// Update conversation's unread count
			setConversations((prev) =>
				prev.map((conv) =>
					conv.id === conversationId ? { ...conv, unreadCount: 0 } : conv
				)
			);
		} catch (error) {
			console.error("Error fetching messages:", error);
		}
	}, []);

	useEffect(() => {
		fetchConversations();
	}, [fetchConversations]);

	useEffect(() => {
		if (selectedConversation) {
			fetchMessages(selectedConversation.id);
		}
	}, [selectedConversation, fetchMessages]);

	// Handle conversation selection
	const handleConversationSelect = (conversation: Conversation) => {
		setSelectedConversation(conversation);
	};

	// Handle sending a message
	const handleSendMessage = async () => {
		if (!newMessage.trim() || !selectedConversation || !user?.id || isSending) return;

		try {
			setIsSending(true);
			const messageData: SendMessageRequest = {
				conversationId: selectedConversation.id,
				content: newMessage.trim(),
			};

			const sentMessage = await sendMessage(messageData);
			setMessages((prev) => [...prev, sentMessage]);
			setNewMessage("");

			// Update conversation's last message
			setConversations((prev) =>
				prev.map((conv) =>
					conv.id === selectedConversation.id
						? {
								...conv,
								lastMessage: sentMessage,
								lastActivity: sentMessage.timestamp,
						  }
						: conv
				)
			);
		} catch (error) {
			console.error("Error sending message:", error);
		} finally {
			setIsSending(false);
		}
	};

	// Filter conversations based on search and status
	const filteredConversations = conversations.filter((conversation) => {
		const matchesSearch =
			!searchTerm ||
			conversation.doctorName.toLowerCase().includes(searchTerm.toLowerCase()) ||
			(conversation.subject &&
				conversation.subject.toLowerCase().includes(searchTerm.toLowerCase())) ||
			(conversation.lastMessage &&
				conversation.lastMessage.content.toLowerCase().includes(searchTerm.toLowerCase()));

		const matchesFilter =
			filterStatus === "all" || (filterStatus === "unread" && conversation.unreadCount > 0);

		return matchesSearch && matchesFilter;
	});

	// Format message time
	const formatMessageTime = (timestamp: string) => {
		const messageDate = new Date(timestamp);
		const now = new Date();
		const diffInHours = (now.getTime() - messageDate.getTime()) / (1000 * 60 * 60);

		if (diffInHours < 24) {
			return messageDate.toLocaleTimeString("es-ES", {
				hour: "2-digit",
				minute: "2-digit",
			});
		} else if (diffInHours < 168) {
			// 7 days
			return messageDate.toLocaleDateString("es-ES", {
				weekday: "short",
				hour: "2-digit",
				minute: "2-digit",
			});
		} else {
			return messageDate.toLocaleDateString("es-ES", {
				day: "2-digit",
				month: "2-digit",
				year: "2-digit",
			});
		}
	};

	// Render conversation list
	const renderConversationsList = () => (
		<div className="w-full md:w-1/3 border-r border-gray-200 bg-white">
			{/* Header */}
			<div className="p-4 border-b border-gray-200">
				<div className="flex items-center justify-between mb-4">
					<h2 className="text-lg font-semibold text-gray-900">Mensajes</h2>
				</div>

				{/* Search */}
				<div className="relative mb-4">
					<Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
					<input
						type="text"
						placeholder="Buscar conversaciones..."
						value={searchTerm}
						onChange={(e) => setSearchTerm(e.target.value)}
						className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
					/>
				</div>

				{/* Filter tabs */}
				<div className="flex space-x-1">
					{[
						{ key: "all" as const, label: "Todos", count: conversations.length },
						{
							key: "unread" as const,
							label: "No leídos",
							count: conversations.filter((c) => c.unreadCount > 0).length,
						},
					].map((tab) => (
						<button
							key={tab.key}
							onClick={() => setFilterStatus(tab.key)}
							className={`px-3 py-1 text-sm font-medium rounded-md transition-colors ${
								filterStatus === tab.key
									? "bg-cyan-100 text-cyan-700"
									: "text-gray-500 hover:text-gray-700 hover:bg-gray-100"
							}`}
						>
							{tab.label} {tab.count > 0 && `(${tab.count})`}
						</button>
					))}
				</div>
			</div>

			{/* Conversations list */}
			<div className="overflow-y-auto h-full">
				{isLoading ? (
					<div className="p-4">
						<div className="animate-pulse space-y-4">
							{[...Array(5)].map((_, i) => (
								<div key={i} className="flex space-x-3">
									<div className="rounded-full bg-gray-200 h-12 w-12"></div>
									<div className="flex-1 space-y-2 py-1">
										<div className="h-4 bg-gray-200 rounded w-3/4"></div>
										<div className="h-3 bg-gray-200 rounded w-1/2"></div>
									</div>
								</div>
							))}
						</div>
					</div>
				) : filteredConversations.length === 0 ? (
					<div className="p-4 text-center">
						<MessageSquare className="mx-auto h-12 w-12 text-gray-400" />
						<h3 className="mt-2 text-sm font-medium text-gray-900">
							{searchTerm
								? "No se encontraron conversaciones"
								: "No hay conversaciones"}
						</h3>
						<p className="mt-1 text-sm text-gray-500">
							{searchTerm
								? "Intenta con otros términos de búsqueda"
								: "Inicia una nueva conversación con tu médico"}
						</p>
					</div>
				) : (
					<div className="divide-y divide-gray-200">
						{filteredConversations.map((conversation) => (
							<div
								key={conversation.id}
								onClick={() => handleConversationSelect(conversation)}
								className={`p-4 cursor-pointer hover:bg-gray-50 transition-colors ${
									selectedConversation?.id === conversation.id
										? "bg-cyan-50 border-r-2 border-cyan-500"
										: ""
								}`}
							>
								<div className="flex items-center space-x-3">
									<div className="relative">
										<div className="w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center">
											<Stethoscope className="h-6 w-6 text-cyan-600" />
										</div>
										{conversation.unreadCount > 0 && (
											<span className="absolute -top-1 -right-1 h-5 w-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
												{conversation.unreadCount}
											</span>
										)}
									</div>
									<div className="flex-1 min-w-0">
										<div className="flex items-center justify-between">
											<p className="text-sm font-medium text-gray-900 truncate">
												{conversation.doctorName}
											</p>
											<div className="flex items-center space-x-1">
												<span className="text-xs text-gray-500">
													{formatMessageTime(conversation.lastActivity)}
												</span>
											</div>
										</div>
										<p className="text-sm text-gray-600 truncate">
											{conversation.subject || "Conversación"}
										</p>
										<p className="text-xs text-gray-500 truncate mt-1">
											{conversation.lastMessage
												? `${conversation.lastMessage.senderName}: ${conversation.lastMessage.content}`
												: "Sin mensajes"}
										</p>
									</div>
								</div>
							</div>
						))}
					</div>
				)}
			</div>
		</div>
	);

	// Render message thread
	const renderMessageThread = () => {
		if (!selectedConversation) {
			return (
				<div className="flex-1 flex items-center justify-center bg-gray-50">
					<div className="text-center">
						<MessageSquare className="mx-auto h-12 w-12 text-gray-400" />
						<h3 className="mt-2 text-sm font-medium text-gray-900">
							Selecciona una conversación
						</h3>
						<p className="mt-1 text-sm text-gray-500">
							Elige una conversación de la lista para ver los mensajes
						</p>
					</div>
				</div>
			);
		}

		return (
			<div className="flex-1 flex flex-col bg-white">
				{/* Thread header */}
				<div className="px-6 py-4 border-b border-gray-200 bg-white">
					<div className="flex items-center justify-between">
						<div className="flex items-center space-x-3">
							<div className="w-10 h-10 bg-cyan-100 rounded-full flex items-center justify-center">
								<Stethoscope className="h-5 w-5 text-cyan-600" />
							</div>
							<div>
								<h3 className="text-lg font-medium text-gray-900">
									{selectedConversation.doctorName}
								</h3>
								<p className="text-sm text-gray-500">
									{selectedConversation.subject}
								</p>
							</div>
						</div>
						<div className="flex items-center space-x-2">
							<button className="p-2 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-100">
								<Phone className="h-5 w-5" />
							</button>
							<button className="p-2 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-100">
								<Video className="h-5 w-5" />
							</button>
							<button className="p-2 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-100">
								<MoreVertical className="h-5 w-5" />
							</button>
						</div>
					</div>
				</div>

				{/* Messages */}
				<div className="flex-1 overflow-y-auto p-6 space-y-4">
					{messages.length === 0 ? (
						<div className="text-center py-8">
							<MessageSquare className="mx-auto h-12 w-12 text-gray-400" />
							<h3 className="mt-2 text-sm font-medium text-gray-900">
								Aún no hay mensajes
							</h3>
							<p className="mt-1 text-sm text-gray-500">
								Inicia la conversación enviando un mensaje
							</p>
						</div>
					) : (
						messages.map((message) => (
							<div
								key={message.id}
								className={`flex ${
									message.senderType === "patient"
										? "justify-end"
										: "justify-start"
								}`}
							>
								<div
									className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
										message.senderType === "patient"
											? "bg-cyan-500 text-white"
											: "bg-gray-100 text-gray-900"
									}`}
								>
									<p className="text-sm">{message.content}</p>
									<div
										className={`flex items-center justify-between mt-1 text-xs ${
											message.senderType === "patient"
												? "text-cyan-100"
												: "text-gray-500"
										}`}
									>
										<span>{formatMessageTime(message.timestamp)}</span>
										{message.senderType === "patient" && (
											<div className="ml-2">
												{message.isRead ? (
													<CheckCircle2 className="h-3 w-3" />
												) : (
													<Circle className="h-3 w-3" />
												)}
											</div>
										)}
									</div>
								</div>
							</div>
						))
					)}
				</div>

				{/* Message input */}
				<div className="px-6 py-4 border-t border-gray-200 bg-white">
					<div className="flex items-end space-x-2">
						<button className="p-2 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-100">
							<Paperclip className="h-5 w-5" />
						</button>
						<div className="flex-1">
							<textarea
								value={newMessage}
								onChange={(e) => setNewMessage(e.target.value)}
								onKeyPress={(e) => {
									if (e.key === "Enter" && !e.shiftKey) {
										e.preventDefault();
										handleSendMessage();
									}
								}}
								placeholder="Escribe tu mensaje..."
								rows={1}
								className="block w-full resize-none border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
							/>
						</div>
						<button
							onClick={handleSendMessage}
							disabled={!newMessage.trim() || isSending}
							className="p-2 bg-cyan-500 text-white rounded-full hover:bg-cyan-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
						>
							<Send className="h-5 w-5" />
						</button>
					</div>
				</div>
			</div>
		);
	};

	return (
		<div className="h-screen flex flex-col">
			<div className="flex-1 flex overflow-hidden">
				{/* Mobile: Show either conversations or thread */}
				<div className="md:hidden w-full">
					{selectedConversation ? renderMessageThread() : renderConversationsList()}
				</div>

				{/* Desktop: Show both */}
				<div className="hidden md:flex w-full">
					{renderConversationsList()}
					{renderMessageThread()}
				</div>
			</div>

			{/* Back button for mobile */}
			{selectedConversation && (
				<div className="md:hidden fixed top-4 left-4 z-10">
					<button
						onClick={() => setSelectedConversation(null)}
						className="p-2 bg-white rounded-full shadow-lg border border-gray-200"
					>
						←
					</button>
				</div>
			)}
		</div>
	);
};

export default MessagesPatient;
