import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { app } from '../firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app);

const UserContext = ({ children }) => {

    const [user, setUser] = useState(null)


    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        return signOut(auth)
    }


    useEffect(() => {
        onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
        })
    }, [])
    const authInfo = { createUser, user, login, logOut }
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default UserContext;