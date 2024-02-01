import React,{useContext, useState} from 'react';

import './Header.css';
import OlxLogo from '../../assets/OlxLogo';
import Search from '../../assets/Search';
import Arrow from '../../assets/Arrow';
import SellButton from '../../assets/SellButton';
import SellButtonPlus from '../../assets/SellButtonPlus';

import { Authcontext, FirebaseContext } from '../../store/Context';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { PostContext } from '../../store/PostContext';

function Header() {
  const [searchProd,setSearchProd]=useState([]);
  const [searchCatergory,setSearchCategory]=useState('')
  // const {postDetails}=useContext(PostContext)
  const history = useHistory()
  const {user}= useContext(Authcontext)
  const {firebase} = useContext(FirebaseContext)


  const handleSearch=()=>{
    const query = searchCatergory.toLowerCase();
    const db=firebase.firestore();
    const categoryRef=firebase.firestore().collection('olx_produducts').where('category','==',query) // Create a reference to query by category

    categoryRef.get().then((querySnapshot)=>{
      const results=[];
      querySnapshot.forEach((doc)=>{
        results.push(doc.data())
      })
      setSearchProd(results)
    }).catch((error)=>{
      console.error('reult not found')
    })
  }
  
  return (
    <div className="headerParentDiv">
      <div className="headerChildDiv">
        <div className="brandName">
          <OlxLogo></OlxLogo>
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
              value={searchCatergory}
              onChange={(e)=>setSearchCategory(e.target.value)}
              placeholder="Find car,mobile phone and more..."
              />
          </div>

          <div className="searchAction" >
            <Search color="#ffffff" onClick={handleSearch}></Search>
          </div>

          {/* Render search results */}
          <div className='SearchResult'>
            {searchProd.map((res,index)=>(
              <div key={index}>
                {/* Display each search result */}
                {res.category} {/* Assuming category is a field in your documents */}
              </div>
            ))}
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
