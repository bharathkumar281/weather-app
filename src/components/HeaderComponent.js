import React from 'react';
import { Container } from 'reactstrap';

export const Header = () => {
    return (
        <header className="pt-5 pb-5">
            <Container fluid className='text-center'>
                <h1 className="display-3">Mausam</h1>
                <p className="lead">your weather buddy...</p>
            </Container>
        </header>
    );
}