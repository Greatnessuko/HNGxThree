import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBRGzTByG222A32B02oSMODkhPqQvGwY1E",
  authDomain: "galleria-f806e.firebaseapp.com",
  projectId: "galleria-f806e",
  storageBucket: "galleria-f806e.appspot.com",
  messagingSenderId: "848371150367",
  appId: "1:848371150367:web:bae8bb44c5bb19515d2f2a",
  measurementId: "G-P5D8G45BEE"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Initialize other Firebase services you need...
export { auth };