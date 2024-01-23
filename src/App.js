// TO RUN OPEN TERMINAL CHOOSE GITBASH AND TYPE YARN START IN SMALL LETTER
import Signup from './Pages/Signup';
import Home from './Pages/Home';
import Login from './Pages/Login'


/**
 * ?  =====Import Components=====
 */


import React,{useEffect,useContext} from 'react';
import './App.css';
import { BrowserRouter as Router ,Route } from 'react-router-dom/cjs/react-router-dom.min';
import { Authcontext, FirebaseContext } from './store/Context';




function App() {
    const {user,setUser}= useContext(Authcontext)
    const {firebase}=useContext(FirebaseContext)
    useEffect(()=>{
      firebase.auth().onAuthStateChanged((user)=>{    //To check current user loged in or not 
        setUser(user)
      })
    })

  return (
    <div>
      <Router>

        <Route exact path='/'>
          <Home />
        </Route>

        <Route path='/signup'>
          <Signup />
        </Route>

        <Route path='/login'>
          <Login/>
        </Route>

        <Route path='/home'>
          <Home/>
        </Route>

      </Router>
    </div>
  );
}

export default App;
