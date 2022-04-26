// import the core of firebase
import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDN1en2OWX3r9Hl6mT6TjBDc8UOiGqIk9E",
  authDomain: "cooking-ninja-site-d48de.firebaseapp.com",
  projectId: "cooking-ninja-site-d48de",
  storageBucket: "cooking-ninja-site-d48de.appspot.com",
  messagingSenderId: "402692814910",
  appId: "1:402692814910:web:c2afcac3ef33c8dde3396f"
};

// Init firebase
firebase.initializeApp(firebaseConfig)

// Init services
const projectFirestore = firebase.firestore()

export { projectFirestore }
