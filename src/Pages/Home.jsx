import React from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

function Home() {
  let { id } = useParams();
  // console.log(id);
  return (
    <>
      <Header />
      <NavBar userId={id}/>
      <Main userId={id} />
      <Footer />
    </>
  );
}

export default Home;
