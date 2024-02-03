import React, { useState, useEffect, useContext } from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';
import Heart from '../../assets/Heart';
import './Search.css';
import { FirebaseContext } from '../../store/Context';
import { useHistory } from 'react-router-dom';
import { SearchContext } from '../../store/SearchContext';

function SearchPosts() {
  const db = firebase.firestore();
  const { searchRes } = useContext(SearchContext);
  const [searchProduct, setSearchProduct] = useState([]);
  const history = useHistory();

  

  useEffect(() => {
    console.log('searchRes type:', typeof searchRes.searchCategory);


    let query = db.collection('olx products');
  
    if (typeof searchRes.searchCategory === 'string' && searchRes.searchCategory.trim() !== '') {
      console.log('notthingggggggggggggg', searchRes.searchCategory);
      const isCategory = searchRes.searchCategory.toLowerCase().includes('category:');
      
      if (isCategory) {
        console.log('hiiiiiiiiiiiiiiii', isCategory);
        const category = searchRes.searchCategory.split(':')[1].trim();
        query = query.where('category', '==', category);
      } else {
        query = query.where('name', '==', searchRes.searchCategory);
      }
  
      query.get().then((snapshot) => {
        const searchPosts = snapshot.docs.map((product) => ({
          ...product.data(),
          id: product.id
        }));
        setSearchProduct(searchPosts);
      });
    }
  }, [searchRes]);
  
  
  

  return (
    <div className="postParentDiv">
      <div className="moreView">
      <div className="cards">
          { searchProduct.map(product=>{
              return <div className="card" onClick={()=>{
                searchRes(product)
                history.push('/view')
              }}>``
       
              <div className="favorite">
                <Heart />
              </div>
              <div className="image">
                <img src={product.url} alt="" />
              </div>
              <div className="content">
                <p className="rate">&#x20B9; {product.price}</p>
                <p className="kilometer">{product.name}</p>
                <span className="name"> {product.category}</span>
              </div>
              <div className="date">
                <span>{product.createAt}</span>
              </div>
            </div>
          })
        }
  
      </div>

      </div>
    </div>
  );
}

export default SearchPosts;
