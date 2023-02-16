import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyCKR8F65sc2aYpO56Kj_Bz8J4-FvWOIvoY",
    authDomain: "olxclone-1c2a9.firebaseapp.com",
    projectId: "olxclone-1c2a9",
    storageBucket: "olxclone-1c2a9.appspot.com",
    messagingSenderId: "1052520497808",
    appId: "1:1052520497808:web:39d2b57572762a63ca4e15",
    measurementId: "G-3ZP3K8VCY0"
  };

export default firebase.initializeApp(firebaseConfig);