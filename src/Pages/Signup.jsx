import axios from "axios";
import React, { useState } from "react";
import {useNavigate} from 'react-router-dom'
import Header from "../components/Header"
import './SignupLogin.css'
import { FaArrowCircleUp } from "react-icons/fa";


function Form() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate() 

  function addToDatabase(e) {
    e.preventDefault();
    setFirstName('')
    setLastName('')
    setEmail('')
    setPassword('')

    const body = {
      firstName,
      lastName,
      email,
      password,
    };

    axios.post(`http://localhost:3333/signup`, body).then((res) => {
      console.log(res.data[0][0])
      if(res.data[0][0].id){
        navigate(`/home/${res.data[0][0].id}`)
      }
    })
  }

  return (
    <>
    <div>  
      <h1 className="h1">Signup</h1>
      <form id="form" className="form">
        <label id="first_name"><br></br>
          First Name:<br></br>
          <input
            type="text"
            value={firstName}
            name="first_name"
            onChange={(e) => setFirstName(e.target.value)}
            required
            ></input>
        </label>
        <label>
          <br></br>
          Last Name:<br></br>
          <input
            type="text"
            value={lastName}
            name="last_name"
            onChange={(e) => setLastName(e.target.value)}
            required
            ></input>
        </label>
        <label>
          <br></br>
          Enter Email:<br></br>
          <input
            type="text"
            value={email}
            name="email"
            autoComplete='off'
            onChange={(e) => setEmail(e.target.value)}
            required
            ></input>
        </label>
        <br></br>
        <label>
          Password:<br></br>
          <input
            type="password"
            value={password}
            name="password"
            autoComplete="off"
            onChange={(e) => setPassword(e.target.value)}
            required
            ></input>
        </label>
        <br></br>
        <button onClick={addToDatabase}>Submit <FaArrowCircleUp /></button>
      </form>
      <p></p>
    </div>
            </>
  );
}

export default Form;
