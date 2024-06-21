import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAwPY70skNdTmeNu-9Pv7YTrMczH_08Umw",
    authDomain: "todo-v1-98f9d.firebaseapp.com",
    projectId: "todo-v1-98f9d",
    storageBucket: "todo-v1-98f9d.appspot.com",
    messagingSenderId: "1034808611256",
    appId: "1:1034808611256:web:3bc98b296fdcade2dcff4d"
  };
  
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
export { db }
