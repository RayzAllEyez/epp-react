import React from "react";
import {Navigate, Outlet} from "react-router-dom";
import {getCurrentUser} from "../services/authService";

const PrivateRoutes = () => {
    const auth = !getCurrentUser
    return (
        auth.token ? <Outlet/> : <Navigate to="/login"/>
    );
};

export default PrivateRoutes;