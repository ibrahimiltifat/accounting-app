import firebase from "firebase";
import "firebase/firestore";
// import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBc0AoDyNGTVw11YoM-Zl2MKkqWaOCvF-0",
  authDomain: "ledger-maker-4d3c7.firebaseapp.com",
  projectId: "ledger-maker-4d3c7",
  storageBucket: "ledger-maker-4d3c7.appspot.com",
  messagingSenderId: "425059699806",
  appId: "1:425059699806:web:b7a07253f35f3fc21cb8cf",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase;
