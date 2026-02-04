import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";

type Props = {
    children: React.ReactNode;
};

const ProtectedRoute = ({ children }: Props) => {
    const {state} = useAuth();

    if (!(state.access.isAuthenticated)) {
        return <Navigate to="/login" replace />;
    }

    return <>{children}</>;
};

export default ProtectedRoute;
