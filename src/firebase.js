// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, EmailAuthProvider, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD6fvBBdMsyDp6fSc6u-no1Hwdflhb3l5s",
  authDomain: "fakenetflix-2bec0.firebaseapp.com",
  projectId: "fakenetflix-2bec0",
  storageBucket: "fakenetflix-2bec0.firebasestorage.app",
  messagingSenderId: "1014773064986",
  appId: "1:1014773064986:web:fbb6987ae75577bd4338a3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name, EmailAuthCredential, password)=>{
    try {
        const res = await createUserWithEmailAndPassword(auth, EmailAuthCredential, password);
        const user = res.user;
        await addDoc(collection(db, "user"), {
          uid: user.uid,
          name,
          authProvider: "local",
          email,
        })
    } catch (error) {
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join(' '));
    }
}

const login = async (email, password) =>{
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.log(error);
    toast.error(error.code.split('/')[1].split('-').join(' '));
  }
} 

const logout = () =>{
  signOut(auth);
}

export { auth, db, signup, login, logout };