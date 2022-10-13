import React from 'react';

const ProtectedRoute = ({ children }) => {
    const admin = JSON.parse(localStorage.getItem("admin"))
    console.log(admin)
    // if(!admin.email)

    return children
};

export default ProtectedRoute;