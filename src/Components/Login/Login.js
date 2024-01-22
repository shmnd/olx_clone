import React from 'react';

import Logo from '../../olx-logo.png';
import './Login.css';

import { FirebaseContext } from '../../store/Firebasecontext';
import { useState,useContext } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

function Login() {

const [email,setEmail]=useState('')
const [pass,setPass]=useState('')
const {firebase} =useContext(FirebaseContext)
const history =useHistory()

const handlelogin= (e)=>{
  e.preventDefault()
  firebase.auth().signInWithEmailAndPassword(email, pass).then(()=>{
    alert('Logged sucessfully')
  }).catch((error) => {
    let errorMessage = '';

    switch (error.code) {
      case 'auth/invalid-email':
        errorMessage = 'Invalid email address. Please check your email and try again.';
        break;
      case 'auth/wrong-password':
        errorMessage = 'Invalid password. Please check your password and try again.';
        break;
      default:
        errorMessage = 'Something went wrong. Please try again.';
    }

    // Display the error message to the user
    alert(errorMessage);
  });
};

  return (
    <div>
      <div className="loginParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={handlelogin}>
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            value={email}
            onChange={(e)=>{
              setEmail(e.target.value)
            }}
            id="fname"
            name="email"
            defaultValue="John"
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            value={pass}
            onChange={(e)=>{
              setPass(e.target.value)
            }}
            id="lname"
            name="password"
            defaultValue="Doe"
          />
          <br />
          <br />
          <button>Login</button>
        </form>
        <a>Signup</a>
      </div>
    </div>
  );
}

export default Login;
