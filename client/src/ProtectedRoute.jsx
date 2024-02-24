import { useAuth } from "./context/authContext";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const { isAuth, loading } = useAuth();

  if (!loading && !isAuth) return <Navigate to="/login" replace />;
  return <Outlet />;
};

export default ProtectedRoute;
