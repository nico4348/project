import { useState, useEffect, useRef, useCallback } from "react";
import {
	Search,
	Plus,
	Send,
	Paperclip,
	MoreVertical,
	Phone,
	Video,
	Circle,
	Clock,
	User,
	ChevronLeft,
} from "lucide-react";
import { useUser } from "../../context/UserContext";
import { Conversation, MessageThread, SendMessageRequest } from "../../types/message";
import {
	getConversationsByDoctor,
	getMessageThread,
	sendMessage,
	markConversationAsRead,
} from "../../services/messageService";

type ViewMode = "conversations" | "thread";

const MessagesDoctor = () => {
	const { user } = useUser();
	const messagesEndRef = useRef<HTMLDivElement>(null);

	// State management
	const [conversations, setConversations] = useState<Conversation[]>([]);
	const [filteredConversations, setFilteredConversations] = useState<Conversation[]>([]);
	const [selectedConversation, setSelectedConversation] = useState<Conversation | null>(null);
	const [currentThread, setCurrentThread] = useState<MessageThread | null>(null);
	const [isLoading, setIsLoading] = useState(true);
	const [isLoadingThread, setIsLoadingThread] = useState(false);
	const [isSending, setIsSending] = useState(false);
	const [viewMode, setViewMode] = useState<ViewMode>("conversations");

	// Search and filter states
	const [searchTerm, setSearchTerm] = useState("");
	const [filterStatus, setFilterStatus] = useState<"all" | "unread" | "active" | "archived">(
		"all"
	);

	// Message composition states
	const [newMessage, setNewMessage] = useState("");
	const [attachments, setAttachments] = useState<File[]>([]);

	// Fetch conversations
	const fetchConversations = useCallback(async () => {
		if (!user?.id) return;

		try {
			setIsLoading(true);
			const conversationsData = await getConversationsByDoctor(user.id);
			setConversations(conversationsData);
			setFilteredConversations(conversationsData);
		} catch (error) {
			console.error("Error fetching conversations:", error);
		} finally {
			setIsLoading(false);
		}
	}, [user?.id]);

	useEffect(() => {
		fetchConversations();
	}, [fetchConversations]);

	// Apply filters
	const applyFilters = useCallback(() => {
		let filtered = conversations;

		// Apply status filter
		if (filterStatus !== "all") {
			filtered = filtered.filter((conv) => {
				switch (filterStatus) {
					case "unread":
						return conv.unreadCount > 0;
					case "active":
						return conv.status === "active";
					case "archived":
						return conv.status === "archived";
					default:
						return true;
				}
			});
		}

		// Apply search filter
		if (searchTerm) {
			filtered = filtered.filter(
				(conv) =>
					conv.patientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
					(conv.subject &&
						conv.subject.toLowerCase().includes(searchTerm.toLowerCase())) ||
					conv.lastMessage?.content.toLowerCase().includes(searchTerm.toLowerCase())
			);
		}

		setFilteredConversations(filtered);
	}, [conversations, filterStatus, searchTerm]);

	useEffect(() => {
		applyFilters();
	}, [applyFilters]);

	// Handle conversation selection
	const handleConversationSelect = async (conversation: Conversation) => {
		setSelectedConversation(conversation);
		setIsLoadingThread(true);
		setViewMode("thread");

		try {
			const thread = await getMessageThread(conversation.id);
			setCurrentThread(thread);

			// Mark conversation as read
			if (conversation.unreadCount > 0) {
				await markConversationAsRead(conversation.id);
				await fetchConversations(); // Refresh to update unread counts
			}
		} catch (error) {
			console.error("Error fetching message thread:", error);
		} finally {
			setIsLoadingThread(false);
		}
	};

	// Handle message sending
	const handleSendMessage = async () => {
		if (!newMessage.trim() || !selectedConversation || !user?.id) return;

		const messageData: SendMessageRequest = {
			conversationId: selectedConversation.id,
			content: newMessage.trim(),
			attachments: attachments.length > 0 ? attachments : undefined,
		};

		try {
			setIsSending(true);
			const sentMessage = await sendMessage(messageData);

			// Update current thread
			if (currentThread) {
				setCurrentThread({
					...currentThread,
					messages: [...currentThread.messages, sentMessage],
				});
			}

			// Clear form
			setNewMessage("");
			setAttachments([]);

			// Refresh conversations to update last message
			await fetchConversations();
		} catch (error) {
			console.error("Error sending message:", error);
			alert("Error al enviar el mensaje");
		} finally {
			setIsSending(false);
		}
	};

	// Handle file attachment
	const handleFileAttachment = (event: React.ChangeEvent<HTMLInputElement>) => {
		const files = Array.from(event.target.files || []);
		setAttachments((prev) => [...prev, ...files]);
	};

	const removeAttachment = (index: number) => {
		setAttachments((prev) => prev.filter((_, i) => i !== index));
	};

	// Format time
	const formatTime = (dateString: string) => {
		const date = new Date(dateString);
		const now = new Date();
		const diffInHours = (now.getTime() - date.getTime()) / (1000 * 60 * 60);

		if (diffInHours < 24) {
			return date.toLocaleTimeString("es-ES", {
				hour: "2-digit",
				minute: "2-digit",
			});
		} else if (diffInHours < 168) {
			// 7 days
			return date.toLocaleDateString("es-ES", {
				weekday: "short",
				hour: "2-digit",
				minute: "2-digit",
			});
		} else {
			return date.toLocaleDateString("es-ES", {
				day: "numeric",
				month: "short",
			});
		}
	};

	// Scroll to bottom of messages
	const scrollToBottom = () => {
		messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
	};

	useEffect(() => {
		scrollToBottom();
	}, [currentThread?.messages]);

	// Render conversations list
	const renderConversationsList = () => (
		<div className="flex h-full">
			{/* Sidebar with conversations */}
			<div className="w-1/3 border-r border-gray-200 bg-white flex flex-col">
				{/* Header */}
				<div className="p-4 border-b border-gray-200">
					<div className="flex items-center justify-between mb-4">
						<h1 className="text-xl font-semibold text-gray-900">Mensajes</h1>
						<button className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100">
							<Plus className="h-5 w-5" />
						</button>
					</div>

					{/* Search */}
					<div className="relative mb-4">
						<Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
						<input
							type="text"
							value={searchTerm}
							onChange={(e) => setSearchTerm(e.target.value)}
							placeholder="Buscar conversaciones..."
							className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm"
						/>
					</div>

					{/* Filters */}
					<div className="flex space-x-2">
						{[
							{ key: "all", label: "Todas" },
							{ key: "unread", label: "No leídas" },
							{ key: "active", label: "Activas" },
							{ key: "archived", label: "Archivadas" },
						].map((filter) => (
							<button
								key={filter.key}
								onClick={() => setFilterStatus(filter.key as typeof filterStatus)}
								className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
									filterStatus === filter.key
										? "bg-cyan-100 text-cyan-800"
										: "bg-gray-100 text-gray-600 hover:bg-gray-200"
								}`}
							>
								{filter.label}
							</button>
						))}
					</div>
				</div>

				{/* Conversations list */}
				<div className="flex-1 overflow-y-auto">
					{isLoading ? (
						<div className="p-4 space-y-4">
							{[...Array(5)].map((_, i) => (
								<div key={i} className="animate-pulse">
									<div className="flex space-x-3">
										<div className="rounded-full bg-gray-200 h-12 w-12"></div>
										<div className="flex-1 space-y-2">
											<div className="h-4 bg-gray-200 rounded w-3/4"></div>
											<div className="h-3 bg-gray-200 rounded w-1/2"></div>
										</div>
									</div>
								</div>
							))}
						</div>
					) : filteredConversations.length === 0 ? (
						<div className="p-6 text-center">
							<User className="mx-auto h-12 w-12 text-gray-400" />
							<h3 className="mt-2 text-sm font-medium text-gray-900">
								No hay conversaciones
							</h3>
							<p className="mt-1 text-sm text-gray-500">
								Las conversaciones con pacientes aparecerán aquí.
							</p>
						</div>
					) : (
						<div className="divide-y divide-gray-200">
							{filteredConversations.map((conversation) => (
								<div
									key={conversation.id}
									onClick={() => handleConversationSelect(conversation)}
									className={`p-4 hover:bg-gray-50 cursor-pointer transition-colors ${
										selectedConversation?.id === conversation.id
											? "bg-cyan-50 border-r-2 border-cyan-500"
											: ""
									}`}
								>
									<div className="flex items-start">
										<div className="relative">
											<div className="p-2 bg-gray-100 rounded-full">
												<User className="h-6 w-6 text-gray-600" />
											</div>
											{conversation.unreadCount > 0 && (
												<div className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
													{conversation.unreadCount}
												</div>
											)}
										</div>
										<div className="ml-3 flex-1 min-w-0">
											<div className="flex items-center justify-between">
												<p className="text-sm font-medium text-gray-900 truncate">
													{conversation.patientName}
												</p>
												<p className="text-xs text-gray-500">
													{formatTime(conversation.lastActivity)}
												</p>
											</div>
											{conversation.subject && (
												<p className="text-xs text-gray-600 mb-1 truncate">
													{conversation.subject}
												</p>
											)}
											<p className="text-sm text-gray-500 truncate">
												{conversation.lastMessage?.content ||
													"No hay mensajes"}
											</p>
											<div className="flex items-center mt-1">
												<Circle
													className={`h-2 w-2 mr-2 ${
														conversation.status === "active"
															? "text-green-500 fill-current"
															: "text-gray-400"
													}`}
												/>
												<span className="text-xs text-gray-400">
													{conversation.status === "active"
														? "Activa"
														: "Archivada"}
												</span>
											</div>
										</div>
									</div>
								</div>
							))}
						</div>
					)}
				</div>
			</div>

			{/* Main area - empty state */}
			<div className="flex-1 flex items-center justify-center bg-gray-50">
				<div className="text-center">
					<User className="mx-auto h-16 w-16 text-gray-400" />
					<h3 className="mt-4 text-lg font-medium text-gray-900">
						Selecciona una conversación
					</h3>
					<p className="mt-2 text-sm text-gray-500">
						Elige una conversación de la lista para ver los mensajes
					</p>
				</div>
			</div>
		</div>
	);

	// Render message thread
	const renderMessageThread = () => {
		if (!selectedConversation || !currentThread) return null;

		return (
			<div className="flex h-full bg-white">
				{/* Thread view */}
				<div className="flex-1 flex flex-col">
					{/* Header */}
					<div className="px-6 py-4 border-b border-gray-200">
						<div className="flex items-center justify-between">
							<div className="flex items-center">
								<button
									onClick={() => setViewMode("conversations")}
									className="mr-4 p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100 md:hidden"
								>
									<ChevronLeft className="h-5 w-5" />
								</button>
								<div className="flex items-center">
									<div className="p-2 bg-gray-100 rounded-full">
										<User className="h-6 w-6 text-gray-600" />
									</div>
									<div className="ml-3">
										<h2 className="text-lg font-medium text-gray-900">
											{selectedConversation.patientName}
										</h2>
										{selectedConversation.subject && (
											<p className="text-sm text-gray-500">
												{selectedConversation.subject}
											</p>
										)}
									</div>
								</div>
							</div>
							<div className="flex items-center space-x-2">
								<button className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100">
									<Phone className="h-5 w-5" />
								</button>
								<button className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100">
									<Video className="h-5 w-5" />
								</button>
								<button className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100">
									<MoreVertical className="h-5 w-5" />
								</button>
							</div>
						</div>
					</div>

					{/* Messages */}
					<div className="flex-1 overflow-y-auto p-6 space-y-4">
						{isLoadingThread ? (
							<div className="space-y-4">
								{[...Array(3)].map((_, i) => (
									<div key={i} className="animate-pulse">
										<div className="flex space-x-3">
											<div className="rounded-full bg-gray-200 h-8 w-8"></div>
											<div className="flex-1 space-y-2">
												<div className="h-4 bg-gray-200 rounded w-3/4"></div>
												<div className="h-3 bg-gray-200 rounded w-1/2"></div>
											</div>
										</div>
									</div>
								))}
							</div>
						) : (
							currentThread.messages.map((message) => (
								<div
									key={message.id}
									className={`flex ${
										message.senderType === "doctor"
											? "justify-end"
											: "justify-start"
									}`}
								>
									<div
										className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
											message.senderType === "doctor"
												? "bg-cyan-600 text-white"
												: "bg-gray-100 text-gray-900"
										}`}
									>
										<p className="text-sm">{message.content}</p>
										<div className="flex items-center justify-between mt-1">
											<p
												className={`text-xs ${
													message.senderType === "doctor"
														? "text-cyan-100"
														: "text-gray-500"
												}`}
											>
												{formatTime(message.timestamp)}
											</p>
											{message.attachments &&
												message.attachments.length > 0 && (
													<Paperclip className="h-3 w-3 ml-2" />
												)}
										</div>
									</div>
								</div>
							))
						)}
						<div ref={messagesEndRef} />
					</div>

					{/* Message input */}
					<div className="border-t border-gray-200 px-6 py-4">
						{/* Attachments preview */}
						{attachments.length > 0 && (
							<div className="mb-3">
								<div className="flex flex-wrap gap-2">
									{attachments.map((file, index) => (
										<div
											key={index}
											className="flex items-center px-3 py-2 bg-gray-100 rounded-lg text-sm"
										>
											<Paperclip className="h-4 w-4 mr-2 text-gray-500" />
											<span className="text-gray-700 truncate max-w-xs">
												{file.name}
											</span>
											<button
												onClick={() => removeAttachment(index)}
												className="ml-2 text-gray-400 hover:text-gray-600"
											>
												×
											</button>
										</div>
									))}
								</div>
							</div>
						)}

						<div className="flex items-end space-x-3">
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
									className="block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm resize-none"
								/>
							</div>
							<div className="flex items-center space-x-2">
								<label className="cursor-pointer">
									<input
										type="file"
										multiple
										onChange={handleFileAttachment}
										className="sr-only"
										accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
									/>
									<div className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100">
										<Paperclip className="h-5 w-5" />
									</div>
								</label>
								<button
									onClick={handleSendMessage}
									disabled={!newMessage.trim() || isSending}
									className="p-2 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 disabled:opacity-50 disabled:cursor-not-allowed"
								>
									{isSending ? (
										<Clock className="h-5 w-5 animate-spin" />
									) : (
										<Send className="h-5 w-5" />
									)}
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	};

	return (
		<div className="h-screen flex flex-col">
			<div className="flex-1 overflow-hidden">
				{viewMode === "conversations" ? renderConversationsList() : renderMessageThread()}
			</div>
		</div>
	);
};

export default MessagesDoctor;
