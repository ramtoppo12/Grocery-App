// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
require("firebase/auth");


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBAQgzpk1DJbE1dfCuKWxObWa7G3IwlC20",
  authDomain: "grocery-pal-c0bde.firebaseapp.com",
  databaseURL: "https://grocery-pal-c0bde.firebaseio.com",
  projectId: "grocery-pal-c0bde",
  storageBucket: "grocery-pal-c0bde.appspot.com",
  messagingSenderId: "147781489710",
  appId: "1:147781489710:web:0337268eeec7d6c556fbbf",
  measurementId: "G-X3X467QFG6"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();  

export { auth };