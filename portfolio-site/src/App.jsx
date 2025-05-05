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

function App() {
    return (
        <div className="App">
            <Router>
                <NavBar />
                <Routes>
                    <Route path="/" element={<Index />} />
                    <Route path="/about-me" element={<About />} />
                    <Route path="/projects" element={<Projects />} />
                </Routes>
            </Router>
            <div className='container intro'>
                <div className='row'>
                    <div className='col-6'>
                        <h3>Hello World!</h3>
                        <p>My name is Leah Sattar</p>
                        <h3>Welcome to my portfolio</h3>
                    </div>
                    <div className='col-6'>
                        <p>picture of me here</p>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-12'>
                        <h3>About Me</h3>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-6'>
                        <p>Description of me here</p>
                        <p><a href="">Read more about me here!</a></p>
                    </div>
                    <div className='col-6'>
                        <p>picture of me here</p>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-12'>
                        <h3>Featured Projects</h3>
                    </div>
                </div>
                <div className='row'>
                <div className='col-4'>
                    <h6>Project 1</h6>
                </div>
                <div className='col-4'>
                <h6>Project 2</h6>
                </div>
                <div className='col-4'>
                <h6>Project 3</h6>
                </div>
                </div>
            </div>
        </div>
    );
}

export default App;
