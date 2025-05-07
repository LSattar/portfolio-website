import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from './components/NavLink.tsx';
import "bootstrap/dist/js/bootstrap.bundle.min";
import { NavBar } from './components/NavBar.tsx';
import React from "react";
import { About } from "./pages/About.tsx";
import { Index } from "./pages/Index.tsx";
import { Projects } from "./pages/Projects.tsx";
import { Footer } from "./components/Footer.tsx";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { SkillAccordion } from './components/SkillAccordion';
import { ProjectCard } from './components/ProjectCard';
import { ExperienceCard } from './components/ExperienceCard';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { EducationCard } from './components/EducationCard'
import Nav from 'react-bootstrap/Nav'
import { Link } from 'react-router-dom'

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
