import React from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";

function Home() {
  let { id } = useParams();
  // console.log(id);
  return (
    <>
      <Header />
      <Main userId={id} />
      <Footer />
    </>
  );
}

export default Home;
