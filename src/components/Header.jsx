import React from "react";
import "./Header.css";
import { FaOpera } from "react-icons/fa";

function Header() {
  return (
    <div className="header">
      <h1 className="logo">
      <FaOpera /><FaOpera /><FaOpera />Larissa's Bubbles<FaOpera /><FaOpera /><FaOpera />
      </h1>
    </div>
  );
}

export default Header;
