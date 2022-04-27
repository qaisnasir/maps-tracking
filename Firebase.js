import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAvLXJFaI0lVmxFL2H8aENJFOBNsvE40Pg",
    authDomain: "location-finder-9d0ec.firebaseapp.com",
    projectId: "location-finder-9d0ec",
    storageBucket: "location-finder-9d0ec.appspot.com",
    messagingSenderId: "457054525708",
    appId: "1:457054525708:web:2d6c713a010e87e3c05129",
    measurementId: "G-8Z46LQEWQS"
};

let app;

if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
} else {
    app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };