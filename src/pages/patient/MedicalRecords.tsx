import { useState, useEffect, useCallback } from "react";
import {
	Search,
	Calendar,
	User,
	Stethoscope,
	Pill,
	AlertTriangle,
	Eye,
	Download,
	FileText,
	Heart,
	ChevronDown,
	ChevronUp,
} from "lucide-react";
import { useUser } from "../../context/UserContext";
import { MedicalRecord } from "../../types/medicalRecord";

const MedicalRecordsPatient = () => {
	const { user } = useUser();
	const [medicalRecords, setMedicalRecords] = useState<MedicalRecord[]>([]);
	const [filteredRecords, setFilteredRecords] = useState<MedicalRecord[]>([]);
	const [selectedRecord, setSelectedRecord] = useState<MedicalRecord | null>(null);
	const [isLoading, setIsLoading] = useState(true);
	const [viewMode, setViewMode] = useState<"list" | "view">("list");

	// Search and filter states
	const [searchTerm, setSearchTerm] = useState("");
	const [dateFilter, setDateFilter] = useState({ from: "", to: "" });
	const [doctorFilter, setDoctorFilter] = useState("");

	// Expanded sections in detail view
	const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
		diagnosis: true,
		medications: false,
		vitals: false,
		history: false,
		attachments: false,
	});

	// Fetch medical records for patient
	const fetchMedicalRecords = useCallback(async () => {
		if (!user?.id) return;

		try {
			setIsLoading(true);
			// This would be a call to get patient's medical records
			// const records = await getMedicalRecordsByPatient(user.id);

			// For now, using mock data
			const mockRecords: MedicalRecord[] = [
				{
					id: "1",
					patientId: user.id,
					patientName: user.name || "Paciente",
					doctorId: "doctor1",
					doctorName: "Dr. Juan Pérez",
					date: "2024-03-15",
					diagnosis: "Hipertensión arterial leve",
					symptoms: "Dolor de cabeza ocasional, mareos leves",
					treatment: "Cambios en el estilo de vida, medicación antihipertensiva",
					medications: [
						{
							id: "med1",
							name: "Enalapril",
							dosage: "10mg",
							frequency: "Una vez al día",
							duration: "Indefinido",
							instructions: "Tomar en ayunas",
						},
					],
					allergies: ["Penicilina"],
					familyHistory: "Antecedentes familiares de hipertensión (padre)",
					vitalSigns: {
						bloodPressure: "140/90 mmHg",
						heartRate: "78 bpm",
						temperature: "36.5°C",
						weight: "75 kg",
						height: "1.75 m",
						respiratoryRate: "16 rpm",
					},
					notes: "Paciente debe realizar ejercicio regular y mantener dieta baja en sodio",
					attachments: [],
					status: "completed",
					followUpDate: "2024-04-15",
				},
				{
					id: "2",
					patientId: user.id,
					patientName: user.name || "Paciente",
					doctorId: "doctor2",
					doctorName: "Dra. María López",
					date: "2024-02-20",
					diagnosis: "Gastritis crónica",
					symptoms: "Dolor abdominal, acidez estomacal",
					treatment: "Inhibidores de bomba de protones, dieta especial",
					medications: [
						{
							id: "med2",
							name: "Omeprazol",
							dosage: "20mg",
							frequency: "Una vez al día",
							duration: "2 meses",
							instructions: "Tomar 30 minutos antes del desayuno",
						},
					],
					allergies: [],
					familyHistory: "Sin antecedentes relevantes",
					vitalSigns: {
						bloodPressure: "120/80 mmHg",
						heartRate: "72 bpm",
						temperature: "36.3°C",
						weight: "74 kg",
						height: "1.75 m",
						respiratoryRate: "14 rpm",
					},
					notes: "Evitar alimentos picantes y bebidas carbonatadas",
					attachments: [],
					status: "completed",
				},
				{
					id: "3",
					patientId: user.id,
					patientName: user.name || "Paciente",
					doctorId: "doctor1",
					doctorName: "Dr. Juan Pérez",
					date: "2024-01-10",
					diagnosis: "Chequeo médico general",
					symptoms: "Sin síntomas específicos",
					treatment: "Mantener hábitos saludables",
					medications: [],
					allergies: ["Penicilina"],
					familyHistory: "Antecedentes familiares de hipertensión (padre)",
					vitalSigns: {
						bloodPressure: "125/85 mmHg",
						heartRate: "75 bpm",
						temperature: "36.4°C",
						weight: "76 kg",
						height: "1.75 m",
						respiratoryRate: "15 rpm",
					},
					notes: "Chequeo anual completo. Todos los parámetros normales.",
					attachments: [],
					status: "completed",
				},
			];

			setMedicalRecords(mockRecords);
			setFilteredRecords(mockRecords);
		} catch (error) {
			console.error("Error fetching medical records:", error);
		} finally {
			setIsLoading(false);
		}
	}, [user?.id, user?.name]);

	useEffect(() => {
		fetchMedicalRecords();
	}, [fetchMedicalRecords]);

	// Apply filters
	const applyFilters = useCallback(() => {
		let filtered = medicalRecords;

		if (searchTerm) {
			filtered = filtered.filter(
				(record) =>
					record.diagnosis.toLowerCase().includes(searchTerm.toLowerCase()) ||
					record.doctorName.toLowerCase().includes(searchTerm.toLowerCase()) ||
					record.symptoms.toLowerCase().includes(searchTerm.toLowerCase())
			);
		}

		if (dateFilter.from) {
			filtered = filtered.filter(
				(record) => new Date(record.date) >= new Date(dateFilter.from)
			);
		}

		if (dateFilter.to) {
			filtered = filtered.filter(
				(record) => new Date(record.date) <= new Date(dateFilter.to)
			);
		}

		if (doctorFilter) {
			filtered = filtered.filter((record) =>
				record.doctorName.toLowerCase().includes(doctorFilter.toLowerCase())
			);
		}

		setFilteredRecords(filtered);
	}, [medicalRecords, searchTerm, dateFilter, doctorFilter]);

	useEffect(() => {
		applyFilters();
	}, [applyFilters]);

	const toggleSection = (section: string) => {
		setExpandedSections((prev) => ({
			...prev,
			[section]: !prev[section],
		}));
	};

	const formatDate = (dateString: string) => {
		return new Date(dateString).toLocaleDateString("es-ES", {
			year: "numeric",
			month: "long",
			day: "numeric",
		});
	};

	// Get unique doctors for filter
	const uniqueDoctors = Array.from(new Set(medicalRecords.map((record) => record.doctorName)));

	// Render search and filters
	const renderSearchAndFilters = () => (
		<div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
			<h3 className="text-lg font-medium text-gray-900 mb-4">Buscar registros médicos</h3>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
				<div>
					<label className="block text-sm font-medium text-gray-700 mb-1">
						Buscar diagnóstico o síntomas
					</label>
					<div className="relative">
						<Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
						<input
							type="text"
							value={searchTerm}
							onChange={(e) => setSearchTerm(e.target.value)}
							placeholder="Buscar..."
							className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm"
						/>
					</div>
				</div>

				<div>
					<label className="block text-sm font-medium text-gray-700 mb-1">
						Fecha desde
					</label>
					<input
						type="date"
						value={dateFilter.from}
						onChange={(e) =>
							setDateFilter((prev) => ({ ...prev, from: e.target.value }))
						}
						className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm"
					/>
				</div>

				<div>
					<label className="block text-sm font-medium text-gray-700 mb-1">
						Fecha hasta
					</label>
					<input
						type="date"
						value={dateFilter.to}
						onChange={(e) => setDateFilter((prev) => ({ ...prev, to: e.target.value }))}
						className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm"
					/>
				</div>

				<div>
					<label className="block text-sm font-medium text-gray-700 mb-1">Doctor</label>
					<select
						value={doctorFilter}
						onChange={(e) => setDoctorFilter(e.target.value)}
						className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm"
					>
						<option value="">Todos los doctores</option>
						{uniqueDoctors.map((doctor) => (
							<option key={doctor} value={doctor}>
								{doctor}
							</option>
						))}
					</select>
				</div>
			</div>
		</div>
	);

	// Render records list
	const renderRecordsList = () => (
		<div className="bg-white rounded-lg shadow-sm border border-gray-200">
			<div className="px-6 py-4 border-b border-gray-200">
				<h3 className="text-lg font-medium text-gray-900">
					Mis registros médicos ({filteredRecords.length})
				</h3>
			</div>

			{isLoading ? (
				<div className="p-6">
					<div className="animate-pulse space-y-4">
						{[...Array(3)].map((_, i) => (
							<div key={i} className="flex space-x-4">
								<div className="rounded-full bg-gray-200 h-12 w-12"></div>
								<div className="flex-1 space-y-2 py-1">
									<div className="h-4 bg-gray-200 rounded w-3/4"></div>
									<div className="h-4 bg-gray-200 rounded w-1/2"></div>
								</div>
							</div>
						))}
					</div>
				</div>
			) : filteredRecords.length === 0 ? (
				<div className="p-6 text-center">
					<FileText className="mx-auto h-12 w-12 text-gray-400" />
					<h3 className="mt-2 text-sm font-medium text-gray-900">
						No hay registros médicos
					</h3>
					<p className="mt-1 text-sm text-gray-500">
						Cuando tenga consultas médicas, sus registros aparecerán aquí.
					</p>
				</div>
			) : (
				<div className="divide-y divide-gray-200">
					{filteredRecords.map((record) => (
						<div key={record.id} className="p-6 hover:bg-gray-50">
							<div className="flex items-center justify-between">
								<div className="flex items-start">
									<div className="p-2 bg-cyan-50 rounded-lg">
										<Stethoscope className="h-8 w-8 text-cyan-700" />
									</div>
									<div className="ml-4">
										<h4 className="text-lg font-medium text-gray-900">
											{record.diagnosis}
										</h4>
										<p className="text-sm text-gray-500 mb-2">
											{record.symptoms}
										</p>
										<div className="flex items-center text-sm text-gray-500 space-x-4">
											<div className="flex items-center">
												<Calendar className="h-4 w-4 mr-1" />
												<span>{formatDate(record.date)}</span>
											</div>
											<div className="flex items-center">
												<User className="h-4 w-4 mr-1" />
												<span>{record.doctorName}</span>
											</div>
											<div className="flex items-center">
												<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
													Completado
												</span>
											</div>
										</div>
									</div>
								</div>
								<div className="flex items-center space-x-2">
									<button
										onClick={() => {
											setSelectedRecord(record);
											setViewMode("view");
										}}
										className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
									>
										<Eye className="h-5 w-5" />
									</button>
									<button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
										<Download className="h-5 w-5" />
									</button>
								</div>
							</div>
						</div>
					))}
				</div>
			)}
		</div>
	);

	// Render record detail view
	const renderRecordDetail = () => {
		if (!selectedRecord) return null;

		return (
			<div className="max-w-4xl mx-auto">
				<div className="bg-white rounded-lg shadow-sm border border-gray-200">
					<div className="px-6 py-4 border-b border-gray-200">
						<div className="flex items-center justify-between">
							<h3 className="text-lg font-medium text-gray-900">
								Detalle del registro médico
							</h3>
							<div className="flex items-center space-x-2">
								<button className="p-2 text-gray-400 hover:text-gray-600">
									<Download className="h-5 w-5" />
								</button>
								<button
									onClick={() => setViewMode("list")}
									className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
								>
									Volver
								</button>
							</div>
						</div>
					</div>

					<div className="p-6 space-y-6">
						{/* Header Information */}
						<div className="bg-gray-50 rounded-lg p-4">
							<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
								<div>
									<div className="flex items-center">
										<Calendar className="h-5 w-5 text-gray-400 mr-2" />
										<span className="text-sm font-medium text-gray-700">
											Fecha
										</span>
									</div>
									<p className="mt-1 text-sm text-gray-900">
										{formatDate(selectedRecord.date)}
									</p>
								</div>
								<div>
									<div className="flex items-center">
										<User className="h-5 w-5 text-gray-400 mr-2" />
										<span className="text-sm font-medium text-gray-700">
											Doctor
										</span>
									</div>
									<p className="mt-1 text-sm text-gray-900">
										{selectedRecord.doctorName}
									</p>
								</div>
								<div>
									<div className="flex items-center">
										<Stethoscope className="h-5 w-5 text-gray-400 mr-2" />
										<span className="text-sm font-medium text-gray-700">
											Estado
										</span>
									</div>
									<p className="mt-1">
										<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
											Completado
										</span>
									</p>
								</div>
							</div>
						</div>

						{/* Diagnosis and Symptoms */}
						<div className="border border-gray-200 rounded-lg">
							<button
								type="button"
								onClick={() => toggleSection("diagnosis")}
								className="w-full px-4 py-3 flex items-center justify-between text-left bg-gray-50 hover:bg-gray-100 rounded-t-lg"
							>
								<div className="flex items-center">
									<Stethoscope className="h-5 w-5 text-gray-600 mr-2" />
									<span className="font-medium text-gray-900">
										Diagnóstico y síntomas
									</span>
								</div>
								{expandedSections.diagnosis ? (
									<ChevronUp className="h-5 w-5 text-gray-400" />
								) : (
									<ChevronDown className="h-5 w-5 text-gray-400" />
								)}
							</button>

							{expandedSections.diagnosis && (
								<div className="p-4 space-y-4">
									<div>
										<h4 className="text-sm font-medium text-gray-700 mb-2">
											Diagnóstico
										</h4>
										<p className="text-gray-900">{selectedRecord.diagnosis}</p>
									</div>
									{selectedRecord.symptoms && (
										<div>
											<h4 className="text-sm font-medium text-gray-700 mb-2">
												Síntomas
											</h4>
											<p className="text-gray-900">
												{selectedRecord.symptoms}
											</p>
										</div>
									)}
									{selectedRecord.treatment && (
										<div>
											<h4 className="text-sm font-medium text-gray-700 mb-2">
												Tratamiento
											</h4>
											<p className="text-gray-900">
												{selectedRecord.treatment}
											</p>
										</div>
									)}
								</div>
							)}
						</div>

						{/* Medications */}
						{selectedRecord.medications && selectedRecord.medications.length > 0 && (
							<div className="border border-gray-200 rounded-lg">
								<button
									type="button"
									onClick={() => toggleSection("medications")}
									className="w-full px-4 py-3 flex items-center justify-between text-left bg-gray-50 hover:bg-gray-100 rounded-t-lg"
								>
									<div className="flex items-center">
										<Pill className="h-5 w-5 text-gray-600 mr-2" />
										<span className="font-medium text-gray-900">
											Medicamentos ({selectedRecord.medications.length})
										</span>
									</div>
									{expandedSections.medications ? (
										<ChevronUp className="h-5 w-5 text-gray-400" />
									) : (
										<ChevronDown className="h-5 w-5 text-gray-400" />
									)}
								</button>

								{expandedSections.medications && (
									<div className="p-4 space-y-4">
										{selectedRecord.medications.map((medication, index) => (
											<div
												key={index}
												className="border border-gray-200 rounded-lg p-4"
											>
												<h4 className="font-medium text-gray-900 mb-2">
													{medication.name}
												</h4>
												<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
													<div>
														<span className="text-sm font-medium text-gray-700">
															Dosis:
														</span>
														<p className="text-gray-900">
															{medication.dosage}
														</p>
													</div>
													<div>
														<span className="text-sm font-medium text-gray-700">
															Frecuencia:
														</span>
														<p className="text-gray-900">
															{medication.frequency}
														</p>
													</div>
													<div>
														<span className="text-sm font-medium text-gray-700">
															Duración:
														</span>
														<p className="text-gray-900">
															{medication.duration}
														</p>
													</div>
												</div>
												{medication.instructions && (
													<div className="mt-3">
														<span className="text-sm font-medium text-gray-700">
															Instrucciones:
														</span>
														<p className="text-gray-900">
															{medication.instructions}
														</p>
													</div>
												)}
											</div>
										))}
									</div>
								)}
							</div>
						)}

						{/* Vital Signs */}
						{selectedRecord.vitalSigns && (
							<div className="border border-gray-200 rounded-lg">
								<button
									type="button"
									onClick={() => toggleSection("vitals")}
									className="w-full px-4 py-3 flex items-center justify-between text-left bg-gray-50 hover:bg-gray-100 rounded-t-lg"
								>
									<div className="flex items-center">
										<Heart className="h-5 w-5 text-gray-600 mr-2" />
										<span className="font-medium text-gray-900">
											Signos vitales
										</span>
									</div>
									{expandedSections.vitals ? (
										<ChevronUp className="h-5 w-5 text-gray-400" />
									) : (
										<ChevronDown className="h-5 w-5 text-gray-400" />
									)}
								</button>

								{expandedSections.vitals && (
									<div className="p-4">
										<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
											{selectedRecord.vitalSigns.bloodPressure && (
												<div>
													<span className="text-sm font-medium text-gray-700">
														Presión arterial:
													</span>
													<p className="text-gray-900">
														{selectedRecord.vitalSigns.bloodPressure}
													</p>
												</div>
											)}
											{selectedRecord.vitalSigns.heartRate && (
												<div>
													<span className="text-sm font-medium text-gray-700">
														Frecuencia cardíaca:
													</span>
													<p className="text-gray-900">
														{selectedRecord.vitalSigns.heartRate}
													</p>
												</div>
											)}
											{selectedRecord.vitalSigns.temperature && (
												<div>
													<span className="text-sm font-medium text-gray-700">
														Temperatura:
													</span>
													<p className="text-gray-900">
														{selectedRecord.vitalSigns.temperature}
													</p>
												</div>
											)}
											{selectedRecord.vitalSigns.weight && (
												<div>
													<span className="text-sm font-medium text-gray-700">
														Peso:
													</span>
													<p className="text-gray-900">
														{selectedRecord.vitalSigns.weight}
													</p>
												</div>
											)}
											{selectedRecord.vitalSigns.height && (
												<div>
													<span className="text-sm font-medium text-gray-700">
														Altura:
													</span>
													<p className="text-gray-900">
														{selectedRecord.vitalSigns.height}
													</p>
												</div>
											)}
											{selectedRecord.vitalSigns.respiratoryRate && (
												<div>
													<span className="text-sm font-medium text-gray-700">
														Frecuencia respiratoria:
													</span>
													<p className="text-gray-900">
														{selectedRecord.vitalSigns.respiratoryRate}
													</p>
												</div>
											)}
										</div>
									</div>
								)}
							</div>
						)}

						{/* Medical History */}
						<div className="border border-gray-200 rounded-lg">
							<button
								type="button"
								onClick={() => toggleSection("history")}
								className="w-full px-4 py-3 flex items-center justify-between text-left bg-gray-50 hover:bg-gray-100 rounded-t-lg"
							>
								<div className="flex items-center">
									<AlertTriangle className="h-5 w-5 text-gray-600 mr-2" />
									<span className="font-medium text-gray-900">
										Historial médico
									</span>
								</div>
								{expandedSections.history ? (
									<ChevronUp className="h-5 w-5 text-gray-400" />
								) : (
									<ChevronDown className="h-5 w-5 text-gray-400" />
								)}
							</button>

							{expandedSections.history && (
								<div className="p-4 space-y-4">
									{selectedRecord.allergies &&
										selectedRecord.allergies.length > 0 && (
											<div>
												<h4 className="text-sm font-medium text-gray-700 mb-2">
													Alergias
												</h4>
												<div className="flex flex-wrap gap-2">
													{selectedRecord.allergies.map(
														(allergy, index) => (
															<span
																key={index}
																className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-red-100 text-red-800"
															>
																<AlertTriangle className="h-4 w-4 mr-1" />
																{allergy}
															</span>
														)
													)}
												</div>
											</div>
										)}
									{selectedRecord.familyHistory && (
										<div>
											<h4 className="text-sm font-medium text-gray-700 mb-2">
												Antecedentes familiares
											</h4>
											<p className="text-gray-900">
												{selectedRecord.familyHistory}
											</p>
										</div>
									)}
								</div>
							)}
						</div>

						{/* Notes */}
						{selectedRecord.notes && (
							<div>
								<h4 className="text-lg font-medium text-gray-900 mb-3">
									Notas del médico
								</h4>
								<div className="bg-gray-50 rounded-lg p-4">
									<p className="text-gray-700">{selectedRecord.notes}</p>
								</div>
							</div>
						)}

						{/* Follow-up */}
						{selectedRecord.followUpDate && (
							<div>
								<h4 className="text-lg font-medium text-gray-900 mb-3">
									Seguimiento
								</h4>
								<div className="bg-blue-50 rounded-lg p-4">
									<p className="text-blue-700">
										Próxima cita recomendada:{" "}
										{formatDate(selectedRecord.followUpDate)}
									</p>
								</div>
							</div>
						)}
					</div>
				</div>
			</div>
		);
	};

	return (
		<div className="p-6">
			<div className="mb-6">
				<h1 className="text-2xl font-semibold text-gray-900">Mis registros médicos</h1>
				<p className="text-gray-600">Consulte su historial médico completo</p>
			</div>

			{viewMode === "list" ? (
				<>
					{renderSearchAndFilters()}
					{renderRecordsList()}
				</>
			) : (
				renderRecordDetail()
			)}
		</div>
	);
};

export default MedicalRecordsPatient;
