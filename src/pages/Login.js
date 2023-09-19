import React from 'react';
import Login from "../components/Auth/Login";
import { Container } from 'react-bootstrap';

function LoginPage() {
    return <div className="row">
        <Container
            className='d-flex align-items-center justify-content-center'
            style={{ minHeight: '80vh' }}>
            <div
                className='w-100'
                style={{ maxWidth: '400px' }}
            >
                <Login />
            </div>
        </Container>
    </div>
}

export { LoginPage };
