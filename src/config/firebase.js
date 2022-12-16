import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getAuth } from "@firebase/auth";
import "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyARqZDJxIaHNnut4OAyH9yD1rtB7L_hZKA",
  authDomain: "eventpalace-da190.firebaseapp.com",
  projectId: "eventpalace-da190",
  storageBucket: "eventpalace-da190.appspot.com",
  messagingSenderId: "320041910278",
  appId: "1:320041910278:web:e6db0afd15e8cd9be34387",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
