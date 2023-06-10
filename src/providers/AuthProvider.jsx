import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, GoogleAuthProvider, signInWithPopup, GithubAuthProvider } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null);

const auth = getAuth(app);
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState('');
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    //   sign in with google
    const signInWithGoogle = () => {
        setLoading(true);
        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleProvider);
    };

    //   sign in with Github
    const signInWithGithub = () => {
        setLoading(true);
        const githubProvider = new GithubAuthProvider();
        return signInWithPopup(auth, githubProvider);
    }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, loggedUser => {
            console.log('logged in user inside auth state observer', loggedUser);
            setUser(loggedUser);
            setLoading(false);
        });

        return () => {
            unsubscribe();
        }
    }, []);

    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        logOut,
        signInWithGoogle,
        signInWithGithub
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;