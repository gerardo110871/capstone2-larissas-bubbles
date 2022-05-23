import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import CartContainer from "../components/CartContainer";

function Cart() {
  const [cartInfo, setCartInfo] = useState("");
  return (
    <div>
      <Header />
      <h1>Welcome to your cart</h1>
      <CartContainer />
    </div>
  );
}

export default Cart;
