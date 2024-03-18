// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "primehome-5989a.firebaseapp.com",
  projectId: "primehome-5989a",
  storageBucket: "primehome-5989a.appspot.com",
  messagingSenderId: "59818687529",
  appId: "1:59818687529:web:691879a9486b41a0d9f038"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);