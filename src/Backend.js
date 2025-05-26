// backend/index.js with Prisma - Enhanced with UUIDs, bcrypt, and comprehensive features

import express from "express";
import { PrismaClient } from "./generated/prisma/index.js";
import bodyParser from "body-parser";
import cors from "cors";
import bcrypt from "bcryptjs";

const app = express();
const port = 5000;

const prisma = new PrismaClient();

// Priority calculation based on symptoms
const calculatePriority = (symptoms) => {
	if (!symptoms) return "NORMAL";

	const urgentKeywords = [
		"dolor de pecho",
		"dificultad para respirar",
		"sangrado",
		"convulsiones",
		"pérdida de conciencia",
	];
	const highKeywords = ["fiebre alta", "dolor severo", "vómitos persistentes", "mareos intensos"];

	const symptomText = symptoms.toLowerCase();

	if (urgentKeywords.some((keyword) => symptomText.includes(keyword))) {
		return "URGENTE";
	}

	if (highKeywords.some((keyword) => symptomText.includes(keyword))) {
		return "ALTA";
	}

	return "NORMAL";
};

// Seed specialities on startup if none exist
(async function initializeEspecialidades() {
	try {
		const count = await prisma.especialidad.count();
		if (count === 0) {
			const nombres = [
				"Cardiología",
				"Dermatología",
				"Medicina Familiar",
				"Neurología",
				"Pediatría",
				"Psiquiatría",
				"Traumatología",
				"Ginecología",
				"Oftalmología",
				"Endocrinología",
			];
			await Promise.all(
				nombres.map((nombre) => prisma.especialidad.create({ data: { nombre } }))
			);
			console.log("Default especialidades seeded");
		}
	} catch (error) {
		console.error("Error seeding especialidades:", error);
	}
})();

// Middleware
app.use(
	cors({
		origin: "*", // Allow all origins for testing
		credentials: true,
	})
);
app.use(bodyParser.json());

// Logging middleware
app.use((req, res, next) => {
	console.log(`${new Date().toISOString()} - ${req.method} ${req.path}`);
	console.log("Headers:", req.headers);
	if (req.body && Object.keys(req.body).length > 0) {
		console.log("Body:", req.body);
	}
	next();
});

// Error handling middleware
app.use((err, req, res, next) => {
	console.error("Error occurred:", err);
	res.status(500).json({ error: "Internal server error", message: err.message });
});

// ----------- ESPECIALIDADES -----------
app.get("/api/especialidades", async (req, res) => {
	try {
		const especialidades = await prisma.especialidad.findMany();
		res.json(especialidades);
	} catch (error) {
		console.error("Error fetching especialidades:", error);
		res.status(500).json({ error: "Error del servidor", message: error.message });
	}
});

// ----------- AUTENTICACIÓN -----------
app.post("/api/auth/login", async (req, res) => {
	console.log("Login attempt:", {
		email: req.body.email,
		passwordProvided: !!req.body.contraseña,
	});

	const { email, contraseña } = req.body;

	if (!email || !contraseña) {
		console.log("Login failed: Missing email or password");
		return res.status(400).json({ error: "Email y contraseña son requeridos" });
	}

	try {
		const usuario = await prisma.usuario.findUnique({
			where: { email: email.toLowerCase() },
		});

		console.log("User found:", !!usuario);

		if (usuario) {
			// Compare with hashed password
			const passwordMatch = await bcrypt.compare(contraseña, usuario.contraseña);
			console.log("Password match:", passwordMatch);

			if (passwordMatch) {
				// Remove password from response
				const { contraseña: _, ...usuarioSinPassword } = usuario;
				console.log("Login successful for user:", usuario.email);
				res.json(usuarioSinPassword);
			} else {
				console.log("Login failed: Invalid credentials");
				res.status(401).json({ error: "Credenciales inválidas" });
			}
		} else {
			console.log("Login failed: User not found");
			res.status(401).json({ error: "Credenciales inválidas" });
		}
	} catch (error) {
		console.error("Login error:", error);
		res.status(500).json({ error: "Error del servidor", message: error.message });
	}
});

app.post("/api/auth/register", async (req, res) => {
	console.log("\n=== NEW REGISTRATION ATTEMPT ===");
	console.log("Raw request body:", req.body);
	console.log("Request headers:", req.headers);

	console.log("Registration attempt:", {
		nombre: req.body.nombre,
		email: req.body.email,
		rol: req.body.rol,
		hasPassword: !!req.body.contraseña,
		especialidadId: req.body.especialidadId,
		allFields: Object.keys(req.body),
	});

	const { nombre, email, contraseña, rol, fechaNacimiento, telefono, especialidadId } = req.body;

	console.log("Extracted fields:", {
		nombre,
		email,
		rol,
		hasPassword: !!contraseña,
		especialidadId,
	});

	if (!nombre || !email || !contraseña || !rol) {
		console.log("Registration failed: Missing required fields");
		console.log("Missing fields analysis:", {
			nombre: !!nombre,
			email: !!email,
			contraseña: !!contraseña,
			rol: !!rol,
		});
		return res.status(400).json({ error: "Todos los campos requeridos deben ser completados" });
	}

	// Validate specialty for doctors
	if (rol === "doctor" && !especialidadId) {
		console.log("Registration failed: Doctor role requires specialty");
		return res.status(400).json({ error: "Los doctores deben seleccionar una especialidad" });
	}

	try {
		// Check if user already exists
		const existingUser = await prisma.usuario.findUnique({
			where: { email: email.toLowerCase() },
		});

		if (existingUser) {
			return res.status(400).json({ error: "El email ya está registrado" });
		}

		// Hash password
		const saltRounds = 10;
		const hashedPassword = await bcrypt.hash(contraseña, saltRounds);

		console.log("Creating new user...");
		const usuario = await prisma.usuario.create({
			data: {
				nombre,
				email: email.toLowerCase(),
				contraseña: hashedPassword,
				rol: rol || "patient",
				fechaNacimiento: fechaNacimiento ? new Date(fechaNacimiento) : null,
				telefono,
			},
		});

		console.log("User created successfully:", {
			id: usuario.id,
			email: usuario.email,
			rol: usuario.rol,
		});

		// If the user is a doctor, create the Medico record
		if (rol === "doctor" && especialidadId) {
			console.log("Creating doctor record with specialty...");
			try {
				const medico = await prisma.medico.create({
					data: {
						usuarioId: usuario.id,
						especialidadId: especialidadId, // Remove parseInt since UUID
					},
					include: {
						especialidad: true,
					},
				});
				console.log("Doctor record created:", medico);
			} catch (medicoError) {
				console.error("Error creating doctor record:", medicoError);
				// Delete the user if doctor creation fails
				await prisma.usuario.delete({ where: { id: usuario.id } });
				return res.status(500).json({ error: "Error al crear el registro de doctor" });
			}
		}

		// Remove password from response
		const { contraseña: _, ...usuarioSinPassword } = usuario;
		res.status(201).json(usuarioSinPassword);
	} catch (error) {
		console.error("Registration error:", error);
		res.status(500).json({ error: "Error del servidor", message: error.message });
	}
});

// ----------- PACIENTES -----------
app.get("/api/patients/:id/appointments", async (req, res) => {
	try {
		const citas = await prisma.cita.findMany({
			where: { pacienteId: req.params.id }, // No parseInt needed for UUID
			include: {
				medico: {
					include: {
						usuario: true,
						especialidad: true,
					},
				},
			},
			orderBy: {
				fecha: "desc",
			},
		});
		res.json(citas);
	} catch (error) {
		console.error("Error fetching patient appointments:", error);
		res.status(500).json({ error: "Error del servidor", message: error.message });
	}
});

app.post("/api/patients/:id/appointments", async (req, res) => {
	console.log("=== CREATE APPOINTMENT REQUEST ===");
	console.log("Patient ID:", req.params.id);
	console.log("Request body:", req.body);

	const { fecha, hora, medico_id, notes, type, sintomas } = req.body;
	const pacienteId = req.params.id; // UUID
	const medicoId = medico_id; // UUID

	console.log("Parsed data:", {
		fecha,
		hora,
		medicoId,
		pacienteId,
		notes,
		type,
		sintomas,
	});

	// Calculate priority based on symptoms
	const prioridad = calculatePriority(sintomas);

	try {
		const cita = await prisma.cita.create({
			data: {
				fecha: new Date(fecha),
				hora: new Date(hora),
				pacienteId,
				medicoId,
				notas: notes,
				tipo: type || "CONSULTA",
				sintomas,
				prioridad,
				estado: "PROGRAMADA",
			},
			include: {
				paciente: true,
				medico: {
					include: {
						usuario: true,
						especialidad: true,
					},
				},
			},
		});
		console.log("=== APPOINTMENT CREATED SUCCESSFULLY ===");
		console.log("Created appointment:", cita);
		res.json(cita);
	} catch (error) {
		console.error("=== DATABASE ERROR ===");
		console.error("Error details:", error);
		res.status(500).json({ error: "Error del servidor", message: error.message });
	}
});

app.get("/api/patients/:id/medical-history", async (req, res) => {
	try {
		const historial = await prisma.historiaClinica.findMany({
			where: { pacienteId: req.params.id },
			include: {
				medico: {
					include: {
						usuario: true,
						especialidad: true,
					},
				},
			},
			orderBy: {
				fecha: "desc",
			},
		});
		res.json(historial);
	} catch (error) {
		console.error("Error fetching medical history:", error);
		res.status(500).json({ error: "Error del servidor", message: error.message });
	}
});

// Enhanced medical records endpoints
app.post("/api/patients/:patientId/medical-records", async (req, res) => {
	const pacienteId = req.params.patientId;
	const {
		medico_id,
		fecha,
		descripcion,
		diagnostico,
		sintomas,
		tratamiento,
		medicamentos,
		alergias,
		signosVitales,
	} = req.body;

	try {
		const historia = await prisma.historiaClinica.create({
			data: {
				pacienteId,
				medicoId: medico_id,
				fecha: new Date(fecha),
				descripcion,
				diagnostico,
				sintomas,
				tratamiento,
				medicamentos: medicamentos ? JSON.stringify(medicamentos) : null,
				alergias: alergias ? JSON.stringify(alergias) : null,
				signosVitales: signosVitales ? JSON.stringify(signosVitales) : null,
			},
			include: {
				medico: {
					include: {
						usuario: true,
						especialidad: true,
					},
				},
			},
		});
		res.json(historia);
	} catch (error) {
		console.error("Error creating medical record:", error);
		res.status(500).json({ error: "Error del servidor", message: error.message });
	}
});

app.put("/api/medical-records/:id", async (req, res) => {
	const { id } = req.params;
	const {
		descripcion,
		diagnostico,
		sintomas,
		tratamiento,
		medicamentos,
		alergias,
		signosVitales,
	} = req.body;

	try {
		const historia = await prisma.historiaClinica.update({
			where: { id },
			data: {
				descripcion,
				diagnostico,
				sintomas,
				tratamiento,
				medicamentos: medicamentos ? JSON.stringify(medicamentos) : null,
				alergias: alergias ? JSON.stringify(alergias) : null,
				signosVitales: signosVitales ? JSON.stringify(signosVitales) : null,
			},
			include: {
				medico: {
					include: {
						usuario: true,
						especialidad: true,
					},
				},
			},
		});
		res.json(historia);
	} catch (error) {
		console.error("Error updating medical record:", error);
		res.status(500).json({ error: "Error del servidor", message: error.message });
	}
});

app.put("/api/patients/:id", async (req, res) => {
	const id = req.params.id;
	const { nombre, email, contraseña, telefono, fechaNacimiento } = req.body;

	try {
		const updateData = { nombre, email, telefono };

		// If password is provided, hash it
		if (contraseña) {
			const saltRounds = 10;
			updateData.contraseña = await bcrypt.hash(contraseña, saltRounds);
		}

		if (fechaNacimiento) {
			updateData.fechaNacimiento = new Date(fechaNacimiento);
		}

		const usuario = await prisma.usuario.update({
			where: { id },
			data: updateData,
		});

		// Remove password from response
		const { contraseña: _, ...usuarioSinPassword } = usuario;
		res.json(usuarioSinPassword);
	} catch (error) {
		console.error("Error updating patient:", error);
		res.status(500).json({ error: "Error del servidor", message: error.message });
	}
});

app.get("/api/doctors", async (req, res) => {
	try {
		const doctores = await prisma.medico.findMany({
			include: {
				usuario: true,
				especialidad: true,
			},
		});
		res.json(doctores);
	} catch (error) {
		console.error("Error fetching doctors:", error);
		res.status(500).json({ error: "Error del servidor", message: error.message });
	}
});

// ----------- DOCTORES -----------
app.get("/api/doctors/:id/appointments", async (req, res) => {
	try {
		const citas = await prisma.cita.findMany({
			where: { medicoId: req.params.id },
			include: {
				paciente: true,
			},
			orderBy: [{ fecha: "asc" }, { hora: "asc" }],
		});
		res.json(citas);
	} catch (error) {
		console.error("Error fetching doctor appointments:", error);
		res.status(500).json({ error: "Error del servidor", message: error.message });
	}
});

app.get("/api/doctors/:id/patients", async (req, res) => {
	try {
		const citas = await prisma.cita.findMany({
			where: { medicoId: req.params.id },
			include: { paciente: true },
			distinct: ["pacienteId"],
		});
		const pacientes = citas.map((c) => c.paciente);
		res.json(pacientes);
	} catch (error) {
		console.error("Error fetching doctor patients:", error);
		res.status(500).json({ error: "Error del servidor", message: error.message });
	}
});

app.put("/api/appointments/:appointmentId", async (req, res) => {
	const id = req.params.appointmentId;
	const { fecha, hora, estado, notas, tipo, prioridad } = req.body;

	try {
		const updateData = {};
		if (fecha) updateData.fecha = new Date(fecha);
		if (hora) updateData.hora = new Date(hora);
		if (estado) updateData.estado = estado;
		if (notas) updateData.notas = notas;
		if (tipo) updateData.tipo = tipo;
		if (prioridad) updateData.prioridad = prioridad;

		const cita = await prisma.cita.update({
			where: { id },
			data: updateData,
			include: {
				paciente: true,
				medico: {
					include: {
						usuario: true,
						especialidad: true,
					},
				},
			},
		});
		res.json(cita);
	} catch (error) {
		console.error("Error updating appointment:", error);
		res.status(500).json({ error: "Error del servidor", message: error.message });
	}
});

// Get all appointments (admin only)
app.get("/api/appointments", async (req, res) => {
	try {
		const { estado, fecha, prioridad } = req.query;

		const whereClause = {};
		if (estado) whereClause.estado = estado;
		if (fecha) whereClause.fecha = new Date(fecha);
		if (prioridad) whereClause.prioridad = prioridad;

		const citas = await prisma.cita.findMany({
			where: whereClause,
			include: {
				paciente: true,
				medico: {
					include: {
						usuario: true,
						especialidad: true,
					},
				},
			},
			orderBy: [{ prioridad: "desc" }, { fecha: "asc" }, { hora: "asc" }],
		});
		res.json(citas);
	} catch (error) {
		console.error("Error fetching all appointments:", error);
		res.status(500).json({ error: "Error del servidor", message: error.message });
	}
});

// Delete/Cancel appointment
app.delete("/api/appointments/:appointmentId", async (req, res) => {
	const id = req.params.appointmentId;
	try {
		await prisma.cita.delete({ where: { id } });
		res.json({ success: true, message: "Appointment deleted successfully" });
	} catch (error) {
		console.error("Error deleting appointment:", error);
		res.status(500).json({ error: "Error del servidor", message: error.message });
	}
});

app.get("/api/patients/:patientId", async (req, res) => {
	try {
		const paciente = await prisma.usuario.findUnique({
			where: { id: req.params.patientId },
		});

		if (!paciente) {
			return res.status(404).json({ error: "Paciente no encontrado" });
		}

		// Remove password from response
		const { contraseña: _, ...pacienteSinPassword } = paciente;
		res.json(pacienteSinPassword);
	} catch (error) {
		console.error("Error fetching patient:", error);
		res.status(500).json({ error: "Error del servidor", message: error.message });
	}
});

// ----------- ADMINISTRADOR -----------
app.get("/api/users", async (req, res) => {
	try {
		const usuarios = await prisma.usuario.findMany({
			include: {
				medico: {
					include: {
						especialidad: true,
					},
				},
			},
		});
		// Remove passwords from response
		const usuariosSinPassword = usuarios.map((usuario) => {
			const { contraseña, ...usuarioSinPassword } = usuario;
			return usuarioSinPassword;
		});
		res.json(usuariosSinPassword);
	} catch (error) {
		console.error("Error fetching users:", error);
		res.status(500).json({ error: "Error del servidor", message: error.message });
	}
});

app.get("/api/users/:id", async (req, res) => {
	try {
		const usuario = await prisma.usuario.findUnique({
			where: { id: req.params.id }, // No parseInt needed for UUID
			include: {
				medico: {
					include: {
						especialidad: true,
					},
				},
			},
		});

		if (!usuario) {
			return res.status(404).json({ error: "Usuario no encontrado" });
		}

		// Remove password from response
		const { contraseña, ...usuarioSinPassword } = usuario;
		res.json(usuarioSinPassword);
	} catch (error) {
		console.error("Error fetching user:", error);
		res.status(500).json({ error: "Error del servidor", message: error.message });
	}
});

app.post("/api/users", async (req, res) => {
	const { nombre, email, contraseña, rol, telefono, fechaNacimiento, especialidadId } = req.body;

	if (!nombre || !email || !contraseña || !rol) {
		return res.status(400).json({ error: "Todos los campos requeridos deben ser completados" });
	}

	try {
		// Check if user already exists
		const existingUser = await prisma.usuario.findUnique({
			where: { email: email.toLowerCase() },
		});

		if (existingUser) {
			return res.status(400).json({ error: "El email ya está registrado" });
		}

		// Hash password
		const saltRounds = 10;
		const hashedPassword = await bcrypt.hash(contraseña, saltRounds);

		const usuario = await prisma.usuario.create({
			data: {
				nombre,
				email: email.toLowerCase(),
				contraseña: hashedPassword,
				rol,
				telefono,
				fechaNacimiento: fechaNacimiento ? new Date(fechaNacimiento) : null,
			},
		});

		// If the user is a doctor, create the Medico record
		if (rol === "doctor" && especialidadId) {
			await prisma.medico.create({
				data: {
					usuarioId: usuario.id,
					especialidadId: especialidadId,
				},
			});
		}

		// Remove password from response
		const { contraseña: _, ...usuarioSinPassword } = usuario;
		res.json(usuarioSinPassword);
	} catch (error) {
		console.error("Error creating user:", error);
		res.status(500).json({ error: "Error del servidor", message: error.message });
	}
});

app.put("/api/users/:id", async (req, res) => {
	const id = req.params.id; // UUID string
	const { nombre, email, contraseña, rol, telefono, fechaNacimiento } = req.body;

	try {
		const updateData = { nombre, email: email?.toLowerCase(), rol, telefono };

		// If password is provided, hash it
		if (contraseña) {
			const saltRounds = 10;
			updateData.contraseña = await bcrypt.hash(contraseña, saltRounds);
		}

		if (fechaNacimiento) {
			updateData.fechaNacimiento = new Date(fechaNacimiento);
		}

		const usuario = await prisma.usuario.update({
			where: { id },
			data: updateData,
		});

		// Remove password from response
		const { contraseña: _, ...usuarioSinPassword } = usuario;
		res.json(usuarioSinPassword);
	} catch (error) {
		console.error("Error updating user:", error);
		res.status(500).json({ error: "Error del servidor", message: error.message });
	}
});

app.delete("/api/users/:id", async (req, res) => {
	const id = req.params.id; // UUID string
	try {
		// First delete related records if any
		await prisma.medico.deleteMany({ where: { usuarioId: id } });
		await prisma.cita.deleteMany({ where: { OR: [{ pacienteId: id }, { medicoId: id }] } });
		await prisma.historiaClinica.deleteMany({
			where: { OR: [{ pacienteId: id }, { medicoId: id }] },
		});

		const usuario = await prisma.usuario.delete({ where: { id } });

		// Remove password from response
		const { contraseña: _, ...usuarioSinPassword } = usuario;
		res.json(usuarioSinPassword);
	} catch (error) {
		console.error("Error deleting user:", error);
		res.status(500).json({ error: "Error del servidor", message: error.message });
	}
});

app.get("/api/roles", (req, res) => {
	res.json(["paciente", "doctor", "admin"]);
});

// ----------- MESSAGING SYSTEM -----------
// Get conversations for a user
app.get("/api/users/:userId/conversations", async (req, res) => {
	const userId = req.params.userId;

	try {
		const conversaciones = await prisma.conversacion.findMany({
			where: {
				OR: [{ pacienteId: userId }, { medicoId: userId }],
			},
			include: {
				paciente: true,
				medico: {
					include: {
						usuario: true,
						especialidad: true,
					},
				},
				mensajes: {
					orderBy: { fecha: "desc" },
					take: 1,
				},
			},
			orderBy: { fechaCreacion: "desc" },
		});

		res.json(conversaciones);
	} catch (error) {
		console.error("Error fetching conversations:", error);
		res.status(500).json({ error: "Error del servidor", message: error.message });
	}
});

// Get messages for a conversation
app.get("/api/conversations/:conversationId/messages", async (req, res) => {
	const conversationId = req.params.conversationId;

	try {
		const mensajes = await prisma.mensaje.findMany({
			where: { conversacionId },
			include: {
				remitente: true,
			},
			orderBy: { fecha: "asc" },
		});

		res.json(mensajes);
	} catch (error) {
		console.error("Error fetching messages:", error);
		res.status(500).json({ error: "Error del servidor", message: error.message });
	}
});

// Send a message
app.post("/api/conversations/:conversationId/messages", async (req, res) => {
	const conversationId = req.params.conversationId;
	const { remitenteId, contenido } = req.body;

	try {
		const mensaje = await prisma.mensaje.create({
			data: {
				conversacionId,
				remitenteId,
				contenido,
				fecha: new Date(),
			},
			include: {
				remitente: true,
			},
		});

		res.json(mensaje);
	} catch (error) {
		console.error("Error sending message:", error);
		res.status(500).json({ error: "Error del servidor", message: error.message });
	}
});

// Create a new conversation
app.post("/api/conversations", async (req, res) => {
	const { pacienteId, medicoId, asunto } = req.body;

	try {
		// Check if conversation already exists
		const existingConversation = await prisma.conversacion.findFirst({
			where: {
				pacienteId,
				medicoId,
			},
		});

		if (existingConversation) {
			return res.json(existingConversation);
		}

		const conversacion = await prisma.conversacion.create({
			data: {
				pacienteId,
				medicoId,
				asunto: asunto || "Nueva consulta",
				fechaCreacion: new Date(),
			},
			include: {
				paciente: true,
				medico: {
					include: {
						usuario: true,
						especialidad: true,
					},
				},
			},
		});

		res.json(conversacion);
	} catch (error) {
		console.error("Error creating conversation:", error);
		res.status(500).json({ error: "Error del servidor", message: error.message });
	}
});

// ----------- SEARCH ENDPOINTS -----------
// Search patients
app.get("/api/search/patients", async (req, res) => {
	const { q } = req.query;

	try {
		const pacientes = await prisma.usuario.findMany({
			where: {
				AND: [
					{ rol: "patient" },
					{
						OR: [
							{ nombre: { contains: q, mode: "insensitive" } },
							{ email: { contains: q, mode: "insensitive" } },
						],
					},
				],
			},
			select: {
				id: true,
				nombre: true,
				email: true,
				telefono: true,
				fechaNacimiento: true,
				fechaCreacion: true,
			},
		});

		res.json(pacientes);
	} catch (error) {
		console.error("Error searching patients:", error);
		res.status(500).json({ error: "Error del servidor", message: error.message });
	}
});

// Search doctors
app.get("/api/search/doctors", async (req, res) => {
	const { q, especialidadId } = req.query;

	try {
		const whereClause = {};

		if (especialidadId) {
			whereClause.especialidadId = especialidadId;
		}

		if (q) {
			whereClause.usuario = {
				OR: [
					{ nombre: { contains: q, mode: "insensitive" } },
					{ email: { contains: q, mode: "insensitive" } },
				],
			};
		}

		const doctores = await prisma.medico.findMany({
			where: whereClause,
			include: {
				usuario: {
					select: {
						id: true,
						nombre: true,
						email: true,
						telefono: true,
					},
				},
				especialidad: true,
			},
		});

		res.json(doctores);
	} catch (error) {
		console.error("Error searching doctors:", error);
		res.status(500).json({ error: "Error del servidor", message: error.message });
	}
});

// ----------- AUDIT TRAIL -----------
// Create audit log helper function
const createAuditLog = async (usuarioId, accion, detalles, entidadTipo, entidadId) => {
	try {
		await prisma.auditoria.create({
			data: {
				usuarioId,
				accion,
				detalles,
				entidadTipo,
				entidadId,
				fecha: new Date(),
				ip: "127.0.0.1", // In production, get from request
			},
		});
	} catch (error) {
		console.error("Error creating audit log:", error);
	}
};

// Get audit logs (admin only)
app.get("/api/audit-logs", async (req, res) => {
	const { usuarioId, accion, entidadTipo, fecha } = req.query;

	try {
		const whereClause = {};

		if (usuarioId) whereClause.usuarioId = usuarioId;
		if (accion) whereClause.accion = accion;
		if (entidadTipo) whereClause.entidadTipo = entidadTipo;
		if (fecha) {
			const startDate = new Date(fecha);
			const endDate = new Date(fecha);
			endDate.setDate(endDate.getDate() + 1);

			whereClause.fecha = {
				gte: startDate,
				lt: endDate,
			};
		}

		const auditLogs = await prisma.auditoria.findMany({
			where: whereClause,
			include: {
				usuario: {
					select: {
						id: true,
						nombre: true,
						email: true,
						rol: true,
					},
				},
			},
			orderBy: { fecha: "desc" },
			take: 100, // Limit to last 100 records
		});

		res.json(auditLogs);
	} catch (error) {
		console.error("Error fetching audit logs:", error);
		res.status(500).json({ error: "Error del servidor", message: error.message });
	}
});

app.get("/api/stats/dashboard", async (req, res) => {
	try {
		const totalUsuarios = await prisma.usuario.count();
		const totalCitas = await prisma.cita.count();
		const totalMedicos = await prisma.medico.count();
		const totalPacientes = await prisma.usuario.count({ where: { rol: "patient" } });

		// Get appointments by status
		const citasPorEstado = await prisma.cita.groupBy({
			by: ["estado"],
			_count: {
				id: true,
			},
		});

		// Get appointments by priority
		const citasPorPrioridad = await prisma.cita.groupBy({
			by: ["prioridad"],
			_count: {
				id: true,
			},
		});

		// Recent appointments (last 7 days)
		const fechaInicio = new Date();
		fechaInicio.setDate(fechaInicio.getDate() - 7);

		const citasRecientes = await prisma.cita.count({
			where: {
				fecha: {
					gte: fechaInicio,
				},
			},
		});

		res.json({
			total_usuarios: totalUsuarios,
			total_citas: totalCitas,
			total_medicos: totalMedicos,
			total_pacientes: totalPacientes,
			citas_por_estado: citasPorEstado,
			citas_por_prioridad: citasPorPrioridad,
			citas_recientes: citasRecientes,
		});
	} catch (error) {
		console.error("Error fetching dashboard stats:", error);
		res.status(500).json({ error: "Error del servidor", message: error.message });
	}
});

app.listen(port, () => {
	console.log(`Servidor escuchando en http://localhost:${port}`);
});
