import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC3bgzztSJRacZPJP5VHl2gw5CV8OpMTQQ",
  authDomain: "chat-app-c16b1.firebaseapp.com",
  projectId: "chat-app-c16b1",
  storageBucket: "chat-app-c16b1.appspot.com",
  messagingSenderId: "587256746863",
  appId: "1:587256746863:web:ea667f5968aba573a90e9a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app)