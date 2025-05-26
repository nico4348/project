import React, { useState } from "react";
import { loginUser } from "../services/authService";

const AuthTestComponent = () => {
	const [result, setResult] = useState(null);
	const [loading, setLoading] = useState(false);

	const testLogin = async () => {
		setLoading(true);
		setResult(null);

		console.log("=== AUTH TEST ===");

		try {
			console.log("Attempting login with nico4348@gmail.com...");
			const user = await loginUser("nico4348@gmail.com", "123456");
			console.log("Login result:", user);

			setResult({
				success: !!user,
				user: user,
			});
		} catch (error) {
			console.error("Error in login:", error);
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
			<h1>Auth Test Component</h1>

			<button
				onClick={testLogin}
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
				{loading ? "Testing..." : "Test Login"}
			</button>

			{result && (
				<div style={{ marginTop: "20px" }}>
					{result.success ? (
						<div>
							<h2 style={{ color: "green" }}>✅ Login Success!</h2>
							<p>
								<strong>User ID:</strong> {result.user.id}
							</p>
							<p>
								<strong>Name:</strong> {result.user.name}
							</p>
							<p>
								<strong>Email:</strong> {result.user.email}
							</p>
							<p>
								<strong>Role:</strong> {result.user.role}
							</p>
						</div>
					) : (
						<div>
							<h2 style={{ color: "red" }}>❌ Login Failed!</h2>
							<p>{result.error}</p>
						</div>
					)}
				</div>
			)}
		</div>
	);
};

export default AuthTestComponent;
