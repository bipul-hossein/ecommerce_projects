import { createContext, useState } from 'react';
import {getAuth, createUserWithEmailAndPassword, updateProfile} from "firebase/auth";
import { app } from '../firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app);
 
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

const createUser =(email,password)=>{
   return createUserWithEmailAndPassword(auth, email, password)
}

const updateUser = (userUpdateInfo) => {
    setLoading(true);
    return updateProfile(auth.currentUser, userUpdateInfo)
}

const name= "BIPUL HOSSAIN"
    const authInfo = {
        createUser,
        updateUser,
        user,
        loading,
        name,
        

    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;