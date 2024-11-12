import React, { useContext } from 'react';
import { AuthContext } from '../layouts/MainLayout';

const About = () => {

    const { user } = useContext(AuthContext)
 

    return (
        <div className='my-96 text-center'>
            <h1>user email: {user?.email}</h1>
        </div>
    );
};

export default About;