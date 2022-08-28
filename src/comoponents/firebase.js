import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDDFtgXetfqHPI_4_eDdd4gC4qhx3d6g40",
  authDomain: "events-21dbe.firebaseapp.com",
  projectId: "events-21dbe",
  storageBucket: "events-21dbe.appspot.com",
  messagingSenderId: "533812661145",
  appId: "1:533812661145:web:9ee20918c191d47937a108",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;
