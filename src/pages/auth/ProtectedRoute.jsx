import { Navigate, useLocation } from "react-router-dom";

function ProtectedRoute({ children, allowedRoles }) {
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");
  const location = useLocation();

  // Belum login
  if (!token) {
    return <Navigate to="/" replace state={{ from: location }} />;
  }

  // Role tidak diizinkan
  if (allowedRoles && !allowedRoles.includes(role)) {
    return <Navigate to="/forbidden" replace />;
  }

  return children;
}

export default ProtectedRoute;
