import React, { createContext } from 'react';
import { getAuth } from 'firebase/auth'
import { app } from '../firebase/firebase.config';

const AuthContext = createContext();
const auth = getAuth(app)

const UserContext = ({ children }) => {
    const authInfo = {}
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default UserContext;