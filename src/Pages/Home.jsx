import React from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import AboutMe from "../components/AboutMe";

function Home() {
  let { id } = useParams();
  return (
    <div>
      <Header />
      <NavBar userId={id} />
      <AboutMe />
      <Main userId={id} />
      <Footer />
    </div>
  );
}

export default Home;
