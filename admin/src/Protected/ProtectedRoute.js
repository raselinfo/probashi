import { useContext } from 'react';
import { Store } from '../Store/Store';
import { Navigate } from "react-router-dom"
const ProtectedRoute = ({ children }) => {
    const { user } = useContext(Store)
    if (!user) {
        return <Navigate to="/" />
    }

    return children
};

export default ProtectedRoute;