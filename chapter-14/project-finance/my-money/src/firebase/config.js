import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBgeWqMIoh6adyM_fStjqEMLCImNJjKITM",
  authDomain: "mymoney-8f763.firebaseapp.com",
  projectId: "mymoney-8f763",
  storageBucket: "mymoney-8f763.appspot.com",
  messagingSenderId: "449270227462",
  appId: "1:449270227462:web:4ba726f1bbebfe83fb5987"
};

// Init firebase
firebase.initializeApp(firebaseConfig)

// Init service
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()

// Timestamp
const timestamp = firebase.firestore.Timestamp

export { projectFirestore, projectAuth, timestamp}
