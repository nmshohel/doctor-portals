import React, { createContext } from 'react';
import useFirebase from '../../hooks/useFIrebase';

// create auth context from react 
export const AuthContext=createContext(null);


const AuthProvider = ({children}) => {
    // import firebase 
    const allContexts=useFirebase();

    return (
        // pass allcontext into provider 
        <AuthContext.Provider value={allContexts}>
            {/* children in app.js  */}
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;