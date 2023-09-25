import { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import { app } from '../firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const updateUser = (userUpdateInfo) => {
        setLoading(true);
        return updateProfile(auth.currentUser, userUpdateInfo)
    }

    const LogOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    useEffect(() => {
        return () => onAuthStateChanged(auth, currentUser => {
            //console.log('user observing');
            setUser(currentUser)
            setLoading(false);
        })
    }, [])

   

    const authInfo = {
        createUser,
        signIn,
        updateUser,
        user,
        setUser,
        loading,
        LogOut

    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;