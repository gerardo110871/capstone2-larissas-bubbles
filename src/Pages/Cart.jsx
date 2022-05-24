import React from "react";
import Header from "../components/Header";
import CartContainer from "../components/CartContainer";
import NavBar from "../components/NavBar";
import { useParams } from "react-router-dom";

function Cart() {
  const { id } = useParams();
  return (
    <div>
      <Header />
      <NavBar userId={id} />
      <h1>Welcome to your cart</h1>
      <CartContainer userId={id} />
    </div>
  );
}

export default Cart;
