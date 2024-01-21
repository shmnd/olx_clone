import React from 'react';

import Logo from '../../olx-logo.png';
import './Login.css';


import { useState } from 'react';

function Login() {

const [email,setEmail]=useState('')
const [pass,setPass]=useState('')

const handlelogin= (e)=>{
  e.preventDefault()
  firebase.auth
}

  return (
    <div>
      <div className="loginParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form>
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
