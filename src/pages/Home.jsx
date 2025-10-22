import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Skill from "../components/Skill";
import Resume from "../components/Resume";
import Services from "../components/Services";
import Portfolio from "../components/Portfolio";
import Blogs from "../components/Blogs";

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Skill />
      <Resume />
      <Services />
      <Portfolio />
      <Blogs />
    </>
  );
};

export default Home;
