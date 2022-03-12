import { useEffect, useState } from "react";
import initializeFirebase from "../Pages/Login/Firebase/firebase.init";

import { getAuth, createUserWithEmailAndPassword,signOut,onAuthStateChanged,signInWithEmailAndPassword } from "firebase/auth";

initializeFirebase();
const useFirebase=()=>{
    const [user, setUser]=useState({});
    const [authError, setAuthError]=useState('');
    const auth = getAuth();

    const [isLoading, setIsLoading]=useState(true)

// crete user 
    const registerUser=(email, password)=>
    {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            setAuthError('');
            // Signed in 
            const user = userCredential.user;
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setAuthError(error.message);
            // ..
        })
        .finally(()=>setIsLoading(false));

    }
    // for login 
    const loginUser=(email, password)=>{
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            setAuthError('');
            const user = userCredential.user;
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setAuthError(error.message);
        })
        .finally(()=>setIsLoading(false));

    }

// observer user state 
    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth, (user) => {
            if (user) {

              const uid = user.uid;
              setUser(user)

            } else {
                setUser({});

            }
            setIsLoading(false);
          });
          return ()=>unsubscribe;

    },[])


// logout 
    const logout=()=>{
        setIsLoading(true);
        signOut(auth).then(() => {
            // Sign-out successful.
          }).catch((error) => {
            // An error happened.
          })
          .finally(()=>setIsLoading(false));

    }


    return {
        user,
        registerUser,
        logout,
        loginUser,
        isLoading,
        authError,
    }

}

export default useFirebase;