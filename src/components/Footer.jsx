import React from 'react'
import './Footer.css'
import { FaFacebookSquare, FaInstagramSquare, FaYoutubeSquare, FaTwitterSquare } from "react-icons/fa";


function Footer() {
  return (
    <div className="footer">
      <FaFacebookSquare />
      <FaInstagramSquare />
      <FaYoutubeSquare />
      <FaTwitterSquare />
    </div>

  )
}

export default Footer