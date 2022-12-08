import firebase from "firebase/compat/app";
import "firebase/compat/database";

const firebaseConfig = {
  apiKey: "AIzaSyB1ZSJinrQ_w-HN_-dBrX4zu70u_r5rgTo",
  authDomain: FIREBASE_AUTHDOMAIN,
  databaseURL: FIREBASE_DATABASEURL,
  projectId: FIREBASE_PROJECTID,
  storageBucket: FIREBASE_STORAGEBUCKET,
  messagingSenderId: FIREBASE_MESSAGESENDERID,
  appId: FIREBASE_APP_ID,
};

if (!firebase.app.length == 0) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
