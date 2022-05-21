import axios from "axios";
import React, { useState } from "react";
import {useNavigate} from 'react-router-dom'

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
      console.log(res.data)
      if(res.data.email){
        navigate(`/home/${res.data.email}`)
      }
    })
  }

  return (
    <div>
      <h1>Signup</h1>
      <form id="form">
        <label id="first_name">
          First Name:
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
          Last Name:
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
          Enter Email:
          <input
            type="text"
            value={email}
            name="email"
            autocomplete='off'
            onChange={(e) => setEmail(e.target.value)}
            required
          ></input>
        </label>
        <br></br>
        <label>
          Password:
          <input
            type="password"
            value={password}
            name="password"
            autocomplete="off"
            onChange={(e) => setPassword(e.target.value)}
            required
          ></input>
        </label>
        <br></br>
        <button onClick={addToDatabase}>Submit</button>
      </form>
      <p></p>
    </div>
  );
}

export default Form;
