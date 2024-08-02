import React from 'react'
import './App.css';
import { signInWithGoogle} from './firebase';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
export default function Signup() {
    const navigate = useNavigate();
    const[domain, setDomain] = useState(null);
    const handleSignIn = async () => {
        try {
            const success = await signInWithGoogle();
            console.log(success[1])
            if (success[1]){
            navigate('/');
            }
        }
        catch(error){
            console.error('Error signing in with Google:', error);
        }
    }

  return (
    <div>
    <h1>Welcome to RideConnect</h1>
    <p>Please sign in using your school email </p>
    <button onClick = {handleSignIn} type = "button" class = "login-with-google-btn">
      Sign in with Google
    </button>
    </div>
  )
}
