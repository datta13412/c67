import firebase from 'firebase';

// add SDK Firebase
const firebaseConfig = {
    apiKey: "AIzaSyA8J8kVTVVmkWYwngoO8l_XhBY18XkerVs",
    authDomain: "classtest-522d4.firebaseapp.com",
    projectId: "classtest-522d4",
    storageBucket: "classtest-522d4.appspot.com",
    messagingSenderId: "1076774995407",
    appId: "1:1076774995407:web:a81e4fac7069a21a2d7eba"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

export default firebase.database();