import firebase from "firebase";

var firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCz5p3BWol185mbBNQIjGWNXvTpXbjhGCI",
  authDomain: "easy-65.firebaseapp.com",
  projectId: "easy-65",
  storageBucket: "easy-65.appspot.com",
  messagingSenderId: "924772538380",
  appId: "1:924772538380:web:7a254b9d7a85a00b14b629",
});

var db = firebaseApp.firestore();

export { db, firebaseApp };

// import firebase from "firebase";
// var firebaseApp = firebase.initializeApp({
//   apiKey: "AIzaSyCz5p3BWol185mbBNQIjGWNXvTpXbjhGCI",
//   authDomain: "easy-65.firebaseapp.com",
//   projectId: "easy-65",
//   storageBucket: "easy-65.appspot.com",
//   messagingSenderId: "924772538380",
//   appId: "1:924772538380:web:7a254b9d7a85a00b14b629",
// });

// var db = firebaseApp.firestore;

// export default firebaseApp;

// export default firebaseApp;

// export var db = firebaseApp.firestore;
