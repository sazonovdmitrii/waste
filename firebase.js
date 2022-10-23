// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBbA7vMqUZ0cJgUseBoh3quOuJPk6hT0xI",
  authDomain: "waste-28ec4.firebaseapp.com",
  projectId: "waste-28ec4",
  storageBucket: "waste-28ec4.appspot.com",
  messagingSenderId: "227284499505",
  appId: "1:227284499505:web:72de399d85325c923ba910",
  measurementId: "G-0P6PHMNB5Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = firebase.auth()

export {auth};