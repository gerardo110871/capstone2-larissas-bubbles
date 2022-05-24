import React, { useEffect } from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import CartCards from "./CartCards";

function CartContainer({ userId }) {
  const [cartItems, setCartItems] = React.useState([]);

  useEffect(() => {
    getCartItems();
  }, [cartItems]);

  function onToken(token) {
    axios
      .post("http://localhost:3333/checkout", { token, amount: 25 })
      .then((response) => console.log(response));
  }

  function getCartItems() {
    axios
      .get(`http://localhost:3333/cart/${userId}`)
      .then((response) => setCartItems(response.data));
  }

  return (
    <>
      <main>
        {cartItems.map((data) => {
          return (
            <CartCards
              key={data.id}
              id={data.item_id}
              url={data.url}
              name={data.item}
              description={data.description}
              price={data.price}
              userId={userId}
            />
          );
        })}
      </main>
      <div className="pay-btn">
        <StripeCheckout
          shippingAddress={true}
          billingAddress={true}
          token={onToken}
          stripeKey="pk_test_51L2zMsKoo2msHaXoHMXYUAQBx6YlY6H98U9TEHoRYXDOfkf0fStegSVw5LxjFUIxSda871YDRYNs9lofQPVDiOUw00yzXpjmKM"
        />
      </div>
    </>
  );
}

export default CartContainer;
