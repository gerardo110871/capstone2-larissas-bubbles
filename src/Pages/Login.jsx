import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Items from '../components/Items'

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function login(e) {
    e.preventDefault();
    setEmail("");
    setPassword("");

    const body = {
      email,
      password,
    };
    if (email !== "" && password !== "") {
      axios
        .post("http://localhost:3333/login", body)
        .then((res) => {
          if (res.data[0].id) {
            navigate(`/home/${res.data[0].id}`);
          }
          return(
            <Items user={res.data[0].id}/>
          )
        })
        .catch((err) => alert(err.response.data));
    } else {
      alert("please fill out the entire form");
    }
    
  }
  return (
    <div>
      <h1>Login</h1>
      <form>
        <label>
          Email:
          <input
            type="email"
            value={email}
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <br></br>
        <label>
          Password:
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br></br>
        <button onClick={login}>Login</button>
      </form>
    </div>
  );
}

export default Login;
