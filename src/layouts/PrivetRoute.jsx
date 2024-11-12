import React, { useContext } from 'react';
import { AuthContext } from './MainLayout';
import { Navigate } from 'react-router-dom';


const PrivetRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    if (loading) {
        return <h1>Loading</h1>
    }
    if (!user) {
        return <Navigate to='/login'></Navigate>
    }

    return (
        <div>
            {children}
        </div>
    );
};

export default PrivetRoute;