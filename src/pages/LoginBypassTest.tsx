import React from "react";
import { useNavigate } from "react-router-dom";

const LoginBypassTest = () => {
	const navigate = useNavigate();

	const setMockPatient = () => {
		const mockPatient = {
			id: "10",
			name: "Nico",
			email: "nico4348@gmail.com",
			role: "patient"
		};
		
		localStorage.setItem('saludplus_user', JSON.stringify(mockPatient));
		console.log("Mock patient set in localStorage:", mockPatient);
		alert("Mock patient user set! You can now navigate to appointments.");
	};

	const goToAppointments = () => {
		navigate("/patient/appointments");
	};

	const clearStorage = () => {
		localStorage.removeItem('saludplus_user');
		console.log("User cleared from localStorage");
		alert("User cleared from localStorage");
	};

	const checkCurrentUser = () => {
		const user = localStorage.getItem('saludplus_user');
		console.log("Current user in localStorage:", user);
		alert("Check console for current user data");
	};

	return (
		<div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
			<h1>Login Bypass Test</h1>
			<p>This component allows you to manually set a user in localStorage to test the appointments flow.</p>
			
			<div style={{ marginBottom: "20px" }}>
				<button
					onClick={setMockPatient}
					style={{
						padding: "10px 20px",
						backgroundColor: "#28a745",
						color: "white",
						border: "none",
						borderRadius: "5px",
						cursor: "pointer",
						marginRight: "10px",
					}}
				>
					Set Mock Patient User
				</button>
				
				<button
					onClick={goToAppointments}
					style={{
						padding: "10px 20px",
						backgroundColor: "#007bff",
						color: "white",
						border: "none",
						borderRadius: "5px",
						cursor: "pointer",
						marginRight: "10px",
					}}
				>
					Go to Appointments
				</button>
				
				<button
					onClick={checkCurrentUser}
					style={{
						padding: "10px 20px",
						backgroundColor: "#ffc107",
						color: "black",
						border: "none",
						borderRadius: "5px",
						cursor: "pointer",
						marginRight: "10px",
					}}
				>
					Check Current User
				</button>
				
				<button
					onClick={clearStorage}
					style={{
						padding: "10px 20px",
						backgroundColor: "#dc3545",
						color: "white",
						border: "none",
						borderRadius: "5px",
						cursor: "pointer",
					}}
				>
					Clear User
				</button>
			</div>
			
			<div style={{ background: "#f8f9fa", padding: "15px", border: "1px solid #dee2e6", borderRadius: "5px" }}>
				<h3>Instructions:</h3>
				<ol>
					<li>Click "Set Mock Patient User" to add a patient user to localStorage</li>
					<li>Click "Go to Appointments" to navigate to the appointments page</li>
					<li>Check the browser console for debug logs</li>
					<li>If needed, click "Clear User" to reset</li>
				</ol>
			</div>
		</div>
	);
};

export default LoginBypassTest;
