import firebase from 'firebase/app'
import 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyDq9VuZmjjHq6IbS8mfCmFV5whnS9t0hSM",
    authDomain: "dnz73-64b47.firebaseapp.com",
    databaseURL: "https://dnz73-64b47.firebaseio.com",
    projectId: "dnz73-64b47",
    storageBucket: "dnz73-64b47.appspot.com",
    messagingSenderId: "849523135511",
    appId: "1:849523135511:web:d5b66b9576323d446d3852",
    measurementId: "G-63W8MF4WHF"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase
