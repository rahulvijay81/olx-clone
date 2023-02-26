import React, { useState, useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { FirebaseContext } from '../../store/Context';
import { postContext } from '../../store/postContext';
import './Viewall.css'
import Heart from '../../assets/Heart'

function Viewall() {
  const { firebase } = useContext(FirebaseContext)
  const [products, setProducts] = useState([])
  const { setPostDetails } = useContext(postContext)
  const navigate = useNavigate()

  useEffect(() => {
    firebase.firestore().collection('products').get().then((snapshot) => {
      const allPost = snapshot.docs.map((product) => {
        return {
          ...product.data(),
          id: product.id
        }
      })
      setProducts(allPost)
    })
  })

  return (
    <div className='allpostview'>
      <div className='postbox'>

        <div className="cards">
          {products.map(product => {

            return <div className="card" onClick={() => {
              setPostDetails(product)
              navigate('/view')
            }}>
              <div className="favorite">
                <Heart></Heart>
              </div>
              <div className="image">
                <img src={product.url} />
              </div>
              <div className="content">
                <p className="rate">&#x20B9; {product.price}</p>
                <span className="kilometer">{product.category}</span>
                <p className='name'>{product.description}</p>
                <p className="name"> {product.name}</p>
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
  )
}

export default Viewall