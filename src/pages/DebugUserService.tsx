import React, { useState } from "react";
import { getAllUsers } from "../services/userService";

const DebugUserService = () => {
	const [result, setResult] = useState(null);
	const [loading, setLoading] = useState(false);

	const testGetAllUsers = async () => {
		setLoading(true);
		setResult(null);

		console.log("=== DEBUG USER SERVICE ===");

		try {
			console.log("Calling getAllUsers()...");
			const users = await getAllUsers();
			console.log("getAllUsers() returned:", users);
			console.log("Type of result:", typeof users);
			console.log("Is array:", Array.isArray(users));
			console.log("Length:", users.length);

			setResult({
				success: true,
				users: users,
				count: users.length,
				doctors: users.filter((u) => u.role === "doctor"),
			});
		} catch (error) {
			console.error("Error in getAllUsers:", error);
			setResult({
				success: false,
				error: error.message,
			});
		} finally {
			setLoading(false);
		}
	};

	return (
		<div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
			<h1>Debug User Service</h1>

			<button
				onClick={testGetAllUsers}
				style={{
					padding: "10px 20px",
					backgroundColor: "#007bff",
					color: "white",
					border: "none",
					borderRadius: "5px",
					cursor: "pointer",
				}}
				disabled={loading}
			>
				{loading ? "Testing..." : "Test getAllUsers()"}
			</button>

			{result && (
				<div style={{ marginTop: "20px" }}>
					{result.success ? (
						<div>
							<h2 style={{ color: "green" }}>✅ Success!</h2>
							<p>
								<strong>Total users:</strong> {result.count}
							</p>
							<p>
								<strong>Doctors found:</strong> {result.doctors.length}
							</p>

							<h3>All Users:</h3>
							<div style={{ maxHeight: "200px", overflow: "auto" }}>
								{result.users.map((user) => (
									<div
										key={user.id}
										style={{
											padding: "5px",
											margin: "2px",
											backgroundColor:
												user.role === "doctor" ? "#e8f5e8" : "#f5f5f5",
											border: "1px solid #ccc",
										}}
									>
										<strong>{user.name}</strong> - {user.email} -{" "}
										<em>{user.role}</em>
									</div>
								))}
							</div>

							<h3>Doctors Only:</h3>
							<div>
								{result.doctors.length === 0 ? (
									<div style={{ color: "red" }}>❌ No doctors found!</div>
								) : (
									result.doctors.map((doctor) => (
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
										</div>
									))
								)}
							</div>
						</div>
					) : (
						<div>
							<h2 style={{ color: "red" }}>❌ Error!</h2>
							<p>{result.error}</p>
						</div>
					)}
				</div>
			)}
		</div>
	);
};

export default DebugUserService;
