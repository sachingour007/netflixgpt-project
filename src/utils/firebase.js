// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_KEY,
  authDomain: "netflixgpt-125a4.firebaseapp.com",
  projectId: "netflixgpt-125a4",
  storageBucket: "netflixgpt-125a4.appspot.com",
  messagingSenderId: "923746090744",
  appId: "1:923746090744:web:036e63dca03460c4e5450d",
  measurementId: "G-HNL2ES8B2H",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
