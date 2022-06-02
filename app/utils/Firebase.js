//todo esta en el proyecto creado en firebase
import firebase from "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyB61oVmojTQ-epfAm8hxeUuR-6PB6b3R9E",
    authDomain: "cursotenedores-b408d.firebaseapp.com",
    projectId: "cursotenedores-b408d",
    storageBucket: "cursotenedores-b408d.appspot.com",
    messagingSenderId: "348864611107",
    appId: "1:348864611107:web:4e6d7f9836ba1ef4f20296"
  };
  
  
 export const firebaseApp = firebase.initializeApp(firebaseConfig);