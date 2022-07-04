import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import {
  getFirestore,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAmr_6mXkH8hWAEe5MjrASi3ULZt_7tjF0",
  authDomain: "whatsapp-clone-5c302.firebaseapp.com",
  projectId: "whatsapp-clone-5c302",
  storageBucket: "whatsapp-clone-5c302.appspot.com",
  messagingSenderId: "145604887235",
  appId: "1:145604887235:web:57d1e92ec49c6b25699876",
  measurementId: "G-WN7S8LH5PV",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const auth = getAuth();
const db = getFirestore();


export { app, provider, auth };
export default db;
