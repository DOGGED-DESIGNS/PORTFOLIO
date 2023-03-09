import { useState } from "react";
import About from "./components/about";
import Contact from "./components/contacts";
import Header from "./components/header";

import Nav from "./components/nav";
import Project from "./components/projects";
import Tecnologies from "./components/technologies";

const App = () => {
  return (
    <>
      <div className="main22">
        <Nav />
        <div className="container">
          <Header />
          <Project />
          <Tecnologies />
          <About />
          <Contact />
        </div>
        <div className="container"></div>
      </div>
    </>
  );
};

export default App;
