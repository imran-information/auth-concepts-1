// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAvgeH9WReiz5F4w_mNXt0nWhkXYfpV5-k",
    authDomain: "auth-concepts-1.firebaseapp.com",
    projectId: "auth-concepts-1",
    storageBucket: "auth-concepts-1.firebasestorage.app",
    messagingSenderId: "890371370119",
    appId: "1:890371370119:web:b207cc0ab7d78bb5b85c22"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);