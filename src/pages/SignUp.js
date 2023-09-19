import SignUp from "../components/Auth/SignUp";
import { Container } from 'react-bootstrap';

function SignUpPage() {
    return <div className="row">
        <Container
            className='d-flex align-items-center justify-content-center'
            style={{ minHeight: '80vh' }}>
            <div
                className='w-100'
                style={{ maxWidth: '400px' }}
            >
                <SignUp />
            </div>
        </Container>
    </div>
}

export { SignUpPage };