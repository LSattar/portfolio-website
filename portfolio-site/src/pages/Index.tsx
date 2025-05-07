import '../App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from '../components/NavLink';
import "bootstrap/dist/js/bootstrap.bundle.min";
import { NavBar } from '../components/NavBar';
import React from "react";
import { About } from "../pages/About";
import { Projects } from "../pages/Projects";
import { Footer } from "../components/Footer";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { SkillAccordion } from '../components/SkillAccordion';
import { ProjectCard } from '../components/ProjectCard';
import { ExperienceCard } from '../components/ExperienceCard';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { EducationCard } from '../components/EducationCard'
import Nav from 'react-bootstrap/Nav'
import { Link } from 'react-router-dom'

const experience = [
    {
        title: "AWS DevSecOps Engineer",
        description: "At SkillStorm, I was selected as a DevSecOps Engineer specializing in AWS to work on projects for the Department of Veterans Affairs. During my time there, I developed a full-stack application for a CPA to track client work, using MySQL, Spring Boot, and React, all hosted on AWS. The training program was fast-paced and intensive, equipping me with practical experience in cloud deployment and secure development practices. Unfortunately, my time at SkillStorm was cut short due to project funding constraints.",
        date: "February 2025 - May 2025",
        location: "Lake Mary, FL (remote)",
        company: "SkillStorm"
    }, {
        title: "Backend Coordinator",
        description: "At Reliant HouseCalls, I supported a small team of healthcare providers by improving and automating billing and administrative processes. I successfully streamlined the Chronic Care Management billing workflow, enhancing data entry, management, and auditing—dramatically increasing both operational efficiency and data integrity. In addition to my development work, I also provided financial analysis and light technical support to ensure smooth day-to-day operations.",
        date: "June 2019 - Present",
        location: "Vernon, CT (remote)",
        company: "Reliant HouseCalls, PLLC"
    }
]

const projects = [
    {
        title: "CPA Management Software",
        description: "At SkillStorm, I designed and deployed a secure full-stack application for a CPA to manage client work. The project utilized MySQL, Spring Boot, and React, and was fully hosted on AWS. I applied defense-in-depth principles to reduce the application’s attack surface across all layers, and configured a custom AWS Virtual Private Cloud with public/private subnets, NAT gateways, and routing tables to securely isolate services and control traffic flow.",
        date: "February 2025 - April 2025",
        company: "String"
    }, {
        title: "ICD-10 Verification Tool",
        description: "At Reliant HouseCalls, I developed a web scraping tool using BeautifulSoup and Pandas to extract billable and non-billable ICD-10 codes from official sources. I then automated the verification of Chronic Care Management billing entries, identifying invalid codes and exporting them to a dedicated spreadsheet for review. This significantly enhanced billing accuracy, reduced manual error-checking, and streamlined the overall verification workflow.",
        date: "December 2024 - February 2025",
        company: "String"
    }, {
        title: "Insurance Liability Bucket Report",
        description: "I led a comprehensive data clean-up effort across 300,000+ transactions, dramatically improving the accuracy of financial records and boosting reporting performance. Using MySQL, I performed a detailed analysis of insurance reimbursement rates by payor, providing actionable insights that supported more effective revenue cycle management and improved overall reimbursement efficiency.",
        date: "June 2024 - July 2025",
        company: "String"
    }
]

const education = [
    {
        title: "Bachelor of Science - Information Systems Technology",
        date: "Aug 2023 - Dec 2024",
        school: "Seminole State College of Florida",
        location: "Lake Mary, FL",
        description: ""
    }, {
        title: "Associate of Arts - Computer Science",
        date: "Aug 2021 - Dec 2022",
        school: "Manchester Community College",
        location: "Manchester, CT",
        description: ""
    },
    {
        title: "CompTIA Security+",
        date: "April 2025 - April 2028",
        school: "",
        location: "",
        description: ""
    }
]

export const Index = () => {

    const [activeSection, setActiveSection] = React.useState("");

    React.useEffect(() => {
        const sectionIds = ["about", "experience", "projects", "education"];
        const observerOptions = {
            root: null,
            threshold: Array.from({ length: 101 }, (_, i) => i / 100),
        };

        const visibleSections = new Map();

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                visibleSections.set(entry.target.id, entry.intersectionRatio);
            });

            const mostVisible = [...visibleSections.entries()]
                .sort((a, b) => b[1] - a[1])[0];

            if (mostVisible && mostVisible[1] > 0.3) {
                setActiveSection(mostVisible[0]);
            }
        }, observerOptions);

        sectionIds.forEach(id => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);


    return (
        <div className="App d-flex bg-dark text-light">
            <Container>
                <Row>
                    <Col md={5} className='h-100 mw-100 sticky'>
                        <Container id="sidebar-content">
                            <Container className='sticky p-5'>
                                <Container>
                                <h1>Leah Sattar</h1>
                                <p className='text-purple'>Full Stack Developer<br />CompTIA Security+ Certified</p>
                                <h3>Welcome to my portfolio</h3>
                            </Container>

                                <Nav className="flex-column text-start ms-5 w-25">
                                    <Nav.Item>
                                        <Nav.Link href="#about" active={activeSection === "about"} className="px-0 text-purple nav-link-custom ps-2">About</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link href="#experience" active={activeSection === "experience"} className="px-0  text-purple nav-link-custom ps-2">Experience</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link href="#projects" active={activeSection === "projects"} className="px-0  text-purple nav-link-custom ps-2">Projects</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link href="#education" active={activeSection === "education"} className="px-0  text-purple nav-link-custom ps-2">Education</Nav.Link>
                                    </Nav.Item>
                                </Nav></Container>


                            <Container className="pt-4 p-5 fixed-bottom text-start text-purple">
                                <h2>
                                    <a className="text-purple" href="https://www.linkedin.com/in/leah-sattar-666202230/" target="blank" ><i className="bi bi-linkedin me-3 social-icon"></i></a>
                                    <a className="text-purple" href="https://github.com/lsattar" target="blank" ><i className="bi bi-github me-3 social-icon"></i></a>
                                    <a className="text-purple" href="https://www.facebook.com/leah.sattar" target="blank" ><i className="bi bi-facebook me-3 social-icon"></i></a>
                                    <a className="text-purple" href="mailto:ljsattar@gmail.com"><i className="bi bi-envelope-at-fill me-3 social-icon"></i></a>
                                    <a className="text-purple" href="tel:+18608785719"><i className="bi bi-telephone-fill social-icon"></i></a>
                                </h2>
                            </Container>
                        </Container>
                    </Col>
                    <Col md={7}>
                        <main className="main-content flex-grow-1 overflow-auto p-5" id="main-content">
                            <section id="about" className="mb-5">
                                <h3>About Me</h3>
                                <p>
                                    Nice to meet you! I'm Leah Sattar, a full-stack developer with a strong focus on security, DevOps, and building efficient, scalable solutions. I thrive on solving complex challenges and streamlining development processes across cloud platforms like <b className='text-purple'>Amazon Web Services</b> and <b className='text-purple'>Google Cloud Platform</b>.
                                </p>
                                <p>
                                    I've developed full-stack applications tailored to business needs while working with SkillStorm and Reliant HouseCalls, and I’ve performed data analysis using <b className='text-purple'>Epic Clarity</b> and <b className='text-purple'>MySQL</b> to inform better healthcare decisions.
                                </p>
                                <p>
                                    Beyond coding, I enjoy spending time with my four cats, mastering Dance Dance Revolution, and experimenting in the kitchen.
                                </p>
                                <Link to="/about-me" className="text-purple fw-bold">Read more →</Link>

                            </section>
                            <section id="experience" className='mb-5'>

                                <h3>Experience</h3>
                                <Row>
                                    {experience.map((experience, index) => (
                                        <Col md={12} className="mb-4" key={index}>
                                            <ExperienceCard
                                                title={experience.title}
                                                description={experience.description}
                                                date={experience.date}
                                                location={experience.location}
                                                company={experience.company}
                                            />
                                        </Col>
                                    ))}
                                </Row>
                            </section>
                            <section id="projects" className="mb-5 fadeInRight">
                                <h3>Featured Projects</h3>
                                <Row>
                                    {projects.map((project, index) => (
                                        <Col md={12} className="mb-4" key={index}>
                                            <ProjectCard
                                                title={project.title}
                                                description={project.description}
                                                date={project.date}
                                                company={project.company}
                                            />
                                        </Col>
                                    ))}
                                </Row>
                            </section>
                            <section id="education" className="mb-5">
                                <h3>Education & Certifications</h3>
                                <Row>
                                    {education.map((education, index) => (
                                        <Col md={12} className="mb-4" key={index}>
                                            <EducationCard
                                                title={education.title}
                                                school={education.school}
                                                description={education.description}
                                                date={education.date}
                                                location={education.location}
                                            />
                                        </Col>
                                    ))}
                                </Row>
                            </section>
                        </main>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}