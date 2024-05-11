import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA4fpsk9d6Obyg0UTmxaxHnAdXjE2sSc24",
  authDomain: "audiophones.firebaseapp.com",
  projectId: "audiophones",
  storageBucket: "audiophones.appspot.com",
  messagingSenderId: "753157467534",
  appId: "1:753157467534:web:665c53d50bef9fec9608df",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const googleProvider = new GoogleAuthProvider();

export { db, auth, googleProvider };
