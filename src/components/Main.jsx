import React, { useEffect } from "react";
import axios from "axios";
import "./Main.css";

function Main() {
  useEffect(() => {
    axios.get("http://localhost:3333/items").then((res) => {
      res.data[0].map((item) => item);
    });
  }, []);

  return (
    <div className="main">
      <p></p>
    </div>
  );
}

export default Main;
