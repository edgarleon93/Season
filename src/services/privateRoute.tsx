import { Navigate, Outlet, Route } from 'react-router-dom';

interface ProtectedRouteProps {
  isAuthenticated: boolean;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ isAuthenticated }) => {
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};
