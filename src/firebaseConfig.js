import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth'


const firebaseConfig = {
    apiKey: "AIzaSyCXLYMd1S9e6LZP3a9_wtyBJqgbL3MxISk",
    authDomain: "patientapp-5c8fa.firebaseapp.com",
    projectId: "patientapp-5c8fa",
    storageBucket: "patientapp-5c8fa.appspot.com",
    messagingSenderId: "924472422516",
    appId: "1:924472422516:web:774759d80c1689f4e4a121"
  };


  if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
  }

  export {firebase};