import React from "react";
import { FaCartArrowDown, FaHome, FaWpforms } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function NavBar({ userId }) {
  const navigate = useNavigate();

  function goToCart() {
    navigate(`/cart/${userId}`);
  }
  function goHome() {
    navigate(`/home/${userId}`);
  }
//   function signup() {
//     navigate(`/signup`);
//   }
  return (
    <div>
      <div className="cart-link">
        <button className="cart-btn" onClick={goHome}>
          <FaHome />
        </button>
        <button className="cart-btn" onClick={goToCart}>
          <FaCartArrowDown />
        </button>
        {/* <button className="cart-btn" onClick={signup}>
          <FaWpforms />
        </button> */}
      </div>
    </div>
  );
}

export default NavBar;
