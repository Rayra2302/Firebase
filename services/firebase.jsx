// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// Importar os recursos do firebase
import {getFiresote, getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBpjkH5QXzy85U0457J9f8jXUiNsdcNVB0",
  authDomain: "crud-simples-a7adf.firebaseapp.com",
  projectId: "crud-simples-a7adf",
  storageBucket: "crud-simples-a7adf.appspot.com",
  messagingSenderId: "673487013596",
  appId: "1:673487013596:web:326087a2b37726d6305619"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);