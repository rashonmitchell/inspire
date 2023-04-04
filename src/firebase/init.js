/** 
 * v-8
 * import firebase from "firebase/app";
 * import "firebase/auth";
 * firebase.initializeApp(firebaseConfig)
 * Initialize Firebase Authentication and get a reference to the service
 * const auth = firebase.auth();
 */ 

// v-9
import { initializeApp } from "firebase/app";
import { getAuth, connectAuthEmulator } from "firebase/auth";

// The configuration below is not sensitive data. You can serenely add your config here
const firebaseConfig = {
    apiKey: "AIzaSyDY-vsJN_k5GD8jlGxK3_ud04NrkquNCfk",
    authDomain: "inspire-57ee7.firebaseapp.com",
    projectId: "inspire-57ee7",
    storageBucket: "inspire-57ee7.appspot.com",
    messagingSenderId: "1062132845768",
    appId: "1:1062132845768:web:a461b6bba8a054423a29fd",
    measurementId: "G-4K9J522246"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
connectAuthEmulator(auth, "http://localhost:9099");

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
// const auth = firebase.auth();
auth.useEmulator("http://localhost:9099");