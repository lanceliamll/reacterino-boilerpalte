import firebase from 'firebase'
import 'firebase/firestore'

// Your web app's Firebase configuration
const config = {
  apiKey: "AIzaSyBSd1N4l71pxkr9SvK8ZqhjwKNiBKwwDyk",
  authDomain: "reacterino-pwa.firebaseapp.com",
  projectId: "reacterino-pwa",
  storageBucket: "reacterino-pwa.appspot.com",
  messagingSenderId: "650934736476",
  appId: "1:650934736476:web:480fc5c6a67ff3c2d8f899"
};

// Initialize Firebase
firebase.initializeApp(config);

export const firestore = firebase.firestore()