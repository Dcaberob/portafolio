import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "./pages/index";
import Experience from "./pages/experience";
import Education from "./pages/education";
import Projects from "./pages/projects";
import Skills from "./pages/skills";
import Navbar from "./components/navbar";

function App() {
  return (
    <div className="app-container">
      <Navbar />

      <main className="main-content">
        <section id="home" className="py-5">
          <Home />
        </section>

        <section id="experience" className="section">
          <Experience />
        </section>

        <section id="projects" className="section">
          <Projects />
        </section>

        <section id="education" className="section">
          <Education />
        </section>
       
        <section id="skills" className="section">
          <Skills />
        </section>
      </main>
    </div>
  );
}

export default App;