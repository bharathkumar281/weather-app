import React from 'react';
import { Container } from 'reactstrap';
import { FadeTransform } from 'react-animation-components';

export const Header = () => {
    return (
        <FadeTransform in
            transformProps={{
                enterTransform: 'translateY(20px)'
            }}>
            <header className="pt-5 pb-5">
                <Container fluid className='text-center'>
                    <h1 className="display-3">Mausam</h1>
                    <p className="lead">your weather buddy...</p>
                </Container>
            </header>
        </FadeTransform>
    );
}