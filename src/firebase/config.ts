import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBM-yOaZrmSrkmfxBU7b5jLoCqRwkIEubM",
    authDomain: "demos-sql-ae01b.firebaseapp.com",
    projectId: "demos-sql-ae01b",
    storageBucket: "demos-sql-ae01b.appspot.com",
    messagingSenderId: "350601796618",
    appId: "1:350601796618:web:0504137644d7646f2713f3"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  export default firebase.firestore();