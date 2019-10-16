import Rebase from 're-base';
import firebase from "firebase/app";
import "firebase/database";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyChRj7RPWxA_epRiIHS406nmov_AM4Ynpg",
  authDomain: "catch-of-the-day-patrick-51c9f.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-patrick-51c9f.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

// This is a named export
export { firebaseApp };

// This is a default export
export default base;