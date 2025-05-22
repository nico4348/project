import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useUser } from '../../context/UserContext';
import { UserRole } from '../../types/user';
import Layout from '../layout/Layout';

interface ProtectedRouteProps {
  allowedRoles: UserRole[];
}

const ProtectedRoute = ({ allowedRoles }: ProtectedRouteProps) => {
  const { isAuthenticated, hasRole, loading } = useUser();
  const location = useLocation();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-cyan-600"></div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (!hasRole(allowedRoles)) {
    // Redirect to appropriate dashboard based on user role
    if (hasRole(['patient'])) {
      return <Navigate to="/patient/dashboard" replace />;
    }
    if (hasRole(['doctor'])) {
      return <Navigate to="/doctor/dashboard" replace />;
    }
    if (hasRole(['admin'])) {
      return <Navigate to="/admin/dashboard" replace />;
    }
    
    // Fallback to login if role is unknown
    return <Navigate to="/login" replace />;
  }

  return (
    <Layout>
      <Outlet />
    </Layout>
  );
};

export default ProtectedRoute;