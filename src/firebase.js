import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "tutorial-6953c.firebaseapp.com",
  projectId: "tutorial-6953c",
  storageBucket: "tutorial-6953c.appspot.com",
  messagingSenderId: "146328599919",
  appId: "1:146328599919:web:8e163d4520b77178703c9a",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app);
export const storage = getStorage(app);
