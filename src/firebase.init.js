// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDgyXIoshebOIalwTMsarCUC23ejj2_6h4",
    authDomain: "endgame-53c9b.firebaseapp.com",
    projectId: "endgame-53c9b",
    storageBucket: "endgame-53c9b.appspot.com",
    messagingSenderId: "281343768524",
    appId: "1:281343768524:web:854516a753cfe64e064f69"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth