import firebase from "firebase";

const firebaseAp = firebase.initializeApp({
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  apiKey: "AIzaSyAq2Us3CSrqvcd-ujtkyeB53-iH9fAELnw",
  authDomain: "amzon-clone-andrea.firebaseapp.com",
  projectId: "amzon-clone-andrea",
  storageBucket: "amzon-clone-andrea.appspot.com",
  messagingSenderId: "550133660118",
  appId: "1:550133660118:web:095932bb58ba2df899cc77",
  measurementId: "G-SR51CNBSV8",
});

// const db = firebase.firestore();
const auth = firebase.auth();

export { auth };
