import React from 'react';
import { Container, FloatingLabel, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';
import googleImg from '../../assets/icon/google.png';

const Register = () => {
    const {signInUsingGoogle} = useFirebase();
    return (
        <Container className="my-5">
            <h2 className="text-center mt-5">Create your account!</h2>
            <Form onSubmit className="form">
                <FloatingLabel controlId="floatingInput" label="First Name" className="mb-3">
                    <Form.Control type="text" placeholder="Adam" required />
                </FloatingLabel>
                <FloatingLabel controlId="floatingInput" label="Last Name" className="mb-3">
                    <Form.Control type="text" placeholder="Smith" required />
                </FloatingLabel>
                <FloatingLabel controlId="floatingInput" label="Phone" className="mb-3">
                    <Form.Control type="text" placeholder="017*********" required />
                </FloatingLabel>
                <FloatingLabel controlId="floatingInput" label="Email Address" className="mb-3">
                    <Form.Control type="email" placeholder="name@example.com" required />
                </FloatingLabel>
                <FloatingLabel controlId="floatingPassword" label="Password" className="mb-3">
                    <Form.Control type="password" placeholder="Password" required/>
                </FloatingLabel>
                <div className="d-grid gap-2">
                    <Button variant="warning" size="lg">Create account</Button>
                </div>
            </Form>
            <h6 className="text-center">Already have an account? <Link to="/login">Login</Link></h6>
            <p className="text-center">---------------------OR---------------------</p>
            <div className="d-grid gap-2 form">
                    <Button onClick={signInUsingGoogle} variant="outline-primary" size="lg">Continue With Google <img src={googleImg} style={{height: '20px'}} alt="" /></Button>
            </div>
        </Container>
    )
};

export default Register;