// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDoXPWSoXZ0FsPI1SNUy4URsEpzObRKOog",
  authDomain: "b7-chef.firebaseapp.com",
  projectId: "b7-chef",
  storageBucket: "b7-chef.appspot.com",
  messagingSenderId: "230918952444",
  appId: "1:230918952444:web:efc93478156630ad478e79"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;