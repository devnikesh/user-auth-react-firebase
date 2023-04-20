// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAynphOMyChpisiLTG0hjvh3HXf_Sxc18k",
  authDomain: "react-redux-firebase-40048.firebaseapp.com",
  projectId: "react-redux-firebase-40048",
  storageBucket: "react-redux-firebase-40048.appspot.com",
  messagingSenderId: "421958210518",
  appId: "1:421958210518:web:4fd295e406ab0da9cdca77",
  measurementId: "G-XLL9G3M8WH",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
