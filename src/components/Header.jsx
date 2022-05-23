import React from "react";
import "./Header.css";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate()

  function goToCart() {
    navigate(`/cart`);
  }

  return (
    <div className="header">
      <h1>Larissa's Bubbles</h1>
      <button onClick={goToCart}>Cart</button>
    </div>
  );
}

export default Header;
