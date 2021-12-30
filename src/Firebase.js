import firebase from "firebase";

const firebaseAp = firebase.initializeApp({
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  apiKey: "AIzaSyBX3Zec9OU2GPOoqNX_kIv1YO0IdQxpT8Y",
  authDomain: "clone-1301d.firebaseapp.com",
  projectId: "clone-1301d",
  storageBucket: "clone-1301d.appspot.com",
  messagingSenderId: "420448753589",
  appId: "1:420448753589:web:63492f49551fc054c32bfc",
  measurementId: "G-QLZ2Q2R3FL",
});

// const db = firebase.firestore();
const auth = firebase.auth();

export { auth };
