// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBXjZIMRT6qFvlOAkIX_8ElN-bftWMVEVk",
  authDomain: "career-counsling-95973.firebaseapp.com",
  projectId: "career-counsling-95973",
  storageBucket: "career-counsling-95973.appspot.com",
  messagingSenderId: "124109643545",
  appId: "1:124109643545:web:c6a70637bd9cf666762f88",
  measurementId: "G-SFDTTX8XZK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth=getAuth();
const db = getFirestore(app);
export{app,auth,db,analytics};