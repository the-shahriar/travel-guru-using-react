import React from 'react';
import { Container, FloatingLabel, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Login.css';
import googleImg from '../../assets/icon/google.png';
import useFirebase from '../../hooks/useFirebase';

const Login = () => {
    const {signInUsingGoogle} = useFirebase();
    return (
        <Container className="my-5">
            <h2 className="text-center mt-5">Login to your account!</h2>
            <Form onSubmit className="form">
                <FloatingLabel controlId="floatingInput" label="Email address" className="mb-3">
                    <Form.Control type="email" placeholder="name@example.com" required />
                </FloatingLabel>
                <FloatingLabel controlId="floatingPassword" label="Password" className="mb-3">
                    <Form.Control type="password" placeholder="Password" required/>
                </FloatingLabel>
                <div className="d-grid gap-2">
                    <Button variant="warning" size="lg">Login</Button>
                </div>
            </Form>
            <h6 className="text-center">Don't have any account? <Link to="/register">Register</Link></h6>
            <p className="text-center">---------------------OR---------------------</p>
            <div className="d-grid gap-2 form">
                    <Button onClick={signInUsingGoogle} variant="outline-primary" size="lg">Continue With Google <img src={googleImg} style={{height: '20px'}} alt="" /></Button>
            </div>
        </Container>
       

    );
};

export default Login;