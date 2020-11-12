import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { Link } from "react-router-dom";

function Home() {
    return (
        <>
            <Container>
                <Link to="/login">
                    <Button variant="success">
                        LOGIN
                   </Button>
                </Link>
                <Link to="/signup">
                    <Button variant="primary">
                        SIGN UP
                    </Button>
                </Link>
            </Container>
        </>
    )
}

export default Home;
