import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import React from "react";
import { About } from "./pages/About.tsx";
import { Index } from "./pages/Index.tsx";
import { Projects } from "./pages/Projects.tsx";

function App() {
    return (
      <div className="App bg-dark text-light">
        <Router>
          <main>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/about-me" element={<About />} />
              <Route path="/projects" element={<Projects />} />
            </Routes>
          </main>
        </Router>
      </div>
    );
  }
  

export default App;
