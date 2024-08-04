// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAqgRCVCcq8iVjHbL66rQKykTvIkkO2D6M",
  authDomain: "mi-inventory-management.firebaseapp.com",
  projectId: "mi-inventory-management",
  storageBucket: "mi-inventory-management.appspot.com",
  messagingSenderId: "253588715644",
  appId: "1:253588715644:web:4fc20d313757fbdc4fb1f9",
  measurementId: "G-SNSX17M279"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const firestore = getFirestore(app)

export {firestore}