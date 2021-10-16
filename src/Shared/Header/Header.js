import React, { useState } from 'react';
import { Container, Form, FormControl, Nav, Navbar, Button } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import logo from '../../assets/logo/Logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import './Header.css';
import useFirebase from '../../hooks/useFirebase';
import { Link, useLocation } from 'react-router-dom';


const Header = () => {
    const [toggle, setToggle] = useState(false);
    const {user, logOut} = useFirebase()
    let location = useLocation();
    return (
        <Navbar bg="transparent" expand="lg" sticky="top" className="navbar">
            <Container>
                <Navbar.Brand className={location.pathname === '/' || location.pathname === '/home' ? 'me-5 logo' : "me-5"} as={HashLink} to="/"><img src={logo} style={{width: '100px'}} alt="logo" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarscroll" />
                <Navbar.Collapse id="navbarscroll" className="lg:ms-5">
                    <Form className="d-flex me-auto my-2 my-lg-0 search-input"
                        style={{ maxHeight: '100px', width: '40%' }}>
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
                        <Nav.Link className={location.pathname === '/' || location.pathname === '/home' ? 'me-3 fs-5 text-white' : "me-3 fs-5 text-black"} as={HashLink} to="/home">Home</Nav.Link>
                        <Nav.Link className={location.pathname === '/' || location.pathname === '/home' ? 'me-3 fs-5 text-white' : "me-3 fs-5 text-black"} as={HashLink} to="">Destination</Nav.Link>
                        <Nav.Link className={location.pathname === '/' || location.pathname === '/home' ? 'me-3 fs-5 text-white' : "me-3 fs-5 text-black"} as={HashLink} to="/blog">Blog</Nav.Link>
                        <Nav.Link className={location.pathname === '/' || location.pathname === '/home' ? 'me-3 fs-5 text-white' : "me-3 fs-5 text-black"} as={HashLink} to="/contact">Contact</Nav.Link>
                        {
                            user?.email ? <Nav.Link onClick={()=> setToggle(!toggle)}><img className="user-image" src={user.photoURL} alt="" /></Nav.Link>
                            :
                            <Link to="/login">
                            <Button className="px-4 py-2" variant="warning"> Login</Button>
                        </Link>
                        }

                        { toggle && (
                            <div className={user.email? "user-toggle" : "d-none"}>
                                <img src={user.photoURL} alt="" />
                                <h5 className="text-black mt-3">{user.displayName}</h5>
                                <Button onClick={logOut} variant="secondary">Logout</Button>
                            </div>
                        )
                        }
                       
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;