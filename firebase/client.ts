// Import the functions you need from the SDKs you need
import { initializeApp ,getApp, getApps } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAHtSlGKvVWoNyQ23U6YcYL2xgptS2cwbU",
  authDomain: "prepwise-3249e.firebaseapp.com",
  projectId: "prepwise-3249e",
  storageBucket: "prepwise-3249e.firebasestorage.app",
  messagingSenderId: "209336321365",
  appId: "1:209336321365:web:51042f16379e544c2c9bdc",
  measurementId: "G-EQ6HSC6BY5"
};

// Initialize Firebase
const app = !getApps.length? initializeApp(firebaseConfig) : getApp();


export const auth = getAuth(app);
export const db = getFirestore(app);