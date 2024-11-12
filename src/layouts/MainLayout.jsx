import React, { createContext, useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from '../firebase/firebase.init';

export const AuthContext = createContext()
const MainLayout = () => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const googleProvider = new GoogleAuthProvider()

    const handleGoogleLogin = () => {
        setLoading(true)
        signInWithPopup(auth, googleProvider)
            .then(res => console.log(res.user))
    }

    const handleSignUp = (email, password) => {
        
        setLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
            .then(res => console.log(res.user))
    }

    const handleLogin = (email, password) => {
        setLoading(true)
        signInWithEmailAndPassword(auth, email, password)
            .then(res => console.log(res.user))
    }

    const handleSignOut = () => {
        setLoading(true)
        signOut(auth)
            .then(res => console.log(res.user))
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                setUser(currentUser)

            } else {
                setUser(null)
            }
            setLoading(false)
            // if (user) {
            //     // User is signed in, see docs for a list of available properties
            //     // https://firebase.google.com/docs/reference/js/auth.user
            //     const uid = user.uid;
            //     // ...
            // } else {
            //     // User is signed out
            //     // ...
            // }
        });
        return () => {
            unSubscribe()
        }
    }, [])



    const authData = {
        handleGoogleLogin,
        handleLogin,
        handleSignUp,
        handleSignOut,
        user,
        loading
    }
    return (
        <div>
            <AuthContext.Provider value={authData}>
                <Navbar></Navbar>
                <Outlet></Outlet>
                <Footer></Footer>
            </AuthContext.Provider>
        </div>
    );
};

export default MainLayout;