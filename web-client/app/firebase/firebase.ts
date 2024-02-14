// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {
    getAuth, 
    signInWithPopup,
    GoogleAuthProvider,
    onAuthStateChanged,
    User} from "firebase/auth";
import {getFunctions} from "firebase/functions";
import {apiKey} from './keys';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: apiKey,
  authDomain: "fragrance-tracker.firebaseapp.com",
  projectId: "fragrance-tracker",
  appId: "1:1040977709758:web:7593356f0ea007888e2cef",
  measurementId: "G-NTSJ6ZHTN6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export const functions = getFunctions();

/**
 * signs the user in with a Google Popup.
 * @returns A promise that resolves with the user's credentials.
 */
export function signInWithGoogle() {
    return signInWithPopup(auth, new GoogleAuthProvider());
}

/**
 * Signs the user out.
 * @returns A promise that resolves when the user is signed out.
 */
export function signOut() {
    return auth.signOut();
}

/**
 * Trigger a callback when user auth state changes.
 * @returns A function to unsubscribe callback.
 */
export function onAuthStateChangedHelper(callback: (user: User | null) => void) {
    return onAuthStateChanged(auth, callback);
}