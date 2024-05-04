import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyAmddHBWu4PLoslnQCgythNgk6vj399E14",
    authDomain: "pro-c71-ef180.firebaseapp.com",
    projectId: "pro-c71-ef180",
    storageBucket: "pro-c71-ef180.appspot.com",
    messagingSenderId: "589377527820",
    appId: "1:589377527820:web:a21b115bbeab758b564e29"
  };
  
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
