import React, { useState, useEffect } from 'react';
import { getAllUsers } from '../services/userService';

const DoctorDebugComponent = () => {
  const [users, setUsers] = useState([]);
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log('=== DOCTOR DEBUG COMPONENT ===');
        const usersData = await getAllUsers();
        console.log('Fetched users:', usersData);
        setUsers(usersData);
        
        const doctorsData = usersData.filter(user => user.role === 'doctor');
        console.log('Filtered doctors:', doctorsData);
        setDoctors(doctorsData);
      } catch (err) {
        console.error('Error fetching data:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Doctor Debug Component</h1>
      
      <div style={{ marginBottom: '20px' }}>
        <h2>All Users ({users.length})</h2>
        {users.map(user => (
          <div key={user.id} style={{ 
            padding: '10px', 
            margin: '5px 0', 
            border: '1px solid #ccc',
            backgroundColor: user.role === 'doctor' ? '#e8f5e8' : '#f0f0f0'
          }}>
            <strong>{user.name}</strong> - {user.email} - Role: {user.role}
          </div>
        ))}
      </div>

      <div>
        <h2>Doctors Only ({doctors.length})</h2>
        {doctors.length === 0 ? (
          <p style={{ color: 'red' }}>No doctors found!</p>
        ) : (
          doctors.map(doctor => (
            <div key={doctor.id} style={{ 
              padding: '10px', 
              margin: '5px 0', 
              border: '1px solid #green',
              backgroundColor: '#e8f5e8'
            }}>
              <strong>Dr. {doctor.name}</strong> - {doctor.email}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default DoctorDebugComponent;
