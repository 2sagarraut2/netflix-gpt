// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD3t1HOzx8kQKAfQ9Eedb_G6gD3bgocWro",
  authDomain: "netflixgpt-b383f.firebaseapp.com",
  projectId: "netflixgpt-b383f",
  storageBucket: "netflixgpt-b383f.firebasestorage.app",
  messagingSenderId: "177278976140",
  appId: "1:177278976140:web:3863f43334abb563de3ba9",
  measurementId: "G-329PLXDFEQ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// eslint-disable-next-line
const analytics = getAnalytics(app);

export const auth = getAuth();
