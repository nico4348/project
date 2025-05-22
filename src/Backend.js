// backend/index.js con Prisma

const express = require("express");
const { PrismaClient } = require("@prisma/client");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

const prisma = new PrismaClient();
app.use(bodyParser.json());

// ----------- PACIENTES -----------
app.get("/api/patients/:id/appointments", async (req, res) => {
	try {
		const citas = await prisma.cita.findMany({
			where: { paciente_id: parseInt(req.params.id) },
		});
		res.json(citas);
	} catch (error) {
		res.status(500).send(error);
	}
});

app.post("/api/patients/:id/appointments", async (req, res) => {
	const { fecha, hora, medico_id } = req.body;
	const paciente_id = parseInt(req.params.id);
	try {
		const cita = await prisma.cita.create({
			data: { fecha, hora, paciente_id, medico_id },
		});
		res.json(cita);
	} catch (error) {
		res.status(500).send(error);
	}
});

app.get("/api/patients/:id/medical-history", async (req, res) => {
	try {
		const historial = await prisma.historiaClinica.findMany({
			where: { paciente_id: parseInt(req.params.id) },
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
		const citas = await prisma.cita.findMany({ where: { medico_id: parseInt(req.params.id) } });
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

app.get("/api/doctors/:id/patients", async (req, res) => {
	try {
		const citas = await prisma.cita.findMany({
			where: { medico_id: parseInt(req.params.id) },
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
	const paciente_id = parseInt(req.params.patientId);
	const { medico_id, fecha, descripcion } = req.body;
	try {
		const historia = await prisma.historiaClinica.create({
			data: { paciente_id, medico_id, fecha, descripcion },
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
