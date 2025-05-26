import { useState, useEffect } from "react";
import { getAllUsers } from "../services/userService";
import { UserData } from "../types/user";

const DirectDoctorFetchTest = () => {
	const [users, setUsers] = useState<UserData[]>([]);
	const [doctors, setDoctors] = useState<UserData[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const fetchAndProcessUsers = async () => {
			console.log("=== DIRECT DOCTOR FETCH TEST ===");
			
			try {
				console.log("Step 1: Calling getAllUsers()...");
				const usersData = await getAllUsers();
				console.log("Step 2: Raw users data received:", usersData);
				console.log("Step 3: Users data type:", typeof usersData);
				console.log("Step 4: Is array?", Array.isArray(usersData));
				console.log("Step 5: Length:", usersData.length);
				
				setUsers(usersData);
				
				console.log("Step 6: Filtering doctors...");
				const doctorsData = usersData.filter(user => {
					console.log(`   Checking user: ${user.name} with role: ${user.role}`);
					const isDoctor = user.role === 'doctor';
					console.log(`   Is doctor? ${isDoctor}`);
					return isDoctor;
				});
				
				console.log("Step 7: Filtered doctors:", doctorsData);
				console.log("Step 8: Number of doctors found:", doctorsData.length);
				
				setDoctors(doctorsData);
						} catch (err) {
				console.error("Error in fetchAndProcessUsers:", err);
				setError(err instanceof Error ? err.message : 'Unknown error');
			} finally {
				setLoading(false);
			}
		};

		fetchAndProcessUsers();
	}, []);

	if (loading) {
		return <div style={{ padding: "20px" }}>Loading...</div>;
	}

	if (error) {
		return (
			<div style={{ padding: "20px", color: "red" }}>
				<h2>❌ Error!</h2>
				<p>{error}</p>
			</div>
		);
	}

	return (
		<div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
			<h1>Direct Doctor Fetch Test</h1>
			
			<div style={{ marginBottom: "30px" }}>
				<h2>📊 Summary</h2>
				<div style={{ background: "#f5f5f5", padding: "10px", border: "1px solid #ccc" }}>
					<p><strong>Total Users:</strong> {users.length}</p>
					<p><strong>Total Doctors:</strong> {doctors.length}</p>
					<p><strong>API Working:</strong> {users.length > 0 ? "✅ Yes" : "❌ No"}</p>
					<p><strong>Doctors Found:</strong> {doctors.length > 0 ? "✅ Yes" : "❌ No"}</p>
				</div>
			</div>

			<div style={{ marginBottom: "30px" }}>
				<h2>👥 All Users ({users.length})</h2>
				<div style={{ maxHeight: "200px", overflow: "auto", border: "1px solid #ccc" }}>
					{users.map((user, index) => (
						<div
							key={user.id || index}
							style={{
								padding: "8px",
								margin: "2px",
								backgroundColor: user.role === "doctor" ? "#e8f5e8" : 
								                 user.role === "patient" ? "#e8f0ff" : "#fff0e8",
								border: "1px solid #ddd",
							}}
						>
							<strong>{user.name}</strong> - {user.email} - <em>{user.role}</em>
						</div>
					))}
				</div>
			</div>

			<div>
				<h2>👨‍⚕️ Filtered Doctors ({doctors.length})</h2>
				{doctors.length === 0 ? (
					<div style={{ 
						color: "red", 
						fontWeight: "bold", 
						fontSize: "18px",
						background: "#ffe6e6",
						padding: "20px",
						border: "2px solid red",
						borderRadius: "5px"
					}}>
						❌ NO DOCTORS FOUND!
						<br />
						<small>This indicates the filtering logic is not working correctly.</small>
					</div>
				) : (
					<div>
						{doctors.map((doctor, index) => (
							<div
								key={doctor.id || index}
								style={{
									padding: "15px",
									margin: "10px 0",
									backgroundColor: "#e8f5e8",
									border: "2px solid green",
									borderRadius: "5px",
								}}
							>
								<h3 style={{ margin: "0 0 10px 0" }}>Dr. {doctor.name}</h3>
								<p style={{ margin: "5px 0" }}>📧 {doctor.email}</p>
								<p style={{ margin: "5px 0" }}>🆔 ID: {doctor.id}</p>
								<p style={{ margin: "5px 0" }}>👔 Role: {doctor.role}</p>
							</div>
						))}
					</div>
				)}
			</div>
		</div>
	);
};

export default DirectDoctorFetchTest;
