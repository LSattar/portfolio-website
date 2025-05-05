import { NavLink } from "./NavLink";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export const Footer = () => {
    return (
        <footer className="bg-light text-dark py-3 border-top">
            <Container>
                <Row>
                    <Col md={6}>
                        <h5>Thanks for looking!</h5>
                        <p>Please contact me if you are interested in working on a project or collaboration.</p>
                    </Col>
                    <Col md={3}>
                        <h6>Get in touch!</h6>
                        <p>Email: leah@example.com</p>
                    </Col>
                    <Col md={3}>
                        <h6>Follow me</h6>
                        <p>LinkedIn | GitHub</p>
                    </Col>
                </Row>
                <Row className="mt-2">
                    <Col className="text-center">
                        <small>&copy; {new Date().getFullYear()} LeahSattar.com</small>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};