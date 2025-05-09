import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Carousel, Button, ToggleButton, ButtonGroup } from 'react-bootstrap';
import { useState } from "react";
import Image from 'react-bootstrap/Image';
import Counter from '../components/Counter'
import { DetailedProjectCard } from "../components/DetailedProjectCard";
import { Link } from "react-router-dom";
import pythonImg from '../images/python-black.png'
import cloudImg from '../images/cloud-computing.png'
import mySQLImg from '../images/mysql.png'
import androidImg from '../images/android.png'
import googleImg from '../images/google-cloud.svg'

const projects = [
    {
        title:"CCM Overhaul",
        description: "I overhauled Reliant HouseCalls’ entire Chronic Care Management process by designing and implementing a custom database hosted on Google Cloud Platform to improve data entry, processing, and storage. This system streamlined billing, enabled more efficient auditing, and replaced outdated manual workflows with a scalable, automated solution. The project is ongoing, and I continue to support and enhance the system to help Reliant achieve optimal efficiency in their chronic care program.",
        date: "June 2024 - Present",
        company: "Reliant HouseCalls",
        skills: ["Google Cloud Platform","JavaScript","Python"],
        imageUrl: cloudImg
    },
    {
        title: "CPA Management Software",
        description: "I designed and deployed a secure full-stack application for a CPA to manage client work. The project utilized MySQL, Spring Boot, and React, and was fully hosted on AWS. I applied defense-in-depth principles to reduce the application’s attack surface across all layers, and configured a custom AWS Virtual Private Cloud with public/private subnets, NAT gateways, and routing tables to securely isolate services and control traffic flow.",
        date: "February 2025 - April 2025",
        company: "SkillStorm",
        skills: ["Amazon Web Services", "React", "Python", "MySQL", "REST API's"],
        imageUrl: cloudImg

    }, {
        title: "ICD-10 Verification Tool",
        description: "I developed a web scraping tool using BeautifulSoup and Pandas to extract billable and non-billable ICD-10 codes from official sources. I then automated the verification of Chronic Care Management billing entries, identifying invalid codes and exporting them to a dedicated spreadsheet for review. This significantly enhanced billing accuracy, reduced manual error-checking, and streamlined the overall verification workflow.",
        date: "December 2024 - February 2025",
        company: "Reliant HouseCalls",
        skills: ["Python", "Pandas", "BeautifulSoup"],
        imageUrl: pythonImg
    },{
        title: "Home Design Solutions Website",
        description: "I served as the lead database developer for the Home Design Solutions website project. I designed and implemented a cloud-hosted relational database to manage customer, employee, sales, and inventory data. To enforce secure and controlled access, I created views and stored procedures. I also contributed to the backend by writing PHP and session-handling logic, ensuring that only authorized employees could access sensitive data from the frontend.",
        date: "August 2024 - December 2024",
        company: "Seminole State College",
        skills: ["Google Cloud Platform", "MySQL", "PHP", "HTML"],
        imageUrl: cloudImg

    }, {
        title: "Insurance Liability Bucket Report",
        description: "I led a comprehensive data clean-up effort across 300,000+ transactions, dramatically improving the accuracy of financial records and boosting reporting performance. Using MySQL, I performed a detailed analysis of insurance reimbursement rates by payor, providing actionable insights that supported more effective revenue cycle management and improved overall reimbursement efficiency.",
        date: "June 2024 - July 2025",
        company: "Reliant HouseCalls",
        skills: ["TypeScript", "React", "Python", "MySQL"],
        imageUrl: mySQLImg
    },
    {
        title: "Grocery List App",
        description: "I developed a mobile Android application that helps users create and store personalized recipes using a local SQLite database. Based on the selected recipes, the app generates a categorized weekly grocery list, and integrates with TheMealDB API to suggest and import additional recipes. I implemented structured data handling, API integration, and responsive UI design to ensure a smooth and efficient user experience.",
        date: "February 2024 - May 2024",
        company: "Seminole State College",
        skills: ["Android Studio", "Java", "SQLite", "MySQL"],
        imageUrl: androidImg
    }
]

export const Projects = () => {

    const [activeIndex, setActiveIndex] = useState(0);
    const [radioValue, setRadioValue] = useState('0');

    const handleSelect = (selectedIndex: number) => {
        setActiveIndex(selectedIndex);
        setRadioValue(String(selectedIndex));
    };

    return (
        <Container className="pt-5 fadeIn">
            <Link to="/" className="text-purple fw-bold">← Back</Link>
            <h3>Projects</h3>
            <p>Welcome to my projects page! I am lucky to have been able to work on a variety of meaningful projects that involve backend, frontend, database development, and everything in between!</p>
            <Row>
                <h3 className="text-center text-xl-start">My Impact</h3>
                <Row className="text-center text-purple color-change">
                    <Col xl={4} xs={12} className="" >
                        <div><Counter target={32} suffix={'+'}></Counter></div>
                        <p className="stat-label color-change">Hours Saved Monthly Through Automation and Optimization</p>
                    </Col>
                    <Col xl={4} xs={12} className=""><div><Counter target={300} suffix={'k'}></Counter></div>
                        <p className="stat-label color-change">Business Transactions Cleaned, Analyzed, and Reported</p>
                    </Col>
                    <Col xl={4} xs={12} className="">
                        <div><Counter target={250} suffix={'%'}></Counter></div>
                        <p className="stat-label color-change">Efficiency Gain in Monthly Billing Processes</p>
                    </Col>
                </Row>
            </Row>
            <Row>
                <h3>My Projects</h3>
                <Row>
                    {projects.map((project, index) => (
                        <Col key={index}
                        xs={12}      
                        md={6} 
                        xl={4}        className="mb-4 ">
                            <DetailedProjectCard
                                title={project.title}
                                description={project.description}
                                date={project.date}
                                company={project.company}
                                skills={project.skills}
                                imageUrl={project.imageUrl}
                            />
                        </Col>
                    ))}
                </Row>
            </Row>
        </Container>

    )
}