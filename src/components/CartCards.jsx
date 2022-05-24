import axios from "axios";
import React, {useEffect, useState} from "react";

function CartCards({ url, id, name, price, description }) {
    const [itemId, setItemId] = useState()

    useEffect(() => {
        setItemId(id)
      },[id])

    function deleteItem(){
        axios.delete(`http://localhost:3333/delete/${itemId}`).then( (res) => {
            alert('item was removed from your cart')
        })
    }
  return (
    <>
      <div className="product--card">
        <img className="picture" src={url} alt={description} />
        <div className="product--details">
          <h1 className='name'>{name}</h1>
          <h5 className='price'>${price}</h5>
        </div><br></br>
        <div className="btn-area">
          <button className="button" onClick={deleteItem}>Remove From Cart</button>
        </div>
      </div>
    </>
  );
}

export default CartCards;
