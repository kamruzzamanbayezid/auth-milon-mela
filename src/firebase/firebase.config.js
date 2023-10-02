import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBGgEuEKSbVy7yaUocDJNh_pMqP6lTFB9k",
  authDomain: "auth-milon-mela-8fdee.firebaseapp.com",
  projectId: "auth-milon-mela-8fdee",
  storageBucket: "auth-milon-mela-8fdee.appspot.com",
  messagingSenderId: "584231343044",
  appId: "1:584231343044:web:59324c592f2fe13d108a91"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;