import React from 'react';
import { Button, Container } from 'react-bootstrap';
import firebase from "../config/firebase";

function Dashboard(props) {

    if (!firebase.getUsername()) {
        props.history.push('/login')
        return null
    }

    async function logout(){
        await firebase.logout()
        props.history.push('/')
    }
    return (
        <>
            <Container>
                <h1>Welcome {firebase.getUsername()}</h1>
                <Button variant="primary" onClick={logout}>
                    LOGOUT
                </Button>
            </Container>
        </>
    )
}

export default Dashboard;
