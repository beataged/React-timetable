import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAhlK96GTBT0LLVaC7IvER01YYcYucfM0E",
  authDomain: "time-table-5f4f0.firebaseapp.com",
  projectId: "time-table-5f4f0",
  storageBucket: "time-table-5f4f0.appspot.com",
  messagingSenderId: "644841093793",
  appId: "1:644841093793:web:e9a951132bfe832a668ee0",
  measurementId: "G-RRGCEZ6MSN"
};

// Initialize Firebase
export const app = firebase.initializeApp(firebaseConfig);
export default firebase