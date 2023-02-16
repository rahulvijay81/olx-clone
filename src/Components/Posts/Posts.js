import React,{useState,useEffect,useContext} from 'react';
import {useNavigate} from 'react-router-dom'

import Heart from '../../assets/Heart';
import { FirebaseContext } from '../../store/Context';
import { postContext } from '../../store/postContext';
import './Post.css';

function Posts() {
  const {firebase} = useContext(FirebaseContext)
  const [products,setProducts] = useState([])
  const {setPostDetails} = useContext(postContext)
  const navigate = useNavigate()

useEffect(()=>{
  firebase.firestore().collection('products').get().then((snapshot)=>{
    const allPost = snapshot.docs.map((product)=>{
      return {
        ...product.data(),
        id:product.id
      }
    })
    setProducts(allPost)
  })
})
  return (
    <div className="postParentDiv">
      <div className="moreView">
        <div className="heading">
          <span>Quick Menu</span>
          <button className='btn'><span onClick={()=>{
            navigate('/ViewMore')
          }}>View more</span></button>
        </div>
      
        <div className="cards">
        {products.map(product=>{

         return <div
          className="card" onClick={()=>{
            setPostDetails(product)
            navigate('/view')
          }}>
          <div className="favorite">
            <Heart></Heart>
          </div>
          <div className="image">
            <img src={product.url} alt="" />
          </div>
          <div className="content">
            <p className="rate">&#x20B9;{product.price}</p>
            <span className="kilometer">{product.category}</span>
            <p className="name">{product.name}</p>
          </div>
          <div className="date">
            <span>{product.createdAt}</span>
          </div>
        </div> 
        })
        }
    
        </div>
      </div>
      <div className="recommendations">
        <div className="heading">
          <span>Fresh recommendations</span>
        </div>
        <div className="cards">
          <div className="card">
            <div className="favorite">
              <Heart></Heart>
            </div>
            <div className="image">
              <img src='https://imgd.aeplcdn.com/1200x900/n/cw/ec/107477/yzf-r15s-v30-right-front-three-quarter.jpeg?isig=0' />
            </div>
            <div className="content">
              <p className="rate">&#x20B9; 250000</p>
              <span className="kilometer">Two Wheeler</span>
              <p className="name"> YAMAHA R15V3</p>
            </div>
            <div className="date">
              <span>10/5/2021</span>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Posts;
