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
import { SkillAccordion } from './components/SkillAccordion'
import { ProjectCard } from './components/ProjectCard'
import Image from 'react-bootstrap/Image'
import keithImg from 'images/keith.jpg'
import Ratio from 'react-bootstrap/Ratio'


const projects = [
    {
        title: "Project 1",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus diam magna, fermentum id arcu ut, fermentum ultrices mi. Pellentesque in aliquam est. Phasellus in metus erat. Quisque varius iaculis sollicitudin. Fusce auctor auctor placerat. Sed eu viverra metus. Suspendisse aliquet tellus nec est tempus, id porta lacus malesuada. Donec consequat sed diam sed vehicula. Morbi porttitor tempor quam, non finibus ante congue et. Fusce mattis lectus nunc, a hendrerit mi posuere et. Aliquam et augue aliquet, fringilla enim eu, porttitor leo. Donec varius accumsan mattis. Praesent quis tincidunt justo. Integer rutrum mattis pharetra."
    }, {
        title: "Project 2",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus diam magna, fermentum id arcu ut, fermentum ultrices mi. Pellentesque in aliquam est. Phasellus in metus erat. Quisque varius iaculis sollicitudin. Fusce auctor auctor placerat. Sed eu viverra metus. Suspendisse aliquet tellus nec est tempus, id porta lacus malesuada. Donec consequat sed diam sed vehicula. Morbi porttitor tempor quam, non finibus ante congue et. Fusce mattis lectus nunc, a hendrerit mi posuere et. Aliquam et augue aliquet, fringilla enim eu, porttitor leo. Donec varius accumsan mattis. Praesent quis tincidunt justo. Integer rutrum mattis pharetra."
    }, {
        title: "Project 3",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus diam magna, fermentum id arcu ut, fermentum ultrices mi. Pellentesque in aliquam est. Phasellus in metus erat. Quisque varius iaculis sollicitudin. Fusce auctor auctor placerat. Sed eu viverra metus. Suspendisse aliquet tellus nec est tempus, id porta lacus malesuada. Donec consequat sed diam sed vehicula. Morbi porttitor tempor quam, non finibus ante congue et. Fusce mattis lectus nunc, a hendrerit mi posuere et. Aliquam et augue aliquet, fringilla enim eu, porttitor leo. Donec varius accumsan mattis. Praesent quis tincidunt justo. Integer rutrum mattis pharetra."
    }
]

function App() {
    return (
        <div className="App">
{ /*          <Router>
                <NavBar />
                <Routes>
                    <Route path="/" element={<Index />} />
                    <Route path="/about-me" element={<About />} />
                    <Route path="/projects" element={<Projects />} />
                </Routes>
            </Router>
            */
}
            <Container fluid>
                <Row>
                    <Col
                        md={6}
                    >
                        <h3>Leah Sattar</h3>
                        <p>Full Stack Developer</p>
                        <h3>Welcome to my portfolio</h3>
                        <nav className="mt-4">
                            <ul className="list-unstyled">
                                <li><a href="#about" className="nav-link px-0">About</a></li>
                                <li><a href="#experience" className="nav-link px-0">Experience</a></li>
                                <li><a href="#projects" className="nav-link px-0">Projects</a></li>
                                <li><a href="#skills" className="nav-link px-0">Skills</a></li>
                            </ul>
                        </nav>

                    </Col>
                    <Col
                        md={6}
                        className="overflow-auto px-5 py-4 scrollable-column"
                    >
                        <Container id="about">
                            <section className="mb-5">
                                <h3>About Me</h3>
                                <Row>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus diam magna, fermentum id arcu ut, fermentum ultrices mi...
                                    </p>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus diam magna, fermentum id arcu ut, fermentum ultrices mi...
                                    </p>
                                </Row>
                            </section>
                        </Container>
                        <Container id="experience">
                            <section>
                                <h3>Experience</h3>
                            </section>
                        </Container>
                        <Container id="projects">
                            <section className="mb-5 fadeInRight">
                                <h3>Featured Projects</h3>
                                <Row>
                                    {projects.map((project, index) => (
                                        <Col md={12} className="mb-4" key={index}>
                                            <ProjectCard
                                                title={project.title}
                                                description={project.description}
                                                buttonText="View Details"
                                                onButtonClick={() => alert(project.title)}
                                            />
                                        </Col>
                                    ))}
                                </Row>
                            </section>
                        </Container>
                        <Container id="skills">
                            <section className="mb-5">
                                <h3>Skills</h3>
                                <SkillAccordion />
                            </section>
                        </Container>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
