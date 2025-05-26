import { useState, useEffect, useCallback } from "react";
import {
	User,
	FileText,
	Plus,
	Search,
	Calendar,
	Stethoscope,
	Pill,
	AlertTriangle,
	Eye,
	Edit,
	Download,
	Upload,
	X,
	Save,
	ChevronDown,
	ChevronUp,
} from "lucide-react";
import { useUser } from "../../context/UserContext";
import { MedicalRecord, PatientSummary, Medication } from "../../types/medicalRecord";
import {
	getMedicalRecordsByDoctor,
	getDoctorPatients,
	createMedicalRecord,
	searchMedicalRecords,
} from "../../services/medicalRecordService";

type ViewMode = "list" | "create" | "view" | "edit";

const MedicalRecordsDoctor = () => {
	const { user } = useUser();
	const [medicalRecords, setMedicalRecords] = useState<MedicalRecord[]>([]);
	const [filteredRecords, setFilteredRecords] = useState<MedicalRecord[]>([]);
	const [patients, setPatients] = useState<PatientSummary[]>([]);
	const [isLoading, setIsLoading] = useState(true);
	const [viewMode, setViewMode] = useState<ViewMode>("list");
	const [selectedRecord, setSelectedRecord] = useState<MedicalRecord | null>(null);
	const [selectedPatient, setSelectedPatient] = useState<PatientSummary | null>(null);

	// Search and filter states
	const [searchTerm, setSearchTerm] = useState("");
	const [dateFilter, setDateFilter] = useState({ from: "", to: "" });
	const [diagnosisFilter, setDiagnosisFilter] = useState("");

	// Form states for creating/editing records
	const [formData, setFormData] = useState<Partial<MedicalRecord>>({
		date: new Date().toISOString().split("T")[0],
		diagnosis: "",
		symptoms: "",
		treatment: "",
		medications: [],
		allergies: [],
		familyHistory: "",
		vitalSigns: {
			bloodPressure: "",
			heartRate: "",
			temperature: "",
			weight: "",
			height: "",
			respiratoryRate: "",
		},
		notes: "",
		attachments: [],
		status: "draft",
	});

	const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
		diagnosis: true,
		medications: false,
		vitals: false,
		history: false,
		attachments: false,
	});

	// Fetch data
	const fetchData = useCallback(async () => {
		if (!user?.id) return;

		try {
			setIsLoading(true);
			const [recordsData, patientsData] = await Promise.all([
				getMedicalRecordsByDoctor(user.id),
				getDoctorPatients(user.id),
			]);

			setMedicalRecords(recordsData);
			setFilteredRecords(recordsData);
			setPatients(patientsData);
		} catch (error) {
			console.error("Error fetching medical records data:", error);
		} finally {
			setIsLoading(false);
		}
	}, [user?.id]);

	useEffect(() => {
		fetchData();
	}, [fetchData]);

	// Apply filters
	const applyFilters = useCallback(async () => {
		if (!user?.id) return;

		try {
			const searchParams = {
				patientName: searchTerm,
				dateFrom: dateFilter.from,
				dateTo: dateFilter.to,
				diagnosis: diagnosisFilter,
			};

			const filtered = await searchMedicalRecords(user.id, searchParams);
			setFilteredRecords(filtered);
		} catch (error) {
			console.error("Error filtering records:", error);
			// Fallback to client-side filtering
			let filtered = medicalRecords;

			if (searchTerm) {
				filtered = filtered.filter(
					(record) =>
						record.patientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
						record.diagnosis.toLowerCase().includes(searchTerm.toLowerCase())
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

			if (diagnosisFilter) {
				filtered = filtered.filter((record) =>
					record.diagnosis.toLowerCase().includes(diagnosisFilter.toLowerCase())
				);
			}

			setFilteredRecords(filtered);
		}
	}, [user?.id, medicalRecords, searchTerm, dateFilter, diagnosisFilter]);

	useEffect(() => {
		applyFilters();
	}, [searchTerm, dateFilter, diagnosisFilter, applyFilters]);

	// Handle form changes
	const handleFormChange = (field: string, value: string | string[] | Record<string, string>) => {
		setFormData((prev) => ({
			...prev,
			[field]: value,
		}));
	};

	const handleVitalSignsChange = (field: string, value: string) => {
		setFormData((prev) => ({
			...prev,
			vitalSigns: {
				...prev.vitalSigns!,
				[field]: value,
			},
		}));
	};

	const handleMedicationChange = (index: number, field: string, value: string) => {
		const medications = [...(formData.medications || [])];
		medications[index] = { ...medications[index], [field]: value };
		setFormData((prev) => ({ ...prev, medications }));
	};

	const addMedication = () => {
		const newMedication: Medication = {
			id: Date.now().toString(),
			name: "",
			dosage: "",
			frequency: "",
			duration: "",
			instructions: "",
		};
		setFormData((prev) => ({
			...prev,
			medications: [...(prev.medications || []), newMedication],
		}));
	};

	const removeMedication = (index: number) => {
		const medications = [...(formData.medications || [])];
		medications.splice(index, 1);
		setFormData((prev) => ({ ...prev, medications }));
	};

	const handleAllergyChange = (allergies: string) => {
		setFormData((prev) => ({
			...prev,
			allergies: allergies
				.split(",")
				.map((a) => a.trim())
				.filter(Boolean),
		}));
	};

	// Save medical record
	const handleSaveRecord = async () => {
		if (!selectedPatient || !user?.id || !formData.diagnosis) {
			alert("Por favor complete los campos obligatorios: paciente y diagnóstico");
			return;
		}

		try {
			const recordData = {
				...formData,
				date: formData.date || new Date().toISOString().split("T")[0],
				status: formData.status || "completed",
			} as Omit<
				MedicalRecord,
				"id" | "patientId" | "doctorId" | "patientName" | "doctorName"
			>;

			await createMedicalRecord(selectedPatient.id, user.id, recordData);
			await fetchData();
			setViewMode("list");
			resetForm();
			alert("Registro médico guardado exitosamente");
		} catch (error) {
			console.error("Error saving medical record:", error);
			alert("Error al guardar el registro médico");
		}
	};

	const resetForm = () => {
		setFormData({
			date: new Date().toISOString().split("T")[0],
			diagnosis: "",
			symptoms: "",
			treatment: "",
			medications: [],
			allergies: [],
			familyHistory: "",
			vitalSigns: {
				bloodPressure: "",
				heartRate: "",
				temperature: "",
				weight: "",
				height: "",
				respiratoryRate: "",
			},
			notes: "",
			attachments: [],
			status: "draft",
		});
		setSelectedPatient(null);
	};

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

	// Render functions
	const renderSearchAndFilters = () => (
		<div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
			<h3 className="text-lg font-medium text-gray-900 mb-4">Buscar y filtrar registros</h3>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
				<div>
					<label className="block text-sm font-medium text-gray-700 mb-1">
						Buscar paciente o diagnóstico
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
					<label className="block text-sm font-medium text-gray-700 mb-1">
						Diagnóstico
					</label>
					<input
						type="text"
						value={diagnosisFilter}
						onChange={(e) => setDiagnosisFilter(e.target.value)}
						placeholder="Filtrar por diagnóstico"
						className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm"
					/>
				</div>
			</div>
		</div>
	);

	const renderRecordsList = () => (
		<div className="bg-white rounded-lg shadow-sm border border-gray-200">
			<div className="px-6 py-4 border-b border-gray-200">
				<div className="flex items-center justify-between">
					<h3 className="text-lg font-medium text-gray-900">
						Registros médicos ({filteredRecords.length})
					</h3>
					<button
						onClick={() => setViewMode("create")}
						className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-cyan-600 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
					>
						<Plus className="mr-2 h-4 w-4" />
						Nuevo registro
					</button>
				</div>
			</div>

			{isLoading ? (
				<div className="p-6">
					<div className="animate-pulse space-y-4">
						{[...Array(5)].map((_, i) => (
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
						Comience creando un nuevo registro médico para un paciente.
					</p>
					<div className="mt-6">
						<button
							onClick={() => setViewMode("create")}
							className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-cyan-600 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
						>
							<Plus className="mr-2 h-4 w-4" />
							Nuevo registro
						</button>
					</div>
				</div>
			) : (
				<div className="divide-y divide-gray-200">
					{filteredRecords.map((record) => (
						<div key={record.id} className="p-6 hover:bg-gray-50">
							<div className="flex items-center justify-between">
								<div className="flex items-start">
									<div className="p-2 bg-cyan-50 rounded-lg">
										<User className="h-8 w-8 text-cyan-700" />
									</div>
									<div className="ml-4">
										<h4 className="text-lg font-medium text-gray-900">
											{record.patientName}
										</h4>
										<p className="text-sm text-gray-500 mb-2">
											{record.diagnosis}
										</p>
										<div className="flex items-center text-sm text-gray-500 space-x-4">
											<div className="flex items-center">
												<Calendar className="h-4 w-4 mr-1" />
												<span>{formatDate(record.date)}</span>
											</div>
											<div className="flex items-center">
												<Stethoscope className="h-4 w-4 mr-1" />
												<span>Dr. {record.doctorName}</span>
											</div>
											<div className="flex items-center">
												<span
													className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
														record.status === "completed"
															? "bg-green-100 text-green-800"
															: record.status === "draft"
															? "bg-yellow-100 text-yellow-800"
															: "bg-blue-100 text-blue-800"
													}`}
												>
													{record.status === "completed"
														? "Completado"
														: record.status === "draft"
														? "Borrador"
														: "Requiere revisión"}
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
										className="p-2 text-gray-400 hover:text-gray-600"
									>
										<Eye className="h-5 w-5" />
									</button>
									<button
										onClick={() => {
											setSelectedRecord(record);
											setFormData(record);
											setViewMode("edit");
										}}
										className="p-2 text-gray-400 hover:text-gray-600"
									>
										<Edit className="h-5 w-5" />
									</button>
									<button className="p-2 text-gray-400 hover:text-gray-600">
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

	const renderCreateEditForm = () => (
		<div className="max-w-4xl mx-auto">
			<div className="bg-white rounded-lg shadow-sm border border-gray-200">
				<div className="px-6 py-4 border-b border-gray-200">
					<div className="flex items-center justify-between">
						<h3 className="text-lg font-medium text-gray-900">
							{viewMode === "create"
								? "Nuevo registro médico"
								: "Editar registro médico"}
						</h3>
						<button
							onClick={() => {
								setViewMode("list");
								resetForm();
							}}
							className="p-2 text-gray-400 hover:text-gray-600"
						>
							<X className="h-5 w-5" />
						</button>
					</div>
				</div>

				<div className="p-6 space-y-6">
					{/* Patient Selection */}
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
						<div>
							<label className="block text-sm font-medium text-gray-700 mb-1">
								Paciente *
							</label>
							<select
								value={selectedPatient?.id || ""}
								onChange={(e) => {
									const patient = patients.find((p) => p.id === e.target.value);
									setSelectedPatient(patient || null);
								}}
								className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm"
								required
							>
								<option value="">Seleccionar paciente</option>
								{patients.map((patient) => (
									<option key={patient.id} value={patient.id}>
										{patient.name}
									</option>
								))}
							</select>
						</div>

						<div>
							<label className="block text-sm font-medium text-gray-700 mb-1">
								Fecha de consulta *
							</label>
							<input
								type="date"
								value={formData.date || ""}
								onChange={(e) => handleFormChange("date", e.target.value)}
								className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm"
								required
							/>
						</div>
					</div>

					{/* Diagnosis Section */}
					<div className="border border-gray-200 rounded-lg">
						<button
							type="button"
							onClick={() => toggleSection("diagnosis")}
							className="w-full px-4 py-3 flex items-center justify-between text-left bg-gray-50 hover:bg-gray-100 rounded-t-lg"
						>
							<div className="flex items-center">
								<Stethoscope className="h-5 w-5 text-gray-600 mr-2" />
								<span className="font-medium text-gray-900">
									Diagnóstico y síntomas *
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
									<label className="block text-sm font-medium text-gray-700 mb-1">
										Diagnóstico principal *
									</label>
									<input
										type="text"
										value={formData.diagnosis || ""}
										onChange={(e) =>
											handleFormChange("diagnosis", e.target.value)
										}
										placeholder="Ingrese el diagnóstico principal"
										className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm"
										required
									/>
								</div>

								<div>
									<label className="block text-sm font-medium text-gray-700 mb-1">
										Síntomas
									</label>
									<textarea
										value={formData.symptoms || ""}
										onChange={(e) =>
											handleFormChange("symptoms", e.target.value)
										}
										placeholder="Describa los síntomas presentados por el paciente"
										rows={3}
										className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm"
									/>
								</div>

								<div>
									<label className="block text-sm font-medium text-gray-700 mb-1">
										Tratamiento
									</label>
									<textarea
										value={formData.treatment || ""}
										onChange={(e) =>
											handleFormChange("treatment", e.target.value)
										}
										placeholder="Describa el tratamiento recomendado"
										rows={3}
										className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm"
									/>
								</div>
							</div>
						)}
					</div>

					{/* Medications Section */}
					<div className="border border-gray-200 rounded-lg">
						<button
							type="button"
							onClick={() => toggleSection("medications")}
							className="w-full px-4 py-3 flex items-center justify-between text-left bg-gray-50 hover:bg-gray-100 rounded-t-lg"
						>
							<div className="flex items-center">
								<Pill className="h-5 w-5 text-gray-600 mr-2" />
								<span className="font-medium text-gray-900">
									Medicamentos ({(formData.medications || []).length})
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
								{(formData.medications || []).map((medication, index) => (
									<div
										key={index}
										className="border border-gray-200 rounded-lg p-4"
									>
										<div className="flex items-center justify-between mb-3">
											<h4 className="font-medium text-gray-900">
												Medicamento {index + 1}
											</h4>
											<button
												type="button"
												onClick={() => removeMedication(index)}
												className="text-red-600 hover:text-red-800"
											>
												<X className="h-4 w-4" />
											</button>
										</div>

										<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
											<div>
												<label className="block text-sm font-medium text-gray-700 mb-1">
													Nombre del medicamento
												</label>
												<input
													type="text"
													value={medication.name}
													onChange={(e) =>
														handleMedicationChange(
															index,
															"name",
															e.target.value
														)
													}
													placeholder="Ej: Ibuprofeno"
													className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm"
												/>
											</div>

											<div>
												<label className="block text-sm font-medium text-gray-700 mb-1">
													Dosis
												</label>
												<input
													type="text"
													value={medication.dosage}
													onChange={(e) =>
														handleMedicationChange(
															index,
															"dosage",
															e.target.value
														)
													}
													placeholder="Ej: 400mg"
													className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm"
												/>
											</div>

											<div>
												<label className="block text-sm font-medium text-gray-700 mb-1">
													Frecuencia
												</label>
												<input
													type="text"
													value={medication.frequency}
													onChange={(e) =>
														handleMedicationChange(
															index,
															"frequency",
															e.target.value
														)
													}
													placeholder="Ej: Cada 8 horas"
													className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm"
												/>
											</div>

											<div>
												<label className="block text-sm font-medium text-gray-700 mb-1">
													Duración
												</label>
												<input
													type="text"
													value={medication.duration}
													onChange={(e) =>
														handleMedicationChange(
															index,
															"duration",
															e.target.value
														)
													}
													placeholder="Ej: 7 días"
													className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm"
												/>
											</div>
										</div>

										<div className="mt-4">
											<label className="block text-sm font-medium text-gray-700 mb-1">
												Instrucciones especiales
											</label>
											<textarea
												value={medication.instructions}
												onChange={(e) =>
													handleMedicationChange(
														index,
														"instructions",
														e.target.value
													)
												}
												placeholder="Ej: Tomar con alimentos"
												rows={2}
												className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm"
											/>
										</div>
									</div>
								))}

								<button
									type="button"
									onClick={addMedication}
									className="w-full px-4 py-2 border border-dashed border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
								>
									<Plus className="h-4 w-4 inline mr-2" />
									Agregar medicamento
								</button>
							</div>
						)}
					</div>

					{/* Vital Signs Section */}
					<div className="border border-gray-200 rounded-lg">
						<button
							type="button"
							onClick={() => toggleSection("vitals")}
							className="w-full px-4 py-3 flex items-center justify-between text-left bg-gray-50 hover:bg-gray-100 rounded-t-lg"
						>
							<div className="flex items-center">
								<Stethoscope className="h-5 w-5 text-gray-600 mr-2" />
								<span className="font-medium text-gray-900">Signos vitales</span>
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
									<div>
										<label className="block text-sm font-medium text-gray-700 mb-1">
											Presión arterial
										</label>
										<input
											type="text"
											value={formData.vitalSigns?.bloodPressure || ""}
											onChange={(e) =>
												handleVitalSignsChange(
													"bloodPressure",
													e.target.value
												)
											}
											placeholder="Ej: 120/80 mmHg"
											className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm"
										/>
									</div>

									<div>
										<label className="block text-sm font-medium text-gray-700 mb-1">
											Frecuencia cardíaca
										</label>
										<input
											type="text"
											value={formData.vitalSigns?.heartRate || ""}
											onChange={(e) =>
												handleVitalSignsChange("heartRate", e.target.value)
											}
											placeholder="Ej: 72 bpm"
											className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm"
										/>
									</div>

									<div>
										<label className="block text-sm font-medium text-gray-700 mb-1">
											Temperatura
										</label>
										<input
											type="text"
											value={formData.vitalSigns?.temperature || ""}
											onChange={(e) =>
												handleVitalSignsChange(
													"temperature",
													e.target.value
												)
											}
											placeholder="Ej: 36.5°C"
											className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm"
										/>
									</div>

									<div>
										<label className="block text-sm font-medium text-gray-700 mb-1">
											Peso
										</label>
										<input
											type="text"
											value={formData.vitalSigns?.weight || ""}
											onChange={(e) =>
												handleVitalSignsChange("weight", e.target.value)
											}
											placeholder="Ej: 70 kg"
											className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm"
										/>
									</div>

									<div>
										<label className="block text-sm font-medium text-gray-700 mb-1">
											Altura
										</label>
										<input
											type="text"
											value={formData.vitalSigns?.height || ""}
											onChange={(e) =>
												handleVitalSignsChange("height", e.target.value)
											}
											placeholder="Ej: 1.75 m"
											className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm"
										/>
									</div>

									<div>
										<label className="block text-sm font-medium text-gray-700 mb-1">
											Frecuencia respiratoria
										</label>
										<input
											type="text"
											value={formData.vitalSigns?.respiratoryRate || ""}
											onChange={(e) =>
												handleVitalSignsChange(
													"respiratoryRate",
													e.target.value
												)
											}
											placeholder="Ej: 16 rpm"
											className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm"
										/>
									</div>
								</div>
							</div>
						)}
					</div>

					{/* Medical History Section */}
					<div className="border border-gray-200 rounded-lg">
						<button
							type="button"
							onClick={() => toggleSection("history")}
							className="w-full px-4 py-3 flex items-center justify-between text-left bg-gray-50 hover:bg-gray-100 rounded-t-lg"
						>
							<div className="flex items-center">
								<AlertTriangle className="h-5 w-5 text-gray-600 mr-2" />
								<span className="font-medium text-gray-900">
									Historial y alergias
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
								<div>
									<label className="block text-sm font-medium text-gray-700 mb-1">
										Alergias conocidas
									</label>
									<input
										type="text"
										value={(formData.allergies || []).join(", ")}
										onChange={(e) => handleAllergyChange(e.target.value)}
										placeholder="Ej: Penicilina, Mariscos (separar con comas)"
										className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm"
									/>
								</div>

								<div>
									<label className="block text-sm font-medium text-gray-700 mb-1">
										Antecedentes familiares
									</label>
									<textarea
										value={formData.familyHistory || ""}
										onChange={(e) =>
											handleFormChange("familyHistory", e.target.value)
										}
										placeholder="Antecedentes médicos familiares relevantes"
										rows={3}
										className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm"
									/>
								</div>
							</div>
						)}
					</div>

					{/* Attachments Section */}
					<div className="border border-gray-200 rounded-lg">
						<button
							type="button"
							onClick={() => toggleSection("attachments")}
							className="w-full px-4 py-3 flex items-center justify-between text-left bg-gray-50 hover:bg-gray-100 rounded-t-lg"
						>
							<div className="flex items-center">
								<Upload className="h-5 w-5 text-gray-600 mr-2" />
								<span className="font-medium text-gray-900">
									Archivos adjuntos ({(formData.attachments || []).length})
								</span>
							</div>
							{expandedSections.attachments ? (
								<ChevronUp className="h-5 w-5 text-gray-400" />
							) : (
								<ChevronDown className="h-5 w-5 text-gray-400" />
							)}
						</button>

						{expandedSections.attachments && (
							<div className="p-4">
								<div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
									<Upload className="mx-auto h-12 w-12 text-gray-400" />
									<div className="mt-4">
										<label htmlFor="file-upload" className="cursor-pointer">
											<span className="mt-2 block text-sm font-medium text-gray-900">
												Arrastra archivos aquí o haz clic para seleccionar
											</span>
											<span className="mt-1 block text-xs text-gray-500">
												Soporta PDF, JPG, PNG hasta 10MB
											</span>
										</label>
										<input
											id="file-upload"
											name="file-upload"
											type="file"
											className="sr-only"
										/>
									</div>
								</div>
							</div>
						)}
					</div>

					{/* Notes */}
					<div>
						<label className="block text-sm font-medium text-gray-700 mb-1">
							Notas adicionales
						</label>
						<textarea
							value={formData.notes || ""}
							onChange={(e) => handleFormChange("notes", e.target.value)}
							placeholder="Observaciones adicionales sobre la consulta"
							rows={4}
							className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm"
						/>
					</div>

					{/* Status and Follow-up */}
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
						<div>
							<label className="block text-sm font-medium text-gray-700 mb-1">
								Estado del registro
							</label>
							<select
								value={formData.status || "draft"}
								onChange={(e) => handleFormChange("status", e.target.value)}
								className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm"
							>
								<option value="draft">Borrador</option>
								<option value="completed">Completado</option>
								<option value="requires_review">Requiere revisión</option>
							</select>
						</div>

						<div>
							<label className="block text-sm font-medium text-gray-700 mb-1">
								Fecha de seguimiento
							</label>
							<input
								type="date"
								value={formData.followUpDate || ""}
								onChange={(e) => handleFormChange("followUpDate", e.target.value)}
								className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm"
							/>
						</div>
					</div>
				</div>

				{/* Save/Cancel buttons */}
				<div className="px-6 py-4 border-t border-gray-200 flex items-center justify-end space-x-3">
					<button
						onClick={() => {
							setViewMode("list");
							resetForm();
						}}
						className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
					>
						Cancelar
					</button>
					<button
						onClick={handleSaveRecord}
						className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-cyan-600 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
					>
						<Save className="mr-2 h-4 w-4" />
						Guardar registro
					</button>
				</div>
			</div>
		</div>
	);

	const renderViewRecord = () => {
		if (!selectedRecord) return null;

		return (
			<div className="max-w-4xl mx-auto">
				<div className="bg-white rounded-lg shadow-sm border border-gray-200">
					<div className="px-6 py-4 border-b border-gray-200">
						<div className="flex items-center justify-between">
							<h3 className="text-lg font-medium text-gray-900">Registro médico</h3>
							<div className="flex items-center space-x-2">
								<button
									onClick={() => {
										setFormData(selectedRecord);
										setViewMode("edit");
									}}
									className="p-2 text-gray-400 hover:text-gray-600"
								>
									<Edit className="h-5 w-5" />
								</button>
								<button className="p-2 text-gray-400 hover:text-gray-600">
									<Download className="h-5 w-5" />
								</button>
								<button
									onClick={() => setViewMode("list")}
									className="p-2 text-gray-400 hover:text-gray-600"
								>
									<X className="h-5 w-5" />
								</button>
							</div>
						</div>
					</div>

					<div className="p-6 space-y-6">
						{/* Patient and Date Info */}
						<div className="bg-gray-50 rounded-lg p-4">
							<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
								<div>
									<div className="flex items-center">
										<User className="h-5 w-5 text-gray-400 mr-2" />
										<span className="text-sm font-medium text-gray-700">
											Paciente
										</span>
									</div>
									<p className="mt-1 text-sm text-gray-900">
										{selectedRecord.patientName}
									</p>
								</div>
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
										<Stethoscope className="h-5 w-5 text-gray-400 mr-2" />
										<span className="text-sm font-medium text-gray-700">
											Doctor
										</span>
									</div>
									<p className="mt-1 text-sm text-gray-900">
										Dr. {selectedRecord.doctorName}
									</p>
								</div>
							</div>
						</div>

						{/* Diagnosis */}
						<div>
							<h4 className="text-lg font-medium text-gray-900 mb-3">Diagnóstico</h4>
							<p className="text-gray-700">{selectedRecord.diagnosis}</p>
						</div>

						{/* Symptoms */}
						{selectedRecord.symptoms && (
							<div>
								<h4 className="text-lg font-medium text-gray-900 mb-3">Síntomas</h4>
								<p className="text-gray-700">{selectedRecord.symptoms}</p>
							</div>
						)}

						{/* Treatment */}
						{selectedRecord.treatment && (
							<div>
								<h4 className="text-lg font-medium text-gray-900 mb-3">
									Tratamiento
								</h4>
								<p className="text-gray-700">{selectedRecord.treatment}</p>
							</div>
						)}

						{/* Medications */}
						{selectedRecord.medications && selectedRecord.medications.length > 0 && (
							<div>
								<h4 className="text-lg font-medium text-gray-900 mb-3">
									Medicamentos
								</h4>
								<div className="space-y-3">
									{selectedRecord.medications.map((medication, index) => (
										<div
											key={index}
											className="border border-gray-200 rounded-lg p-4"
										>
											<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
												<div>
													<span className="text-sm font-medium text-gray-700">
														Medicamento:
													</span>
													<p className="text-gray-900">
														{medication.name}
													</p>
												</div>
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
							</div>
						)}

						{/* Vital Signs */}
						{selectedRecord.vitalSigns && (
							<div>
								<h4 className="text-lg font-medium text-gray-900 mb-3">
									Signos vitales
								</h4>
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

						{/* Allergies */}
						{selectedRecord.allergies && selectedRecord.allergies.length > 0 && (
							<div>
								<h4 className="text-lg font-medium text-gray-900 mb-3">Alergias</h4>
								<div className="flex flex-wrap gap-2">
									{selectedRecord.allergies.map((allergy, index) => (
										<span
											key={index}
											className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-red-100 text-red-800"
										>
											<AlertTriangle className="h-4 w-4 mr-1" />
											{allergy}
										</span>
									))}
								</div>
							</div>
						)}

						{/* Family History */}
						{selectedRecord.familyHistory && (
							<div>
								<h4 className="text-lg font-medium text-gray-900 mb-3">
									Antecedentes familiares
								</h4>
								<p className="text-gray-700">{selectedRecord.familyHistory}</p>
							</div>
						)}

						{/* Notes */}
						{selectedRecord.notes && (
							<div>
								<h4 className="text-lg font-medium text-gray-900 mb-3">
									Notas adicionales
								</h4>
								<p className="text-gray-700">{selectedRecord.notes}</p>
							</div>
						)}

						{/* Follow-up */}
						{selectedRecord.followUpDate && (
							<div>
								<h4 className="text-lg font-medium text-gray-900 mb-3">
									Seguimiento
								</h4>
								<p className="text-gray-700">
									Próxima cita programada:{" "}
									{formatDate(selectedRecord.followUpDate)}
								</p>
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
				<h1 className="text-2xl font-semibold text-gray-900">
					Registros Médicos Electrónicos
				</h1>
				<p className="text-gray-600">Gestione los registros médicos de sus pacientes</p>
			</div>

			{viewMode === "list" && (
				<>
					{renderSearchAndFilters()}
					{renderRecordsList()}
				</>
			)}

			{(viewMode === "create" || viewMode === "edit") && renderCreateEditForm()}

			{viewMode === "view" && renderViewRecord()}
		</div>
	);
};

export default MedicalRecordsDoctor;
