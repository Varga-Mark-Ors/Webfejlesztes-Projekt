import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFutbol } from '@fortawesome/free-regular-svg-icons';
import { Container, NavbarCollapse } from "react-bootstrap"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import { NavLink } from "react-router-dom"
import Button from "react-bootstrap/Button";


const Header = () => {
    return (
        <Navbar bg = "dark" variant = "dark" expands = "lg">
            <Container fluid>
                <Navbar.Brand href="https://varga-mark-ors.github.io/Webfejlesztes-Projekt/" style={{"color":'gold'}}>
                    <FontAwesomeIcon icon ={faFutbol} /> Wiki
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <NavbarCollapse id = "navbarScroll">
                        <Nav className="me-auto my-2 my-lg-0"
                            style={{maxHeight:`100px`}}
                            navbarScroll
                        >
                        <NavLink className="nav-link" to= "/Webfejlesztes-Projekt/">Home</NavLink>
                        <NavLink className="nav-link" to="/Webfejlesztes-Projekt/team">Team</NavLink>
                        <NavLink className="nav-link" to= "/Webfejlesztes-Projekt/player">Players</NavLink>
                    </Nav>
                    <Button variant="outline-info" className="me-2">Login</Button>
                    <Button variant="outline-info" className="me-2">Register</Button>
                </NavbarCollapse>
            </Container>
        </Navbar>
    )
}

export default Header