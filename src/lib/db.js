
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBJd2tPtuxMBG0ZEMzyQ27Bsa6l7gbVhVw",
  authDomain: "react-app-81cb8.firebaseapp.com",
  projectId: "react-app-81cb8",
  storageBucket: "react-app-81cb8.appspot.com",
  messagingSenderId: "357607526927",
  appId: "1:357607526927:web:77b0815930824832f0497a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initalize Firestore database
const db = getFirestore(app);

export default db;