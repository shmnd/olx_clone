import React from 'react';
import Logo from '../../olx-logo.png';
import './Login.css';

import { FirebaseContext } from '../../store/Context';
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
    
    alert('login successfull');
    setTimeout(() => {
      history.push('/home')
    }, 1000); //deplay time after press alert box time to load home page
  }).catch((error)=>{
    let errorMsg= '';
    try {
      const errorData =JSON.parse(error.message);
      if (errorData && errorData.error && errorData.error.message ){
        switch(errorData.error.message){
          case 'INVALID_LOGIN_CREDENTIALS':
            errorMsg='Wrong Email or Password'
            break;
          default:
            errorMsg='Something went wrong'
        }
      }
    }catch(parseError){
      errorMsg = 'Error parsing the error message';
    }
    alert(errorMsg)
  })
}

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
