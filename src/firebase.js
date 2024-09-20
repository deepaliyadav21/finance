// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDMZojvl_4A12XZOzmRh_EjqklD3HAQHJY",
  authDomain: "finance-personal-5c6cf.firebaseapp.com",
  projectId: "finance-personal-5c6cf",
  storageBucket: "finance-personal-5c6cf.appspot.com",
  messagingSenderId: "1050615875438",
  appId: "1:1050615875438:web:e00af3d6b21a4a9b56e37f",
  measurementId: "G-FRLG2NXM21"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { db, auth, provider, doc, setDoc };
const analytics = getAnalytics(app);