// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBvgq-uND4qnKzI-Rz_rKzKbcDLviHPd8Y",
  authDomain: "codeplay-auth.firebaseapp.com",
  projectId: "codeplay-auth",
  storageBucket: "codeplay-auth.firebasestorage.app",
  messagingSenderId: "540961878131",
  appId: "1:540961878131:web:7441ed788905fb4fc47a06"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);
 export const auth = getAuth(app);