import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRout = ({ children }) => {
    const { user } = useContext(AuthContext);
    const location = useLocation();
    console.log(location);

    if (user) {
        return children;
    }
    return <Navigate to="/login" replace></Navigate>;

};

export default PrivateRout;