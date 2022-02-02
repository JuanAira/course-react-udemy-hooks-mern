import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyC2pIUWO__Y7ohELAfzuRNRdLtkWi-rXpk",
    authDomain: "react-app-curso-9426e.firebaseapp.com",
    projectId: "react-app-curso-9426e",
    storageBucket: "react-app-curso-9426e.appspot.com",
    messagingSenderId: "401576331981",
    appId: "1:401576331981:web:95dd43e6a5a2016c59b784",
    measurementId: "G-BE31E98KJV"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
    db,
    googleAuthProvider,
    firebase
}