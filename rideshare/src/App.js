import logo from './logo.svg';
import './App.css';
import { signInWithGoogle, auth} from './firebase';
import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Signup from './Signup';
import MainPage from './MainPage';
import { DomainProvider } from './DomainContext';
function App() {
  const [domain, setDomain] = useState(null);
  
  const handleLogin = async () => {
    const[userDomain, isValid] = await signInWithGoogle();
    if(isValid){
      setDomain(userDomain);
    }
  }
  return (<div className = "App">
   <Router>
    <Routes>
      <Route path = "/Signup" element={<Signup/>}></Route>
      <Route path = "/" element={<MainPage/>}></Route>
    </Routes>
   </Router>
    
  </div>)
}

export default App;
