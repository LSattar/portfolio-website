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
import { SkillMarquee } from '../components/SkillMarquee'
import { SocialIcons } from '../components/SocialIcons';

const experience = [
    {
        title: "Backend Coordinator",
        description: "At Reliant HouseCalls, I supported a small team of healthcare providers by improving and automating billing and administrative processes. I successfully streamlined the Chronic Care Management billing workflow, enhancing data entry, management, and auditing, dramatically increasing both operational efficiency and data integrity. In addition to my development work, I also provided financial analysis, reporting, and light technical support to ensure smooth day-to-day operations.",
        date: "June 2019 - Present",
        location: "Vernon, CT (remote)",
        company: "Reliant HouseCalls, PLLC",
        skills: ["Python", "Google Cloud Platform", "MySQL"]
    },
    {
        title: "AWS DevSecOps Engineer",
        description: "At SkillStorm, I was selected as a DevSecOps Engineer specializing in AWS to work on projects for the Department of Veterans Affairs. During my time there, I developed a full-stack application for a CPA to track client work, using MySQL, Spring Boot, and React, all hosted on AWS. The training program was fast-paced and intensive, equipping me with practical experience in cloud deployment and secure development practices. Unfortunately, my time at SkillStorm was cut short due to project funding constraints.",
        date: "February 2025 - May 2025",
        location: "Lake Mary, FL (remote)",
        company: "SkillStorm",
        skills: ["Amazon Web Services", "React", "Java", "MySQL"]
    }
]

const projects = [
    {
        title: "CPA Management Software",
        description: "At SkillStorm, I designed and deployed a secure full-stack application for a CPA to manage client work. The project utilized MySQL, Spring Boot, and React, and was fully hosted on AWS. I applied defense-in-depth principles to reduce the application’s attack surface across all layers, and configured a custom AWS Virtual Private Cloud with public/private subnets, NAT gateways, and routing tables to securely isolate services and control traffic flow.",
        date: "February 2025 - April 2025",
        company: "SkillStorm",
        skills: ["Amazon Web Services", "React", "Java", "MySQL, REST API's"]
    }, {
        title: "ICD-10 Verification Tool",
        description: "At Reliant HouseCalls, I developed a web scraping tool using BeautifulSoup and Pandas to extract billable and non-billable ICD-10 codes from official sources. I then automated the verification of Chronic Care Management billing entries, identifying invalid codes and exporting them to a dedicated spreadsheet for review. This significantly enhanced billing accuracy, reduced manual error-checking, and streamlined the overall verification workflow.",
        date: "December 2024 - February 2025",
        company: "Reliant HouseCalls",
        skills: ["Python", "Pandas", "BeautifulSoup"]
    }, {
        title: "Insurance Liability Bucket Report",
        description: "I led a comprehensive data clean-up effort across 300,000+ transactions, dramatically improving the accuracy of financial records and boosting reporting performance. Using MySQL, I performed a detailed analysis of insurance reimbursement rates by payor, providing actionable insights that supported more effective revenue cycle management and improved overall reimbursement efficiency.",
        date: "June 2024 - July 2025",
        company: "Reliant HouseCalls",
        skills: ["MySQL", "Python", "Java"]
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
        title: "CompTIA™ Security+",
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
        <div className="App d-flex bg-dark text-light fadeIn">
            <Container>
                <Row>
                    <Col md={5} xs={12} className='h-100 mw-100 sticky'>
                        <Container id="sidebar-content">
                            <Container className='sticky p-3 p-md-5 text-center text-md-start'>
                                <Container>
                                    <h1>Leah Sattar</h1>
                                    <p className='text-purple'>Full Stack Developer<br /><span className='text-pink'>CompTIA™ Security+ Certified</span></p>
                                    <Container className='d-block d-md-none text-center text-md-start'><SocialIcons></SocialIcons></Container>
                                    <h3 className='d-none d-lg-block'>Welcome to my portfolio</h3>
                                </Container>

                                <Nav className="flex-column text-start ms-5 w-25 d-none d-md-block">
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
                            <Container className="p-5 position-fixed bottom-0 start-0 p-2 bg-transparent text-light rounded w-auto d-none d-md-block" id='social-icons'> <SocialIcons></SocialIcons></Container>
                        </Container>
                    </Col>
                    <Col md={7} xs={12}>
                        <main className="main-content flex-grow-1 overflow-auto p-2 p-md-5 fadeInLong" id="main-content">
                            <section id="about" className="mb-5">
                                <h3>About Me</h3>
                                <p>
                                    Nice to meet you! I'm Leah Sattar, a full-stack developer with a strong focus on security, DevOps, and building efficient, scalable solutions. I thrive on solving complex challenges and streamlining development processes across cloud platforms like <b className='text-purple'>Amazon Web Services</b> and <b className='text-purple'>Google Cloud Platform</b>.
                                </p>
                                <p>
                                    I've built full-stack applications that address real business needs while working with teams at <b className='text-purple'>SkillStorm</b> and <b className='text-purple'>Reliant HouseCalls</b>. In the healthcare space, I’ve also used <b className='text-purple'>Epic Clarity</b> and <b className='text-purple'>MySQL</b> to analyze clinical and operational data, helping drive informed decision-making and improve patient care outcomes.
                                </p>
                                <p>
                                    Beyond coding, I enjoy spending time with my four cats, mastering Dance Dance Revolution, and experimenting in the kitchen.
                                </p>
                                <h5 className='text-purple'>I am experienced in: </h5>
                                <SkillMarquee></SkillMarquee>
                                <br></br>
                                <Link to="/about-me" className="text-purple purple-link fw-bold">Read more about me →</Link>
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
                                                skills={experience.skills}
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
                                                skills={project.skills}
                                            />
                                        </Col>
                                    ))}
                                </Row>
                                <Link to="/projects" className="text-purple purple-link fw-bold">Read about all of my projects →</Link>
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
                                <hr></hr>
                                <p className='pt-3 text-center text-xxl-start'>Thank you to <a href="https://freedns.afraid.org/" target="blank" className='purple-link'>FreeDNS </a>
                                    | Icons from <a href="https://www.flaticon.com/" target='blank' className='purple-link'>Flaticons</a> and <a href="https://www.icons8.com" target='blank' className='purple-link'>Icons8</a></p>
                                <Container className='d-block d-md-none text-center text-md-start'><p>Let's get in touch!</p><SocialIcons></SocialIcons></Container>
                            </section>
                        </main>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}