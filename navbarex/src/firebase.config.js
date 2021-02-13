import firebase from 'firebase'

var firebaseConfig = {
  apiKey: "AIzaSyCFPX48VmZNXIYx0YOTFdsbO6Ld1heAvm4",
    authDomain: "hackher-chatbot.firebaseapp.com",
    projectId: "hackher-chatbot",
    storageBucket: "hackher-chatbot.appspot.com",
    messagingSenderId: "867517117239",
    appId: "1:867517117239:web:548784e523d43a91a720b2"
};

  
const firebaseApp=firebase.initializeApp(firebaseConfig);
const db=firebase.firestore();

export default db;