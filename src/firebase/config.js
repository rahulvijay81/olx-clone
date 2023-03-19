import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyD2m6rTxBrQ7F8_3SFwCilUWphR8gDAy9Y",
  authDomain: "olx-clone-7e9ce.firebaseapp.com",
  projectId: "olx-clone-7e9ce",
  storageBucket: "olx-clone-7e9ce.appspot.com",
  messagingSenderId: "685224333046",
  appId: "1:685224333046:web:06b1469ae4358089bbe6d7",
  measurementId: "G-H16PB9QHNH"
};

export default firebase.initializeApp(firebaseConfig);