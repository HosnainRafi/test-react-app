import { useEffect, useState } from "react";
import initializeFirebase from "../Pages/Firebase/firebase.init"
import { getAuth, createUserWithEmailAndPassword, signOut, onAuthStateChanged, GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword, updateProfile } from "firebase/auth";

//initialize Firebase App
initializeFirebase();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState('');

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();


    const registerUser = (name,email, password,history,location) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const newUser = {email, displayName: name};
                setUser(newUser);
                saveUser(email,name,'POST');
                //Send updated name to the firebase.Otherwise name will not change until the reload
                updateProfile(auth.currentUser, {
                    displayName: name
                  }).then(() => {
                    
                  }).catch((error) => {
                    
                  });
                const destination = location?.state?.from || '/';
                history.replace(destination);
                setAuthError('')

            })
            .catch((error) => {
                setAuthError(error.message);
                
            })
            .finally(() => setIsLoading(false));
    }

    const loginUser = (email, password, location, history ) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const destination = location?.state?.from || '/';
                history.replace(destination);
                setAuthError('');
            })
            .catch((error) => {
                setAuthError(error.message)
            })
            .finally(() => setIsLoading(false));
    }

    const googleSignIn = (location,history) => {
        setIsLoading(true);
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                saveUser(user.email,user.displayName,'PUT')
                const destination = location?.state?.from || '/';
                history.replace(destination);
                setAuthError('');

            }).catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false));
    }

    const saveUser = (email,displayName,method) => {
        const user = {email,displayName};
        fetch('http://localhost:5000/users',{
            method: method,
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => console.log(data))
    }

    

    //Observe user state
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser({});
            }
            setIsLoading(false);
        });
        return () => unsubscribe;
    }, [])

    const logOut = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        })
            .finally(() => setIsLoading(false));
    }

    return {
        user,
        registerUser,
        isLoading,
        logOut,
        loginUser,
        authError,
        googleSignIn,
    }
}

export default useFirebase