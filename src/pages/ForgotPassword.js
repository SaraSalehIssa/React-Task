import React from 'react';
import ForgotPassword from "../components/Auth/ForgotPassword";
import { Container } from 'react-bootstrap';

function ForgotPasswordPage() {
    return <div className="row">
        <Container
            className='d-flex align-items-center justify-content-center'
            style={{ minHeight: '80vh' }}>
            <div
                className='w-100'
                style={{ maxWidth: '400px' }}
            >
                <ForgotPassword />
            </div>
        </Container>
    </div>
}

export default ForgotPasswordPage;
