import React from "react"
import { Navigate } from "react-router-dom"

const PrivateRouteAuth = ({ element }) => {
    const isLogged = localStorage.getItem('isLogged') === 'true' ? true : false
    return isLogged ? <Navigate to="/account" replace /> : element
};

export default PrivateRouteAuth