import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../hook/useAuth";
import { useEffect } from "react";

function PrivateRoute() {
  const { currentUser, loading } = useAuth();
  useEffect(() => {
    console.log(currentUser);
  }, [currentUser]);
  if (loading) return <div>Loading...</div>; // show a loading message

  return currentUser ? <Outlet /> : <Navigate to="/login" />;
}

export default PrivateRoute;
