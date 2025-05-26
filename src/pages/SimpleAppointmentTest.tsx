import { useState, useEffect } from "react";
import { getAllUsers } from "../services/userService";
import { useUser } from "../context/UserContext";
import { UserData } from "../types/user";

const SimpleAppointmentTest = () => {
	const { user } = useUser();
	const [doctors, setDoctors] = useState<UserData[]>([]);
	const [users, setUsers] = useState<UserData[]>([]);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const fetchData = async () => {
			console.log("=== SIMPLE APPOINTMENT TEST ===");
			console.log("Current user:", user);

			try {
				setIsLoading(true);
				console.log("Calling getAllUsers...");

				const usersData = await getAllUsers();
				console.log("getAllUsers returned:", usersData);
				console.log("Users count:", usersData.length);

				setUsers(usersData);

				// Filter doctors
				const doctorsData = usersData.filter((u) => {
					console.log(`Checking user: ${u.name}, role: ${u.role}`);
					return u.role === "doctor";
				});

				console.log("Doctors found:", doctorsData);
				setDoctors(doctorsData);
			} catch (err) {
				console.error("Error in SimpleAppointmentTest:", err);
				setError(err instanceof Error ? err.message : "Unknown error");
			} finally {
				setIsLoading(false);
			}
		};

		fetchData();
	}, [user]);

	if (isLoading) {
		return (
			<div style={{ padding: "20px" }}>
				<h1>Simple Appointment Test - Loading...</h1>
			</div>
		);
	}

	if (error) {
		return (
			<div style={{ padding: "20px" }}>
				<h1>Simple Appointment Test - Error</h1>
				<div style={{ color: "red" }}>Error: {error}</div>
			</div>
		);
	}

	return (
		<div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
			<h1>Simple Appointment Test</h1>

			<div style={{ marginBottom: "20px" }}>
				<h2>Current User</h2>
				{user ? (
					<div style={{ padding: "10px", backgroundColor: "#f0f0f0" }}>
						<div>Name: {user.name}</div>
						<div>Email: {user.email}</div>
						<div>Role: {user.role}</div>
						<div>ID: {user.id}</div>
					</div>
				) : (
					<div style={{ color: "red" }}>No user logged in</div>
				)}
			</div>

			<div style={{ marginBottom: "20px" }}>
				<h2>All Users ({users.length})</h2>
				{users.map((u) => (
					<div
						key={u.id}
						style={{
							padding: "8px",
							margin: "4px 0",
							backgroundColor: u.role === "doctor" ? "#e8f5e8" : "#f5f5f5",
							border: "1px solid #ccc",
						}}
					>
						{u.name} - {u.email} - {u.role}
					</div>
				))}
			</div>

			<div>
				<h2>Doctors Only ({doctors.length})</h2>
				{doctors.length === 0 ? (
					<div style={{ color: "red", padding: "10px", backgroundColor: "#ffebee" }}>
						❌ NO DOCTORS FOUND! This is the problem!
					</div>
				) : (
					doctors.map((doctor) => (
						<div
							key={doctor.id}
							style={{
								padding: "10px",
								margin: "5px 0",
								backgroundColor: "#e8f5e8",
								border: "2px solid #4caf50",
							}}
						>
							Dr. {doctor.name} - {doctor.email}
						</div>
					))
				)}
			</div>
		</div>
	);
};

export default SimpleAppointmentTest;
