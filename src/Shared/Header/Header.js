import React from 'react';
import { Container, Form, FormControl, Nav, Navbar, Button, NavDropdown } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import logo from '../../assets/logo/Logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import './Header.css';


const Header = () => {
    return (
        <Navbar bg="transparent" expand="lg" sticky="top">
            <Container>
                <Navbar.Brand className="me-5" as={HashLink} to="/home"><img src={logo} style={{width: '100px'}} alt="logo" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll" className="lg:ms-5">
                    <Form className="d-flex me-auto my-2 my-lg-0 search-input"
                        style={{ maxHeight: '100px', width: '40%' }}
                        navbarScroll>
                        <FormControl
                        type="search"
                        placeholder="Search your destination"
                        className="me-2 ps-5 border-warning"
                        aria-label="Search"
                        />
                        <FontAwesomeIcon className="search-icon fs-5" icon={faSearch} />
                        
                    </Form>
                    <Nav
                        className="my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                    >
                        <Nav.Link className="me-3 fs-5 text-black" as={HashLink} to="/home">Home</Nav.Link>
                        <Nav.Link className="me-3 fs-5 text-black" as={HashLink} to="/destination">Destination</Nav.Link>
                        <Nav.Link className="me-3 fs-5 text-black" as={HashLink} to="/blogs">Blog</Nav.Link>
                        <Nav.Link className="me-3 fs-5 text-black" as={HashLink} to="/contact">Contact</Nav.Link>
                        <Button className="px-4 py-2" variant="warning">Login</Button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;