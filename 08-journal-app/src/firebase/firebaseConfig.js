import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCivYbkZYwQRxgXsJnXtw6Da5j9SaJGqVw",
    authDomain: "react-app-cursos-f44d6.firebaseapp.com",
    projectId: "react-app-cursos-f44d6",
    storageBucket: "react-app-cursos-f44d6.appspot.com",
    messagingSenderId: "330416087743",
    appId: "1:330416087743:web:8b8c9e5789738916b35c0a"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
    db,
    googleAuthProvider,
    firebase
};