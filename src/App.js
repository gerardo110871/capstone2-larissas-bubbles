import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import Cart from './Pages/Cart'

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Login />}></Route>
        <Route path="/home/:id" element={<Home />}></Route>
        <Route path='/cart/:id' element={<Cart />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
