import React from "react"
import { Navigate } from "react-router-dom"

const PrivateRouteAccount = ({ element }) => {
    const isLogged = localStorage.getItem('isLogged') === 'true' ? true : false
    return isLogged ? element : <Navigate to="/auth" replace />
};

export default PrivateRouteAccount