import firebase from "firebase/app";

// Add Firebase Apss
import "firebase/firestore";
import "firebase/auth";

// firebase init - add your own config here
const config = {
  apiKey: "AIzaSyA3157fWu4HBlmCKnodKwTVY4U9EcOICEY",
  authDomain: "cognite-chat-demo.firebaseapp.com",
  databaseURL: "https://cognite-chat-demo-default-rtdb.firebaseio.com",
  projectId: "cognite-chat-demo",
  storageBucket: "cognite-chat-demo.appspot.com",
  messagingSenderId: "966178785153",
  appId: "1:966178785153:web:64f88096cb344436360a80",
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

// utils
const db = firebase.firestore();
const auth = firebase.auth();

// collection references
const contactCollection = db.collection("contacts");
const messageCollection = db.collection("messages");

// export utils/refs
export { db, auth, contactCollection, messageCollection };
