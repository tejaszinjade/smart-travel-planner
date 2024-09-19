// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAr3hjQJuXOjqZhNFS-p497Ou5OQ6g3K2M",
  authDomain: "fire-world-695bd.firebaseapp.com",
  projectId: "fire-world-695bd",
  storageBucket: "fire-world-695bd.appspot.com",
  messagingSenderId: "480906881564",
  appId: "1:480906881564:web:f6ba2cddd4c5f156558dd9",
  measurementId: "G-0EXM853LB1"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app); 