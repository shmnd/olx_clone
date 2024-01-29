// TO RUN OPEN TERMINAL CHOOSE GITBASH AND TYPE YARN START IN SMALL LETTER
import Signup from './Pages/Signup';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Create from './Pages/Create';
import ViewPost from './Pages/ViewPost'; 


/**
 * ?  =====Import Components=====
 */


import React,{useEffect,useContext} from 'react';
import './App.css';
import { BrowserRouter as Router ,Route } from 'react-router-dom/cjs/react-router-dom.min';
import { Authcontext, FirebaseContext } from './store/Context';
import Post from './store/PostContext';




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
      <Post>
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

          <Route path='/create'>
            <Create/>
          </Route>
          
          <Route path='/view'>
            <ViewPost/>
          </Route>

        </Router>
      </Post>
    </div>
  );
}

export default App;
