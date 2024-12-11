import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube, faFacebook, faTwitterSquare } from "@fortawesome/free-brands-svg-icons";
import { Container, Navbar } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";

const Footer = () => {
    return (
        <Navbar bg="dark" variant="dark" className="footer">
            <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: "40px" }}>
                <Nav className="d-flex justify-content-center align-items-center">
                    <Nav.Link
                        href="https://www.facebook.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: "gold", fontSize: "2rem", margin: "0 15px" }}
                    >
                        <FontAwesomeIcon icon={faFacebook} />
                    </Nav.Link>
                    <Nav.Link
                        href="https://www.youtube.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: "gold", fontSize: "2rem", margin: "0 15px" }}
                    >
                        <FontAwesomeIcon icon={faYoutube} />
                    </Nav.Link>
                    <Nav.Link
                        href="https://www.twitter.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: "gold", fontSize: "2rem", margin: "0 15px" }}
                    >
                        <FontAwesomeIcon icon={faTwitterSquare} />
                    </Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default Footer;
