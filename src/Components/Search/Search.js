import React,{useState,useEffect,useContext} from 'react';

import Heart from '../../assets/Heart';
import './Search.css';

import { FirebaseContext } from '../../store/Context';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { PostContext } from '../../store/PostContext';


function SearchPosts() {
  const {firebase}=useContext(FirebaseContext);
  const [products,setProducts]=useState([])
  const history=useHistory()
  const {setPostDetails} = useContext(PostContext)




  useEffect(()=>{
    firebase.firestore().collection('olx products').get().then((snapshot)=>{    //inside the collect provide name of database from firebase
      const allPost = snapshot.docs.map((product)=>{
        return{
          ...product.data(),
          id:product.id
        }
      })
      setProducts(allPost)
    })
  },[])


 


  return (
    <div className="postParentDiv">
      <div className="moreView">
        <div className="heading">
          <span>Quick Menu</span>
          <span>View more</span>
        </div>
        <div className="cards">

        { products.map(product=>{
          return <div className="card" onClick={()=>{
            setPostDetails(product)
            history.push('/view')
          }}>
          <div className="favorite">
            <Heart></Heart>
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
