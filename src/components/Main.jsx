import "./Main.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Items from "./Items";

function Main({userId}) {
  const [allData, setAllData] = useState([]);

  useEffect(() => {
    getInfo();
  }, []);

  function getInfo() {
    axios
      .get("http://localhost:3333/items")
      .then((res) => setAllData(res.data[0]));
  }

  return (
    <main>
      {allData.map((data) => {
        // console.log(data.id)
        return (
          <Items
            key={data.id}
            id={data.id}
            url={data.url}
            name={data.item}
            description={data.description}
            price={data.price}
            userId={userId}
          /> 
        );
      })}
    </main>
  );
}

export default Main;
