import Logo from '../../olx-logo.png';
import './Signup.css';


import React, { useState,useContext } from 'react';
import { FirebaseContext } from '../../store/Context';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';


export default function Signup() {

  const history=useHistory()

  const [username,setUsername]=useState('')
  const [email,setEmail]=useState('')
  const [phone,setPhone]=useState('')
  const [pass,setPass]=useState('')
  
  const { firebase } = useContext(FirebaseContext);

  const handlesubmit= (e)=>{
    e.preventDefault()  //for prevent loading
    firebase.auth().createUserWithEmailAndPassword(email,pass).then((result)=>{
      result.user.updateProfile({displayName:username}).then(()=>{
        firebase.firestore().collection('olx_users').add({
          id:result.user.uid,
          username:username,
          email:email,
          phone:phone
        }).then(()=>{
          history.push('/login')
          console.log('updated into firestore')
        })
      })
    })
    // console.log(firebase,'hiiiiiiiiiiiiii')
    // console.log(username,phone,email,pass,'datasss')
  }

  return (
    <div>
      <div className="signupParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={handlesubmit}>

          <label htmlFor="fname">Username</label>
          <br />
          <input
            className="input"
            type="text"
            value={username}
            onChange={(e)=>setUsername(e.target.value)}
            id="fname"
            name="name"
            defaultValue=""
          />
          <br />

          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            id="fname"
            name="email"
            defaultValue="@gmail.com"
          />
          <br />

          <label htmlFor="lname">Phone</label>
          <br />
          <input
            className="input"
            type="number"
            value={phone}
            onChange={(e)=>setPhone(e.target.value)}
            id="lname"
            name="phone"
            defaultValue="Doe"
          />
          <br />

          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            value={pass}
            onChange={(e)=>setPass(e.target.value)}
            id="lname"
            name="password"
            defaultValue="Doe"
          />
          <br />
          <br />
          <button>Signup</button>
        </form>
        <a>Login</a>
      </div>
    </div>
  );
}
