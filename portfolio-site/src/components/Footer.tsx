import { NavLink } from "./NavLink";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export const Footer = () => {
    return (
        <footer className="bg-dark text-light py-3 border-top">
            <Container className="text-center">
                <Row>
                    <Col md={4}>
                    <p>Hosted on Digital Ocean | Thank you to FreeDNS</p>
                    </Col>
                    <Col md={4}>
                    <small>&copy; {new Date().getFullYear()} LeahSattar.com</small>
                    </Col>
                    <Col md={4}>
                    <p></p>
                    </Col>
                </Row>
                <Row className="mt-2">
                    <Col className="text-center">
                    <p>Icons sourced from Flaticon.com and Icons8.com</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};