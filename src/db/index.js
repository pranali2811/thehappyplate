import firebase from "firebase";
import  "firebase/firestore";

const db = firebase
.initializeApp (
    {
    apiKey: "AIzaSyAUcWnHqOm2unrQ4905qSk4lpKepuMX_LY",
    authDomain: "the-happy-plate-d31b8.firebaseapp.com",
    projectId: "the-happy-plate-d31b8",
    storageBucket: "the-happy-plate-d31b8.appspot.com",
    messagingSenderId: "1021751656970",
    appId: "1:1021751656970:web:d9057f0233e9744e7715f3",
    measurementId: "G-XVH5X5X889"
  }
)

.firestore()

export default db

const { Timestamp } = firebase.firestore
export { Timestamp }