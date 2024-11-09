// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-goolge.firebaseapp.com",
  projectId: "mern-auth-goolge",
  storageBucket: "mern-auth-goolge.firebasestorage.app",
  messagingSenderId: "798388416128",
  appId: "1:798388416128:web:c5b6a237ca591765fc8065"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);