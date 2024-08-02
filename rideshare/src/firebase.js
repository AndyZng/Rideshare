// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import validDomains from './domains.json';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBzGSWWfsYbo8VBxvFn1Z29vvct15_m1mk",
  authDomain: "campus-rideshare.firebaseapp.com",
  projectId: "campus-rideshare",
  storageBucket: "campus-rideshare.appspot.com",
  messagingSenderId: "345271539909",
  appId: "1:345271539909:web:04bf22c357488723daf8ac",
  measurementId: "G-JX3838R6GH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app)
const provider = new GoogleAuthProvider()
export const signInWithGoogle = async () => {
    try {
        const result = await signInWithPopup(auth, provider);
        const user = result.user;
        const email = user.email;
        const domain = email.substring(email.lastIndexOf("@") + 1);
        console.log(domain)
        if(validDomains.includes(domain)){
            console.log(domain);
            return [domain,true];
        }
        else{
            alert("invalid domain")
            return [null,false];
        }
    }
    catch(error){
        console.log(error);
    }
}
