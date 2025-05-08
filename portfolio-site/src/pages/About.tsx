import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Carousel, Button, ToggleButton, ButtonGroup } from 'react-bootstrap';
import { useState, useRef, useEffect } from "react";
import Image from 'react-bootstrap/Image';
import placeholderImg from '../images/placeholder.jpg';
import catImg from '../images/cat.png'
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Link } from "react-router-dom";
import secPlusImg from '../images/sec-plus-white.png'
import Counter from '../components/Counter'




const timelineEvents = [
    {
        date: "June 2019",
        title: "Started at Reliant HouseCalls",
        icon: "bi-briefcase",
        description: `Then operating under the Prime Healthcare group, I began my career with Reliant as a front desk receptionist. After settling into my new position, I saw a deficit in the current technologies that we were using, mainly not taking advantage of the insane power that spreadsheets can hold (this is a safespace for Excel lovers). I would spend the next two years working to improve the efficiency of all of our processes, while also juggling additional responsibilities that the COVID-19 pandemic brought.`
    },
    {
        date: "August 2021",
        title: "Started at Manchester Community College",
        icon: "bi-backpack",
        description: `After digging deeper, I realized that the best way to proceed with developing more advanced code and functionality to my blossoming IT systems was to receive formal training. I chose to enroll at Manchester Community College to continue my career. I only took one class because I was not confident in myself, but I passed with flying colors and dove headfirst into becoming an overtime student.`
    },
    {
        date: "December 2022",
        title: "Graduated from MCC",
        icon: "bi-mortarboard",
        description: `After 3 semesters full of ups and downs, I graduated Summa Cum Laude from Manchester Community College. I was in the Bachelor's degree pathway, with the curriculum designed to provide a smooth transition to Central Connecticut State University's comp sci program. I was accepted into the Honors program with a cybersecurity specialization. Life had other things in store for me though.`
    },
    {
        date: "January 2023",
        title: "Moved to Florida",
        icon: "bi-house",
        description: `You really never know what life is going to throw at you, and for me, I did not expect to start dating one of my best friends who, for better or worse, lived 1500 miles away in Florida. Rather than wait another 2 years for me to finish my bachelor's degree at CCSU, I chose to move down to Florida to be with my partner. I am very fortunate that I was able to continue working with Reliant HouseCalls remotely.`
    },
    {
        date: "August 2023",
        title: "Started at Seminole State College",
        icon: "bi-backpack",
        description: `Along with other things that did not end up working out as expected, when I decided to move to Florida, I also applied to the University of Central Florida, and was accepted! Unfortunately, I discovered that most of the classes were in person, which was not compatible with my full-time work. My local community college offered a wonderful bachelor's degree program in Information Systems Technology that fit my busy work schedule. I took some time off of school to spare me the full brunt of out-of-state tuition.`
    },
    {
        date: "June 2024",
        title: "Full CCM Overhaul",
        icon: "bi-code-square",
        description: `Remember when I said that our tech stack was lacking in my work? Well, finally armed with all of the knowledge I needed, I began a full overhaul of our Chronic Care Management billing process. I constructed a database, transformed the data entry process, and controlled how the data is processed and returned. It is my magnum opus and the work I am most proud of.`
    },
    {
        date: "December 2024",
        title: "Graduated from SSC",
        icon: "bi-mortarboard",
        description: `3.5 years later, after (thankfully) no blood, some sweat, and many tears, I emerged from SSC with my Bachelor of Science in Information Systems Technology. I learned so much yet knew I had so much more to learn.`
    },
    {
        date: "February 2025",
        title: "Started at SkillStorm",
        icon: "bi-briefcase",
        description: `After 4 interviews, a lot of studying, and anticipating the next phone call, I was hired on by Skillstorm for their AWS DevSecOps training. It was easily one of the highlights of my career, and I was able to learn so much during my training, including Spring Boot, React, and AWS (we also covered MySQL, but databases are definitely my specialty).`
    },
    {
        date: "April 2025",
        title: "Security+ Certified",
        icon: "bi-patch-check",
        description: `In order to advance my career and sharpen my cybersecurity foundation, I pursued the CompTIA™ Security+ certification. After three intense weeks of studying and memorizing more acronyms than I thought could possibly exist, I earned my first official IT certification`
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
        <Container className="pt-5 pb-5 fadeIn">
            <Link to="/" className="text-purple purple-link fw-bold">← Back</Link>
            <Row>
                <Col md={6}><h3>About Me</h3>
                    <p>Thanks for taking the time to get to know a bit more about me. <em>Where do I start?</em></p>
                    <p>I've been working fulltime in healthcare administration since I was 19, and returned back to school when I was 21. Juggling being a full-time student and a full-time working put my multi-tasking, prioritization, and determination to the test.</p>
                    <p>I love working in tech because I get to solve large problems by creating innovative solutions, all while giving my brain a nice workout. Being surrounded by nurses and doctors during the COVID-19 pandemic inspired me to want to do big things, and my dream is for my ideas to shape the world, or at least improve some lives.</p>
                    <p>It's probably no surprise that someone who is working in IT is into video games, but I feel that it deserves a mention. In particular, I love Dance Dance Revolution and <a href="https://youtu.be/qEMGxnC6Mfg?si=ruN8gQ_GPJGnfHLw" target="blank" className="purple-link">Pump it Up</a>. Arcade gaming not only helps me keep in shape, but it has also brought me to some of my best friends, and taken me out of my comfort zone. Besides that, I am a huge fan of the Elder Scrolls Games as well as Baldur's Gate. Anything that can get me immersed in a different world is a big draw to me.</p>
                    <p>Food is my love language and being able to bake for my friends and family brings me so much joy. I worked briefly at Crumbl Cookie during my last months in Connecticut, where I learned many new techniques to up my baking game. I've made everything from multi-layer cakes, macarons, royal icing cookies, and home made ice cream. Food is how I express myself, and I love how my food creates an experience and memories for those who get to consume it.</p>
                </Col>
                <Col md={6}>
                    <div
                        style={{
                            maxHeight: '400px',
                            width: '100%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <Image
                            src={placeholderImg}
                            style={{
                                maxHeight: '100%',
                                maxWidth: '100%',
                                objectFit: 'contain',
                            }}
                            fluid
                        />
                    </div>
                </Col>

            </Row>
            <Row>
                <h3>My Story</h3>
                <p>Truth be told, until relatively recently, I never really saw myself working in computer science. It wasn't until I was put into real world situations where I saw the need to use these skills to solve real problems. I am so lucky and grateful that I was able to find work that sparked my passion and drove me into the field I love so dearly.</p>
                <p>My journey has been full of high, lows, hardwork, sleepless nights, joyous celebrations, and everything in between. I am incredibly proud of what I've done to get here, and I can't wait to see what the future holds in store for me.</p>
                <div className="d-flex flex-nowrap">
                    {timelineEvents.map((event, index) => (
                        <ToggleButton
                            className={`me-2 ms-2 border-0 ${radioValue === String(index) ? 'btn-pink-active' : ''}`}
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
                </div>
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
                                className="p-5 text-light text-center d-flex flex-column justify-content-center align-items-center"
                                style={{ height: "500px", overflowY: "auto" }}
                            >
                                <i className={`bi ${event.icon} fs-1 mb-3 text-purple`}></i>
                                <h3 className="text-purple">{event.title}</h3>
                                <p className="text-secondary">{event.date}</p>
                                <p style={{ maxHeight: "200px", overflowY: "auto" }}>
                                    {event.description}
                                </p>
                            </div>
                        </Carousel.Item>
                    ))}
                </Carousel>
            </Row>

            <Row>
                <h3>What's Next?</h3>
                <p>Like many new grads and junior developers, I am eager to sink my teeth in and continue learning more. I love working in cybersecurity, backend development, and database development, particularly in the healthcare industry. However, I am ready and willing to learn anything anyone has to throw at me.</p>
            </Row>

        </Container>

    );
};
