// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-eb569.firebaseapp.com",
  projectId: "mern-estate-eb569",
  storageBucket: "mern-estate-eb569.appspot.com",
  messagingSenderId: "27603654734",
  appId: "1:27603654734:web:731bcb042a1e6062898b1f"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);