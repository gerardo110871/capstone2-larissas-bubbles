import axios from "axios";
import React, {useEffect} from "react";
import './Items.css'
import Shopping from '../images/shopping-cart.png';

function Items({id, url, name, description, price, userId }) {
const [itemId, setItemId] = React.useState()
const [currentUser, setCurrentUser] = React.useState()

useEffect(() => {
  setCurrentUser(parseInt(userId))
  setItemId(id)
},[userId, id])

function addToCart() {
  const body = {
    id: itemId,
    user:currentUser
  }
  axios.post('http://localhost:3333/cart', body).then(res => {
    console.log(res.data)
  })
}

  return (
    <>
    <div className="product--card">
      <img src={url} alt={description}></img>
      <h1>{name}</h1>
      <h5 className="description">{description}</h5>
      <p>${price}</p><br></br>
      <div className="button">
      <button onClick={addToCart}>Add To Cart</button>
      <img className='shopping-icon'src={Shopping} alt={'shopping cart icon'}/>
      </div>
      </div>
    </>
  )
}

export default Items;