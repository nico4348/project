import { useState, useEffect } from "react";
import { getAllUsers } from "../services/userService";
import { UserData } from "../types/user";

const TestDoctors = () => {
	const [doctors, setDoctors] = useState<UserData[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const fetchDoctors = async () => {
			try {
				console.log("Fetching all users...");
				const users = await getAllUsers();
				console.log("Raw users data:", users);

				const doctorsData = users.filter((user) => user.role === "doctor");
				console.log("Filtered doctors:", doctorsData);
				setDoctors(doctorsData);
			} catch (err) {
				console.error("Error fetching doctors:", err);
				setError(err instanceof Error ? err.message : String(err));
			} finally {
				setLoading(false);
			}
		};

		fetchDoctors();
	}, []);

	if (loading) return <div className="p-8">Loading...</div>;
	if (error) return <div className="p-8 text-red-500">Error: {error}</div>;

	return (
		<div className="p-8">
			<h1 className="text-2xl font-bold mb-4">Test Doctors API</h1>
			<p>Found {doctors.length} doctors:</p>

			<div className="mt-4 space-y-2">
				{doctors.map((doctor) => (
					<div key={doctor.id} className="p-4 border rounded-lg bg-white">
						<h3 className="font-semibold">{doctor.name}</h3>
						<p className="text-gray-600">{doctor.email}</p>
						<p className="text-sm text-gray-500">Role: {doctor.role}</p>
					</div>
				))}
			</div>

			{doctors.length === 0 && (
				<p className="text-yellow-600 mt-4">No doctors found in the system.</p>
			)}
		</div>
	);
};

export default TestDoctors;
