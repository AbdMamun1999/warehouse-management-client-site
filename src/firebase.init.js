// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBrqz97bKc6DfsuAy6lrUiR4qhtj2LWp0w",
  authDomain: "warehouse-management-authentic.firebaseapp.com",
  projectId: "warehouse-management-authentic",
  storageBucket: "warehouse-management-authentic.appspot.com",
  messagingSenderId: "38610421282",
  appId: "1:38610421282:web:4b9dfdc883ca28bc56ec7b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;