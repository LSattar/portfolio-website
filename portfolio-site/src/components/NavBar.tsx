import { NavLink } from "./NavLink";
import "../css/navbar.css"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

type LinkType = {
    linkName: string;
    linkDestination: string;
}

export const NavBar = () => {
    const links: LinkType[] = [
        { linkName: "Home", linkDestination: "/" },
        { linkName: "About Me", linkDestination: "/about-me" },
        { linkName: "Projects", linkDestination: "/projects" }
    ];

    return (
        <Navbar bg="light" variant="light" expand="lg" className="mb-4">
            <Container>
                <Navbar.Brand href="/">Leah Sattar</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto">
                        {links.map((link) => (
                            <Nav.Link
                                as="span"
                                key={link.linkName}
                                className="mx-2"
                            >
                                <NavLink linkObject={link} />
                            </Nav.Link>
                        ))}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};