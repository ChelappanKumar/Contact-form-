import firebase from "firebase";

var firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAD2j5GHtEpnk-DBbz-X2o-neQ80ckiTYg",
  authDomain: "react-contact-form-ck.firebaseapp.com",
  projectId: "react-contact-form-ck",
  storageBucket: "react-contact-form-ck.appspot.com",
  messagingSenderId: "327427988977",
  appId: "1:327427988977:web:4ea4d8ab0f6e9c40763850"
});

var db = firebaseApp.firestore();

export { db };
