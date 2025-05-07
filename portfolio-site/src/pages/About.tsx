import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Carousel, Button, ToggleButton, ButtonGroup } from 'react-bootstrap';
import { useState } from "react";
import Image from 'react-bootstrap/Image';
import placeholderImg from '../images/placeholder.jpg';



const timelineEvents = [
    {
        date: "June 2019",
        title: "Started at Reliant HouseCalls",
        description: `Then operating under the Prime Healthcare group, I began my career with Reliant as a front desk receptionist. After settling into my new position, I saw a deficit in the current technologies that we were using, mainly not taking advantage of the insane power that spreadsheets can hold (this is a safespace for Excel lovers). I would spend the next two years working to improve the efficiency of all of our processes, while also juggling additional responsibilities that the COVID-19 pandemic brought.`
    },
    {
        date: "August 2021",
        title: "Started at Manchester Community College",
        description: `After digging deeper, I realized that the best way to proceed with developing more advanced code and functionality to my blossoming IT systems was to receive formal training. I chose to enroll at Manchester Community College to continue my career. I only took one class because I was not confident in myself, but I passed with flying colors and dove headfirst into becoming an overtime student.`
    },
    {
        date: "December 2022",
        title: "Graduated from MCC",
        description: `After 3 semesters full of ups and downs, I graduated Summa Cum Laude from Manchester Community College. I was in the Bachelor's degree pathway, with the curriculum designed to provide a smooth transition to Central Connecticut State University's comp sci program. I was accepted into the Honors program with a cybersecurity specialization. Life had other things in store for me though.`
    },
    {
        date: "January 2023",
        title: "Moved to Florida",
        description: `You really never know what life is going to throw at you, and for me, I did not expect to start dating one of my best friends who, for better or worse, lived 1500 miles away in Florida. Rather than wait another 2 years for me to finish my bachelor's degree at CCSU, I chose to move down to Florida to be with my partner. I am very fortunate that I was able to continue working with Reliant HouseCalls remotely.`
    },
    {
        date: "August 2023",
        title: "Started at Seminole State College",
        description: `Along with other things that did not end up working out as expected, when I decided to move to Florida, I also applied to the University of Central Florida, and was accepted! Unfortunately, I discovered that most of the classes were in person, which was not compatible with my full-time work. My local community college offered a wonderful bachelor's degree program in Information Systems Technology that fit my busy work schedule. I took some time off of school to spare me the full brunt of out-of-state tuition.`
    },
    {
        date: "June 2024",
        title: "Full CCM Overhaul",
        description: `Remember when I said that our tech stack was lacking in my work? Well, finally armed with all of the knowledge I needed, I began a full overhaul of our Chronic Care Management billing process. I constructed a database, transformed the data entry process, and controlled how the data is processed and returned. It is my magnum opus and the work I am most proud of.`
    },
    {
        date: "December 2024",
        title: "Graduated from SSC",
        description: `3.5 years later, after (thankfully) no blood, some sweat, and many tears, I emerged from SSC with my Bachelor of Science in Information Systems Technology. I learned so much yet knew I had so much more to learn.`
    },
    {
        date: "February 2025",
        title: "Started at SkillStorm",
        description: `After 4 interviews, a lot of studying, and anticipating the next phone call, I was hired on by Skillstorm for their AWS DevSecOps training. It was easily one of the highlights of my career, and I was able to learn so much during my training, including Spring Boot, React, and AWS (we also covered MySQL, but databases are definitely my specialty).`
    },
    {
        date: "April 2025",
        title: "Security+ Certified",
        description: `In order to advance my career and sharpen my cybersecurity foundation, I pursued the CompTIA Security+ certification. After three intense weeks of studying and memorizing more acronyms than I thought could possibly exist, I earned my first official IT certification`
    }
];

export const About = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [radioValue, setRadioValue] = useState('0');

    const handleSelect = (selectedIndex: number) => {
        setActiveIndex(selectedIndex);
        setRadioValue(String(selectedIndex));
    };

    return (
        <Container className="bg-dark w-100 px-0 mx-0">
            <Row>
                <Col><h1>About Me</h1></Col>
            </Row>
            <Row>
                <p>Thanks for taking the time to learn a bit more about me!</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
            </Row>
            <Container>
                <Row>
                    <Col md={6}>
                        <p>Something here</p>
                    </Col>
                    <Col md={6}>
                        <Image src={placeholderImg} fluid className="object-fit-contain mh-50"></Image>
                    </Col>
                </Row>
            </Container>

            <Container>
                <h3>My Story</h3>
                <Container className="mb-3">
                    {timelineEvents.map((event, index) => (
                        <ToggleButton className="me-2 ms-2"
                            key={index}
                            id={`timeline-${index}`}
                            type="radio"
                            variant="outline-light"
                            name="timeline"
                            value={String(index)}
                            checked={radioValue === String(index)}
                            onChange={(e) => {
                                const newIndex = Number(e.currentTarget.value);
                                setActiveIndex(newIndex);
                                setRadioValue(e.currentTarget.value);
                            }}
                        >
                            {event.date}
                        </ToggleButton>
                    ))}
                </Container>
                <Carousel className="pb-5 w-75 mx-auto"
                    activeIndex={activeIndex}
                    onSelect={handleSelect}
                    indicators={false}
                    interval={null}
                    variant="dark"
                    controls={false}
                >
                    {timelineEvents.map((event, idx) => (
                        <Carousel.Item key={idx}>
                            <div
                                className="p-5 bg-dark text-light text-center d-flex flex-column justify-content-center align-items-center"
                                style={{ height: "400px", overflowY: "auto" }}
                            >
                                <h3 className="text-purple">{event.title}</h3>
                                <p className="text-secondary">{event.date}</p>
                                <p style={{ maxHeight: "200px", overflowY: "auto" }}>
                                    {event.description}
                                </p>
                            </div>
                        </Carousel.Item>
                    ))}
                </Carousel>
            </Container>
            <Container>
                <Row>
                    <h3>What I've Accomplished</h3>
                </Row>
            </Container>
            <Container>
                <Row>
                    <h3>What's Next?</h3>
                </Row>
            </Container>
        </Container>
    );
};
