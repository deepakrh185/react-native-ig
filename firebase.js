import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB1mqoVWnsLMyPH7BM6KRdl3Ty-sfvCaGI",
  authDomain: "deepakrh-insta-clone.firebaseapp.com",
  projectId: "deepakrh-insta-clone",
  storageBucket: "deepakrh-insta-clone.appspot.com",
  messagingSenderId: "1074188243006",
  appId: "1:1074188243006:web:36de7e90e3efce2cb2c16f",
};

// Initialize Firebase
!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();


const db = firebase.firestore();

export { firebase, db };
