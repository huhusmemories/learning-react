import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyArJSdPE4uhQqjk8zokyn6N1AqEHuWZRgE",
  authDomain: "thedojosite-4df1f.firebaseapp.com",
  projectId: "thedojosite-4df1f",
  storageBucket: "thedojosite-4df1f.appspot.com",
  messagingSenderId: "2451782363",
  appId: "1:2451782363:web:6c9777351d5e9d96736afe"
};

// init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()

// timestamp
const timestamp = firebase.firestore.Timestamp

export { projectFirestore, projectAuth, timestamp }
