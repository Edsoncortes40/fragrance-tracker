'use client';

import {
    signInWithPopup,
    GoogleAuthProvider,
    onAuthStateChanged,
    User,
    UserCredential} from "firebase/auth";
import {ReactNode, createContext, useContext, useEffect, useState} from "react";
import {auth} from "../firebase/firebase";

interface userContextType{
    user: User | null,
    signInWithGoogle: () => Promise<UserCredential>,
    signOut: () => Promise<void>,
}
const AuthContext = createContext<userContextType | null>(null);


type childrenType = {
    children: JSX.Element | JSX.Element[] | ReactNode,
}
export function AuthContextProvider({children}: childrenType){
    const [user, setUser] = useState<User | null>(null);

    /**
     * signs the user in with a Google Popup.
     * @returns A promise that resolves with the user's credentials.
     */
    function signInWithGoogle() {
        return signInWithPopup(auth, new GoogleAuthProvider());
    }

    /**
     * Signs the user out.
     * @returns A promise that resolves when the user is signed out.
     */
    function signOut() {
        return auth.signOut();
    }

    /**
     * Trigger a callback when user auth state changes.
     * @returns A function to unsubscribe callback.
     */
    function onAuthStateChangedHelper(callback: (user: User | null) => void) {
        return onAuthStateChanged(auth, callback);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChangedHelper((user) => {
            setUser(user);
        });

        // cleanup Subscription on unmount
        return () => unsubscribe();
    }, [user]);

    return (
        <AuthContext.Provider value={{user, signInWithGoogle, signOut}}>
            {children}
        </AuthContext.Provider>
    )
}

export function userAuth(){
    return useContext(AuthContext);
} 