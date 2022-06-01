// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA5gYaUS87m6xiZVSbmo0BCH1RtHUwfNS8",
  authDomain: "crud-simp.firebaseapp.com",
  projectId: "crud-simp",
  storageBucket: "crud-simp.appspot.com",
  messagingSenderId: "139114245231",
  appId: "1:139114245231:web:88d5424f0d8853e95ab19a"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);