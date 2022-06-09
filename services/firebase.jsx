// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDtwxG056uLmMgGaKhs9T_1HVZh_fWpLdg",
    authDomain: "ac-repositorio.firebaseapp.com",
    projectId: "ac-repositorio",
    storageBucket: "ac-repositorio.appspot.com",
    messagingSenderId: "601943751955",
    appId: "1:601943751955:web:c63151ea3f0eb02aaeaee6",
    measurementId: "G-57T4RMRDHK"
  
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app)