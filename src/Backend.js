// backend/index.js with Prisma

import express from "express";
import { PrismaClient } from "./generated/prisma/index.js";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();
const port = 5000;

const prisma = new PrismaClient();

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

// ----------- AUTENTICACIÓN -----------
app.post("/api/auth/login", async (req, res) => {
	console.log("Login attempt:", {
		email: req.body.email,
		passwordProvided: !!req.body.contraseña,
	});
	console.log("Request body:", req.body);
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
			console.log("User data:", {
				id: usuario.id,
				email: usuario.email,
				stored_password: usuario.contraseña,
				provided_password: contraseña,
			});
			console.log("Password match:", usuario.contraseña === contraseña);
		}

		if (usuario && usuario.contraseña === contraseña) {
			// Remove password from response
			const { contraseña: _, ...usuarioSinPassword } = usuario;
			console.log("Login successful for user:", usuario.email);
			res.json(usuarioSinPassword);
		} else {
			console.log("Login failed: Invalid credentials");
			res.status(401).json({ error: "Credenciales inválidas" });
		}
	} catch (error) {
		console.error("Login error:", error);
		res.status(500).json({ error: "Error del servidor", message: error.message });
	}
});

app.post("/api/auth/register", async (req, res) => {
	console.log("Registration attempt:", {
		nombre: req.body.nombre,
		email: req.body.email,
		rol: req.body.rol,
		hasPassword: !!req.body.contraseña,
	});

	const { nombre, email, contraseña, rol, fechaNacimiento, telefono } = req.body;

	if (!nombre || !email || !contraseña || !rol) {
		console.log("Registration failed: Missing required fields");
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
		console.log("Creating new user...");
		const usuario = await prisma.usuario.create({
			data: {
				nombre,
				email: email.toLowerCase(),
				contraseña,
				rol: rol || "patient",
			},
		});

		console.log("User created successfully:", {
			id: usuario.id,
			email: usuario.email,
			rol: usuario.rol,
		});

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
			where: { pacienteId: parseInt(req.params.id) },
			include: {
				medico: {
					include: {
						usuario: true,
						especialidad: true,
					},
				},
			},
		});
		res.json(citas);
	} catch (error) {
		res.status(500).send(error);
	}
});

app.post("/api/patients/:id/appointments", async (req, res) => {
	console.log("=== CREATE APPOINTMENT REQUEST ===");
	console.log("Patient ID:", req.params.id);
	console.log("Request body:", req.body);

	const { fecha, hora, medico_id, notes, type } = req.body;
	const pacienteId = parseInt(req.params.id);
	const medicoId = parseInt(medico_id);

	console.log("Parsed data:", {
		fecha,
		hora,
		medicoId,
		pacienteId,
		notes,
		type,
	});

	try {
		const cita = await prisma.cita.create({
			data: {
				fecha: new Date(fecha),
				hora: new Date(hora),
				pacienteId,
				medicoId,
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
		res.status(500).send(error);
	}
});

app.get("/api/patients/:id/medical-history", async (req, res) => {
	try {
		const historial = await prisma.historiaClinica.findMany({
			where: { pacienteId: parseInt(req.params.id) },
		});
		res.json(historial);
	} catch (error) {
		res.status(500).send(error);
	}
});

app.put("/api/patients/:id", async (req, res) => {
	const id = parseInt(req.params.id);
	const { nombre, email, contraseña } = req.body;
	try {
		const usuario = await prisma.usuario.update({
			where: { id },
			data: { nombre, email, contraseña },
		});
		res.json(usuario);
	} catch (error) {
		res.status(500).send(error);
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
		res.status(500).send(error);
	}
});

// ----------- DOCTORES -----------
app.get("/api/doctors/:id/appointments", async (req, res) => {
	try {
		const citas = await prisma.cita.findMany({
			where: { medicoId: parseInt(req.params.id) },
			include: {
				paciente: true,
			},
		});
		res.json(citas);
	} catch (error) {
		res.status(500).send(error);
	}
});

app.put("/api/appointments/:appointmentId", async (req, res) => {
	const id = parseInt(req.params.appointmentId);
	const { fecha, hora } = req.body;
	try {
		const cita = await prisma.cita.update({ where: { id }, data: { fecha, hora } });
		res.json(cita);
	} catch (error) {
		res.status(500).send(error);
	}
});

// Get all appointments (admin only)
app.get("/api/appointments", async (req, res) => {
	try {
		const citas = await prisma.cita.findMany({
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
		res.json(citas);
	} catch (error) {
		res.status(500).send(error);
	}
});

// Delete/Cancel appointment
app.delete("/api/appointments/:appointmentId", async (req, res) => {
	const id = parseInt(req.params.appointmentId);
	try {
		await prisma.cita.delete({ where: { id } });
		res.json({ success: true, message: "Appointment deleted successfully" });
	} catch (error) {
		res.status(500).send(error);
	}
});

app.get("/api/doctors/:id/patients", async (req, res) => {
	try {
		const citas = await prisma.cita.findMany({
			where: { medicoId: parseInt(req.params.id) },
			include: { paciente: true },
		});
		const pacientes = [...new Map(citas.map((c) => [c.paciente.id, c.paciente])).values()];
		res.json(pacientes);
	} catch (error) {
		res.status(500).send(error);
	}
});

app.get("/api/patients/:patientId", async (req, res) => {
	try {
		const paciente = await prisma.usuario.findUnique({
			where: { id: parseInt(req.params.patientId) },
		});
		res.json(paciente);
	} catch (error) {
		res.status(500).send(error);
	}
});

app.post("/api/patients/:patientId/medical-records", async (req, res) => {
	const pacienteId = parseInt(req.params.patientId);
	const { medico_id, fecha, descripcion } = req.body;
	const medicoId = parseInt(medico_id);
	try {
		const historia = await prisma.historiaClinica.create({
			data: { pacienteId, medicoId, fecha, descripcion },
		});
		res.json(historia);
	} catch (error) {
		res.status(500).send(error);
	}
});

// ----------- ADMINISTRADOR -----------
app.get("/api/users", async (req, res) => {
	try {
		const usuarios = await prisma.usuario.findMany();
		res.json(usuarios);
	} catch (error) {
		res.status(500).send(error);
	}
});

app.get("/api/users/:id", async (req, res) => {
	try {
		const usuario = await prisma.usuario.findUnique({ where: { id: parseInt(req.params.id) } });
		res.json(usuario);
	} catch (error) {
		res.status(500).send(error);
	}
});

app.post("/api/users", async (req, res) => {
	const { nombre, email, contraseña, rol } = req.body;
	try {
		const usuario = await prisma.usuario.create({ data: { nombre, email, contraseña, rol } });
		res.json(usuario);
	} catch (error) {
		res.status(500).send(error);
	}
});

app.put("/api/users/:id", async (req, res) => {
	const id = parseInt(req.params.id);
	const { nombre, email, contraseña, rol } = req.body;
	try {
		const usuario = await prisma.usuario.update({
			where: { id },
			data: { nombre, email, contraseña, rol },
		});
		res.json(usuario);
	} catch (error) {
		res.status(500).send(error);
	}
});

app.delete("/api/users/:id", async (req, res) => {
	try {
		const usuario = await prisma.usuario.delete({ where: { id: parseInt(req.params.id) } });
		res.json(usuario);
	} catch (error) {
		res.status(500).send(error);
	}
});

app.get("/api/roles", (req, res) => {
	res.json(["paciente", "doctor", "admin"]);
});

app.get("/api/stats/dashboard", async (req, res) => {
	try {
		const totalUsuarios = await prisma.usuario.count();
		const totalCitas = await prisma.cita.count();
		const totalMedicos = await prisma.medico.count();
		res.json({
			total_usuarios: totalUsuarios,
			total_citas: totalCitas,
			total_medicos: totalMedicos,
		});
	} catch (error) {
		res.status(500).send(error);
	}
});

app.listen(port, () => {
	console.log(`Servidor escuchando en http://localhost:${port}`);
});
