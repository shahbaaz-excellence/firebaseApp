import React, {useState}from 'react';
import { Button, Form, Container } from 'react-bootstrap';
import firebase from "../config/firebase";


function Login(props) {

    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");

    async function login(e){
        e.preventDefault();
        try{
            await firebase.login(email,password)
            props.history.push('/dashboard')
        } catch(error){
            alert(error.message)
        }
    }

    return (
        <Container>
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control 
                    type="email" 
                    placeholder="Enter email" 
                    value={email}
                    onChange={e=>setemail(e.target.value)}/>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control 
                    type="password" 
                    placeholder="Password" 
                    value={password}
                    onChange={e=>setpassword(e.target.value)}/>
                </Form.Group>
                <Button variant="primary" type="submit" onClick={login}>
                    Submit</Button>
            </Form>
        </Container>
    )
}

export default Login;
