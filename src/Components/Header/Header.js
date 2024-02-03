import React,{useContext, useRef, useState} from 'react';

import './Header.css';
import OlxLogo from '../../assets/OlxLogo';
import Search from '../../assets/Search';
import Arrow from '../../assets/Arrow';
import SellButton from '../../assets/SellButton';
import SellButtonPlus from '../../assets/SellButtonPlus';

import { Authcontext, FirebaseContext } from '../../store/Context';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import {SearchContext} from '../../store/SearchContext'



function Header() {
  // const searchQuery = useRef();

  // const [searchQuery,setSearchQuery]=useState('')

  const history = useHistory()
  const {user}= useContext(Authcontext)
  const {firebase} = useContext(FirebaseContext)


  const {setSearchRes} = useContext(SearchContext) 
  
  return (
    <div className="headerParentDiv">
      <div className="headerChildDiv">
        <div className="brandName" onClick={()=>{
          history.push('/')
        }}>
          <OlxLogo ></OlxLogo>
        </div>
        <div className="placeSearch">
          <Search>
          </Search>
          <input defaultValue={'India'}/>
          <Arrow></Arrow>
        </div>

        <div className="productSearch">
          
          <div className="input">
            <input
              type="text"
              // value={searchQuery}
              placeholder="Find car,mobile phone and more..."
              />
          </div>

          <div className="searchAction" onClick={(searchQuery) => {
            setSearchRes(searchQuery);
            history.push('/search');

            // Log after navigation:
            console.log('Search context value (after navigation):', setSearchRes());
          }}>
            
            <Search color="#hhhhhh" ></Search>
          </div>

        </div>


        <div className="language">
          <span> ENGLISH </span>
          <Arrow></Arrow>
        </div>
        <div className="loginPage">
          <span>{user ? `Hello ${user.displayName}` : 'Login'}</span>
          <hr />
        </div>

        {user && <span onClick={()=>{
          firebase.auth().signOut();
          history.push('/login')
        }} >Logout</span>}

        <div className="sellMenu">
          <SellButton></SellButton>
          <div className="sellMenuContent">
            <SellButtonPlus></SellButtonPlus>
            {user ? <span onClick={() => history.push('/create')}>
            SELL
            </span>:history.push('/login')}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
