import firebase from 'firebase/app.js';
import 'firebase/database.js';
import 'firebase/auth.js';


  // Initialize Firebase
const config = {
  apiKey: 'AIzaSyBsWWyrcc9jpcikkT8VurMj7TBvd9wxZyw',
  authDomain: 'e-ray-e7f7e.firebaseapp.com',
  databaseURL: 'https://e-ray-e7f7e.firebaseio.com',
  storageBucket: 'e-ray-e7f7e.appspot.com',
  messagingSenderId: '933476966520',
};
firebase.initializeApp(config);
// export all needed firebase functionality here to avoid double initialization
export const ref = firebase.database().ref();
export const firebaseAuth = firebase.auth;
