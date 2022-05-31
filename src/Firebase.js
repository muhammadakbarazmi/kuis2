import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
// import firebase from "firebase";


const settings = {timestampsInSnapshots: true};

const config = {
  apiKey: "AIzaSyAcrtDTeHo5s00VANrtJYbSllLs7b8E_jk",
  authDomain: "kuis2-2101f.firebaseapp.com",
  projectId: "kuis2-2101f",
  storageBucket: "kuis2-2101f.appspot.com",
  messagingSenderId: "479527416937",
  appId: "1:479527416937:web:71a122b9b883a564b7def8",
  measurementId: "G-6J8MTF6C3S"
};
firebase.initializeApp(config);
firebase.firestore().settings(settings);
// const init = firebase.initializeApp(config);
// export const firebaseAuthentication = init.auth();

export default firebase;
