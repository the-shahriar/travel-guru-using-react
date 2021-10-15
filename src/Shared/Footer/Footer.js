import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import {Form, Nav, Stack, Button, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo/Logo.png';


const links = {
    'textDecoration': 'none',
    'color': 'black',
    'display': 'block',
    'fontSize': '18px',
    'lineHeight': '40px'
}

const equal = {
    'marginTop': '-70px'
}

const socialLinks = {
    'backgroundColor': 'goldenrod',
    'padding': '10px',
    'borderRadius': '5px',
    'marginRight': '10px',
    'color': 'white'
}

const Footer = () => {
    return (
        <Container className="mb-5">
            <Stack direction="horizontal" className="d-flex align-items-center justify-content-between" gap={5}>
            <div className="mt-5">
                <img src={logo} alt="logo" style={{height: '80px'}} />
                <p className="pt-4">Lorem ipsum dolor sit, amet consectetura</p>
                <h6>(+75) 36 6552 9564</h6>
                <h6>contact@domain.com</h6>
                <h6>Washington, United State</h6>
                
            </div>
            <div className="mt-4">
                <h3>Links</h3>
                <div className="pt-3">
                    <NavLink style={links} to="/home">Home</NavLink>
                    <NavLink style={links} to="/destination">Destination</NavLink>
                    <NavLink style={links} to="/blog">Blog</NavLink>
                    <NavLink style={links} to="/contact">Contact</NavLink>
                </div>
            </div>
            <div className="mt-5">
                <h3 className="mb-4">Send Message</h3>
                <Form>
                    <Form.Group className="mb-2" controlId="formBasicPassword">
                        <Form.Control type="email" placeholder="Email" />
                    </Form.Group>
                    <Form.Group className="mb-2" controlId="ControlTextarea1">
                        <Form.Control as="textarea" rows={3} placeholder="Type your message" />
                    </Form.Group>
                    <Button className="btn btn-warning px-4 py-2" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>

            <div style={equal}>
                <h3>Follow us on</h3>
                <div className="social-links d-flex mt-5">
                        <Nav.Link style={socialLinks} href="https://facebook.com">
                            <FontAwesomeIcon className="text-white" icon={faFacebook} />
                        </Nav.Link>
                        <Nav.Link style={socialLinks} href="https://twitter.com">
                            <FontAwesomeIcon className="text-white" icon={faTwitter} />
                        </Nav.Link>
                        <Nav.Link style={socialLinks} href="https://instagram.com">
                            <FontAwesomeIcon className="text-white" icon={faInstagram} />
                        </Nav.Link>
                        <Nav.Link style={socialLinks} href="https://youtube.com">
                            <FontAwesomeIcon className="text-white" icon={faYoutube} />
                        </Nav.Link>
                </div>
            </div>
        </Stack>
        </Container>
    );
};

export default Footer;