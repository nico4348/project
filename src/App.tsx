import { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { UserProvider } from './context/UserContext';
import ProtectedRoute from './components/common/ProtectedRoute';
import Login from './pages/Login';
import Register from './pages/Register';
import PatientDashboard from './pages/patient/Dashboard';
import DoctorDashboard from './pages/doctor/Dashboard';
import AdminDashboard from './pages/admin/Dashboard';
import AppointmentsPatient from './pages/patient/Appointments';
import AppointmentsDoctor from './pages/doctor/Appointments';
import MedicalRecordsPatient from './pages/patient/MedicalRecords';
import MedicalRecordsDoctor from './pages/doctor/MedicalRecords';
import MessagesPatient from './pages/patient/Messages';
import MessagesDoctor from './pages/doctor/Messages';
import UserManagement from './pages/admin/UserManagement';
import Analytics from './pages/admin/Analytics';
import PageNotFound from './pages/PageNotFound';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // Simulate initial app loading/authentication check
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-pulse flex flex-col items-center">
          <div className="h-12 w-12 bg-cyan-600 rounded-full mb-4"></div>
          <div className="h-4 w-24 bg-gray-300 rounded"></div>
        </div>
      </div>
    );
  }

  return (
    <UserProvider>
      <div className="min-h-screen bg-gray-50">
        <ToastContainer position="top-right" autoClose={3000} />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          
          {/* Patient Routes */}
          <Route element={<ProtectedRoute allowedRoles={['patient']} />}>
            <Route path="/patient/dashboard" element={<PatientDashboard />} />
            <Route path="/patient/appointments" element={<AppointmentsPatient />} />
            <Route path="/patient/medical-records" element={<MedicalRecordsPatient />} />
            <Route path="/patient/messages" element={<MessagesPatient />} />
          </Route>
          
          {/* Doctor Routes */}
          <Route element={<ProtectedRoute allowedRoles={['doctor']} />}>
            <Route path="/doctor/dashboard" element={<DoctorDashboard />} />
            <Route path="/doctor/appointments" element={<AppointmentsDoctor />} />
            <Route path="/doctor/medical-records" element={<MedicalRecordsDoctor />} />
            <Route path="/doctor/messages" element={<MessagesDoctor />} />
          </Route>
          
          {/* Admin Routes */}
          <Route element={<ProtectedRoute allowedRoles={['admin']} />}>
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
            <Route path="/admin/users" element={<UserManagement />} />
            <Route path="/admin/analytics" element={<Analytics />} />
          </Route>
          
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
    </UserProvider>
  );
}

export default App;