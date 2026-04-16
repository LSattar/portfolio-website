import '../App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { ProjectCard } from '../components/ProjectCard';
import { ExperienceCard } from '../components/ExperienceCard';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { EducationCard } from '../components/EducationCard';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import { SkillMarquee } from '../components/SkillMarquee';
import { SocialIcons } from '../components/SocialIcons';

const experience = [
    {
        title: "Fullstack Software Engineer",
        description: "At SkillStorm, I was selected as a Full Stack Engineer to work on projects for FinCEN. During my time there, I developed multiple full-stack applications including an inventory managment software, hotel reservation platform, and FinCEN SAR/CTR processor. I am equipped with practical experience in cloud deployment and secure development practices.",
        date: "February 2025 - Present",
        location: "Lake Mary, FL (remote)",
        company: "SkillStorm",
        skills: ["Amazon Web Services", "Angular", "Java", "MySQL"]
    },
    {
        title: "Backend Coordinator",
        description: "At Reliant HouseCalls, I supported a small team of healthcare providers by improving and automating billing and administrative processes. I successfully streamlined the Chronic Care Management billing workflow, enhancing data entry, management, and auditing, dramatically increasing both operational efficiency and data integrity. In addition to my development work, I also provided financial analysis, reporting, and light technical support to ensure smooth day-to-day operations.",
        date: "June 2019 - February 2025",
        location: "Vernon, CT (remote)",
        company: "Reliant HouseCalls, PLLC",
        skills: ["Python", "Google Cloud Platform", "MySQL"]
    }
]

const projects = [
    {
        title: "Nimbus Care Manager",
        description: "I served as the principal architect and developer for Nimbus Care Manager. Nimbus is a web-based application that allows healthcare providers and administrators to efficiently track, bill, and manage patient care. The application is hosted on AWS, with cost, efficiency, performance, and security in mind. Nimbus Care Manager is responsible for the care of over 2000 active patients, and still being actively developed and improved after launch.",
        date: "April 2025 - Present",
        company: "SkillStorm",
        skills: ["Amazon Web Services", "Spring Boot", "React", "MySQL", "REST API's"]
    },
    {
        title: "Finsight",
        description: "At SkillStorm, I and a team of 2 other software engineers developed and deployed a fully functioning application for FinCEN to process and manage SAR/CTR forms, track suspects, and refer cases to law enforcement. The application supported multiple roles for different users of the application, including law enforcement, FinCEN analysts, and compliance users from financial institutions. This project used an Aurora database running MySQL, multiple microservices created with Spring Boot, and an Angular frontend.",
        date: "February 2025 - April 2025",
        company: "SkillStorm",
        skills: ["Amazon Web Services", "OAuth2", "Angular", "Java", "MySQL", "Microservices"]
    },
    {
        title: "ICD-10 Verification Tool",
        description: "At Reliant HouseCalls, I developed a web scraping tool using BeautifulSoup and Pandas to extract billable and non-billable ICD-10 codes from official sources. I then automated the verification of Chronic Care Management billing entries, identifying invalid codes and exporting them to a dedicated spreadsheet for review. This significantly enhanced billing accuracy, reduced manual error-checking, and streamlined the overall verification workflow. This web scraper would also assist in the creation of Nimbus Care Manager.",
        date: "December 2024 - February 2025",
        company: "Reliant HouseCalls",
        skills: ["Python", "Pandas", "BeautifulSoup"]
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
    }
]

const certifications = [
    {
        title: "Oracle Certified Associate, Java SE 8",
        date: "March 2026",
        school: "Oracle",
        location: "",
        description: ""
    },
    {
        title: "AWS Solutions Architect - Associate",
        date: "January 2026 - January 2029",
        school: "Amazon",
        location: "",
        description: ""
    },
    {
        title: "AWS Cloud Practitioner",
        date: "December 2025 - December 2028",
        school: "Amazon",
        location: "",
        description: ""
    },
    {
        title: "Java Foundations Certified Associate",
        date: "December 2025",
        school: "Oracle",
        location: "",
        description: ""
    },
    {
        title: "CompTIA™ Security+",
        date: "April 2025 - April 2028",
        school: "CompTIA™",
        location: "",
        description: ""
    }
]

export const Index = () => {

    const [activeSection, setActiveSection] = React.useState("");

    React.useEffect(() => {
        const sectionIds = ["about", "experience", "projects", "certifications", "education"];
        const scrollRoot = document.getElementById("main-content");
        if (!scrollRoot) return;

        const observerOptions = {
            root: scrollRoot,
            threshold: Array.from({ length: 101 }, (_, i) => i / 100),
        };

        const observer = new IntersectionObserver((entries) => {
            const best = entries
                .filter((e) => e.intersectionRatio > 0.3)
                .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
            if (best) {
                setActiveSection(best.target.id);
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
                                    <p className='text-purple'>Full Stack Developer<br /><span className='text-pink'>Certified AWS Solutions Architect</span></p>
                                    <Container className='d-block d-md-none text-center text-md-start'><SocialIcons></SocialIcons></Container>
                                    <h3 className='d-none d-lg-block'>Welcome to my portfolio</h3>
                                </Container>

                                <Nav className="flex-column text-start ms-5 w-25 d-none d-md-block">
                                    <Nav.Item>
                                        <Nav.Link href="#about" active={activeSection === "about"} className="px-0 text-purple nav-link-custom ps-2" onClick={() => setActiveSection("about")}>About</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link href="#experience" active={activeSection === "experience"} className="px-0  text-purple nav-link-custom ps-2" onClick={() => setActiveSection("experience")}>Experience</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link href="#projects" active={activeSection === "projects"} className="px-0  text-purple nav-link-custom ps-2" onClick={() => setActiveSection("projects")}>Projects</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link href="#certifications" active={activeSection === "certifications"} className="px-0  text-purple nav-link-custom ps-2" onClick={() => setActiveSection("certifications")}>Certifications</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link href="#education" active={activeSection === "education"} className="px-0  text-purple nav-link-custom ps-2" onClick={() => setActiveSection("education")}>Education</Nav.Link>
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
                                    I've built full-stack applications that address real business needs while working with teams at <b className='text-purple'>SkillStorm</b> and <b className='text-purple'>Your Family House Calls</b>. In the healthcare space, I’ve also used <b className='text-purple'>Epic Clarity</b> and <b className='text-purple'>MySQL</b> to analyze clinical and operational data, helping drive informed decision-making and improve patient care outcomes.
                                </p>
                                <p>
                                    Beyond coding, I enjoy spending time with my four cats, mastering Dance Dance Revolution, and experimenting in the kitchen.
                                </p>
                                <h5 className='text-purple'>I have experience with: </h5>
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
                            <section id="certifications" className="mb-5 fadeInRight">
                                    <h3>Certifications</h3>
                                    <Row>
                                    {certifications.map((certifications, index) => (
                                        <Col md={12} className="mb-4" key={index}>
                                            <EducationCard
                                                title={certifications.title}
                                                school={certifications.school}
                                                description={certifications.description}
                                                date={certifications.date}
                                                location={certifications.location}
                                            />
                                        </Col>
                                    ))}
                                    </Row>
                                    <Link to="https://www.credly.com/users/leah-sattar" className="text-purple purple-link fw-bold" target='blank'>Verify my certifications on Credly →</Link>
                            </section>
                            <section id="education" className="mb-5">
                                <h3>Education</h3>
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