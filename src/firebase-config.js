// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAzdeagVvLlFZR50v99q_EivEK7Fp1OSVA",
  authDomain: "jobs-db-d56b6.firebaseapp.com",
  projectId: "jobs-db-d56b6",
  storageBucket: "jobs-db-d56b6.appspot.com",
  messagingSenderId: "950678935764",
  appId: "1:950678935764:web:fba630f862651a6c0a0341",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const rdb = getDatabase(app);
