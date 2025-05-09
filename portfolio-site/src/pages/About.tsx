import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Carousel, Button, ToggleButton, ButtonGroup } from 'react-bootstrap';
import { useState, useRef, useEffect } from "react";
import Image from 'react-bootstrap/Image';
import headshotImg from '../images/headshot1.jpg';
import catImg from '../images/cat.png'
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Link } from "react-router-dom";
import secPlusImg from '../images/sec-plus-white.png'
import Counter from '../components/Counter'
import { SocialIcons } from "../components/SocialIcons";
import { TimelineCarousel } from '../components/TimelineCarousel'


const timelineEvents = [
    {
        date: "June 2019",
        title: "Started at Reliant HouseCalls",
        icon: "bi-briefcase",
        description: `Then operating under the Prime Healthcare group, I began my career with Reliant as a front desk receptionist. After settling into my new position, I noticed a deficit in the technologies we were using, the main one was not taking advantage of the incredible power spreadsheets can offer (this is a safe space for Excel lovers). Over the next two years, I worked to improve the efficiency of our processes while also juggling the additional responsibilities brought on by the COVID-19 pandemic.`
    },
    {
        date: "August 2021",
        title: "Started at Manchester Community College",
        icon: "bi-backpack",
        description: `After digging deeper, I realized the best way to bring more advanced code and functionality to my blossoming IT systems was to receive formal training. I enrolled at Manchester Community College to continue my career. I started by taking just one class because I wasn’t confident in myself, but I passed with flying colors and dove headfirst into becoming an overtime student.`
    },
    {
        date: "December 2022",
        title: "Graduated from MCC",
        icon: "bi-mortarboard",
        description: `After three semesters full of ups and downs, I graduated Summa Cum Laude from Manchester Community College. I was in the Bachelor's degree pathway, designed to provide a smooth transition to Central Connecticut State University’s computer science program. I was even accepted into the Honors Program with a cybersecurity specialization. But life had other plans for me.`
    },
    {
        date: "January 2023",
        title: "Moved to Florida",
        icon: "bi-house",
        description: `You never really know what life is going to throw at you. I didn’t expect to start dating one of my best friends, who, for better or worse, lived 1,500 miles away in Florida. Rather than wait another two years to finish my degree at CCSU, I moved to Florida to be with my partner. I was very fortunate to be able to continue working remotely with Reliant HouseCalls.`
    },
    {
        date: "August 2023",
        title: "Started at Seminole State College",
        icon: "bi-backpack",
        description: `Along with other things that didn’t work out as expected, when I moved to Florida, I applied and was accepted to the University of Central Florida. Unfortunately, most of the classes were in person, which didn’t align with my full-time job. Luckily, my local community college offered a wonderful bachelor's degree program in Information Systems Technology that fit my work schedule. I also took some time off to avoid the full brunt of out-of-state tuition.`
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
        description: `Three and a half years later—after (thankfully) no blood, some sweat, and many tears, I graduated from SSC with my Bachelor of Science in Information Systems Technology. I had learned so much, and yet I knew there was still so much more to discover.`
    },
    {
        date: "February 2025",
        title: "Started at SkillStorm",
        icon: "bi-briefcase",
        description: `After four interviews, countless hours of studying, and nervously anticipating the next phone call, I was hired by SkillStorm for their AWS DevSecOps training. It became one of the highlights of my career. I learned so much during the program, including Spring Boot, React, and AWS.`
    },
    {
        date: "April 2025",
        title: "Security+ Certified",
        icon: "bi-patch-check",
        description: `To advance my career and solidify my cybersecurity foundation, I pursued the CompTIA™ Security+ certification. After three intense weeks of studying and memorizing more acronyms than I thought could possibly exist, I earned my first official IT certification.`
    }
];

export const About = () => {

    const [activeIndex, setActiveIndex] = useState(0);
    const [radioValue, setRadioValue] = useState('0');

    const handleSelect = (selectedIndex: number) => {
        setActiveIndex(selectedIndex);
        setRadioValue(String(selectedIndex));
    };

    const scrollRef = useRef<HTMLDivElement | null>(null);

    const scrollTimeline = (offset: number) => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({
                left: offset,
                behavior: 'smooth',
            });
        }
    };

    return (
        <Container className="pt-5 pb-5 fadeIn">
            <Link to="/" className="text-purple purple-link fw-bold">← Back</Link>
            <Row>
                <Col md={12} lg={6}>
                    <h3>About Me</h3>
                    <p>Thanks for taking the time to get to know a bit more about me. <em>Where do I start?</em></p>
                    <p>I've been working fulltime in healthcare administration since I was 19, and returned back to school when I was 21. Juggling being a full-time student and a full-time working put my multi-tasking, prioritization, and determination to the test.</p>
                    <p>I love working in tech because I get to solve large problems by creating innovative solutions, all while giving my brain a nice workout. Being surrounded by nurses and doctors during the COVID-19 pandemic inspired me to want to do big things, and my dream is for my ideas to shape the world, or at least improve some lives.</p>
                    <p>In my spare time, you can often find me playing video games. Whether it's Dance Dance Revolution, <a className="purple-link" href="https://www.youtube.com/watch?v=qEMGxnC6Mfg" target="blank">Pump It Up</a>, or getting lost in the worlds of the Elder Scrolls, I love playing games with or alongside my friends. When I'm not gaming, I'm in the kitchen experimenting with bakes and desserts, from macarons and multi-tier cakes to cannolis and homemade ice cream. And of course, I share my space (and sometimes my keyboard) with four wonderful cats who keep me grounded, entertained, and always covered in just a little bit of fur.</p>
                </Col>
                <Col md={12} lg={6} className="d-flex justify-content-center align-items-center">
                    <div id="headshot-container">
                        <Image
                            src={headshotImg}
                            alt="Headshot"
                            className="headshot-img"
                        />
                        <div className="middle">
                            <SocialIcons />
                        </div>
                    </div>
                </Col>

            </Row>
            <Row>
                <h3>My Journey</h3>
                <p>Truth be told, I didn’t always envision myself working in computer science. It wasn’t until I found myself in real-world situations where I was faced with inefficiencies, data challenges, and the need for creative problem-solving, that I realized how much I loved using technology to make things better. Discovering this passion gave me direction, and I’m so grateful for the path it’s opened up for me.</p> 
                <p>My journey has been anything but linear. It’s been shaped by hard work, late nights, small wins, big lessons, and the belief that each step, even the unexpected ones, has helped me grow. Here’s a look at how I got here.</p>
                <TimelineCarousel timelineEvents={timelineEvents}></TimelineCarousel>
            </Row>
            <Row>
                <h3>What's Next?</h3>
                <p>I'm actively seeking opportunities where I can grow as a developer and contribute to meaningful, impactful work. I'm especially interested in roles related to cybersecurity, backend engineering, or database design. In an ideal world, I would love to continue within industries like healthcare, where technology directly improves lives. That said, I'm always excited to learn something new, take on challenges outside my comfort zone, and continue building tools that make a difference.</p>
            </Row>
        </Container>

    );
};
