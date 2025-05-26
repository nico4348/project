import { useState, useEffect } from "react";
import { getAllUsers } from "../services/userService";
import { useUser } from "../context/UserContext";
import { UserData } from "../types/user";

const MinimalDoctorList = () => {
	const { user } = useUser();
	const [doctors, setDoctors] = useState<UserData[]>([]);
	const [loading, setLoading] = useState(true);
	const [rawUsers, setRawUsers] = useState<UserData[]>([]);

	useEffect(() => {
		const fetchDoctors = async () => {
			console.log("=== MINIMAL DOCTOR LIST ===");
			console.log("Current user:", user);

			try {
				console.log("Fetching users...");
				const users = await getAllUsers();
				console.log("Users received:", users);
				setRawUsers(users);

				const doctorList = users.filter((u) => u.role === "doctor");
				console.log("Doctors filtered:", doctorList);
				setDoctors(doctorList);
			} catch (error) {
				console.error("Error fetching doctors:", error);
			} finally {
				setLoading(false);
			}
		};

		if (user) {
			fetchDoctors();
		}
	}, [user]);

	if (!user) {
		return <div>Please log in first</div>;
	}

	if (loading) {
		return <div>Loading doctors...</div>;
	}

	return (
		<div style={{ padding: "20px" }}>
			<h1>Minimal Doctor List</h1>

			<div style={{ marginBottom: "20px" }}>
				<h2>
					Logged in as: {user.name} ({user.role})
				</h2>
			</div>

			<div style={{ marginBottom: "20px" }}>
				<h3>Raw Users ({rawUsers.length}):</h3>
				{rawUsers.map((u) => (
					<div
						key={u.id}
						style={{
							padding: "5px",
							margin: "2px",
							backgroundColor: u.role === "doctor" ? "#e8f5e8" : "#f5f5f5",
						}}
					>
						{u.name} - {u.role}
					</div>
				))}
			</div>

			<div>
				<h3>Filtered Doctors ({doctors.length}):</h3>
				{doctors.length === 0 ? (
					<div style={{ color: "red", fontWeight: "bold" }}>❌ NO DOCTORS FOUND!</div>
				) : (
					doctors.map((doctor) => (
						<div
							key={doctor.id}
							style={{
								padding: "10px",
								margin: "5px",
								backgroundColor: "#e8f5e8",
								border: "2px solid green",
							}}
						>
							<strong>Dr. {doctor.name}</strong>
							<br />
							📧 {doctor.email}
							<br />
							🆔 ID: {doctor.id}
						</div>
					))
				)}
			</div>
		</div>
	);
};

export default MinimalDoctorList;
