// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC7FxLSn0bzvVFawbRI3hUai6dmQ2ZtnYM",
  authDomain: "e-commerce-cb185.firebaseapp.com",
  projectId: "e-commerce-cb185",
  storageBucket: "e-commerce-cb185.appspot.com",
  messagingSenderId: "813249604927",
  appId: "1:813249604927:web:7e9f23a46efaf5110c378a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
