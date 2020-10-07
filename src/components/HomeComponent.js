import React from 'react';
import { Row, Container, Col, Form, InputGroup, InputGroupAddon, Button, Input } from 'reactstrap';
import { Fade, Stagger } from 'react-animation-components';

export const Home = () => {

    const handleSubmit = (event) => {
        window.location.href = '/#/weather/' + document.getElementById('city').value;
        event.preventDefault();
    }

    const getLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                console.log(position);
                window.location.href = `/#/weather/${position.coords.latitude}/${position.coords.longitude}`;
            }, error => alert(error.message));
        }
    }

    return (
        <Fade in>
            <Container fluid>
                <Row className="justify-content-center text-center">
                    <Col xs={12} md={8} lg={6}>
                        <Stagger in>
                            <Fade>
                                <Form onSubmit={event => handleSubmit(event)} >
                                    <InputGroup size='lg'>
                                        <Input placeholder='Enter Location' id='city' />
                                        <InputGroupAddon addonType='append'>
                                            <Button type='submit'> Go </Button>
                                        </InputGroupAddon>
                                    </InputGroup>
                                </Form>
                            </Fade>
                            <Fade>
                                <hr /> <h5>or</h5> <hr />
                            </Fade>
                            <Fade>
                                <Button onClick={getLocation} block size='lg'>
                                    Use Current Location
                                </Button>
                            </Fade>
                        </Stagger>
                    </Col>
                </Row>
            </Container>
        </Fade>
    );
}