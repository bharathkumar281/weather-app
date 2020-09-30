import React from 'react';
import { Row, Container, Col, Form, InputGroup, InputGroupAddon, Button, Input } from 'reactstrap';

export const Home = () => {

    const handleSubmit = (event) => {
        window.location = '/weather/' + document.getElementById('city').value;
        event.preventDefault();
    }

    const getLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                console.log(position);
                window.location = `/weather/${position.coords.latitude}/${position.coords.longitude}`;
            }, error => alert(error.message));
        }
    }

    return (
        <>
            <Container fluid>
                <Row className="justify-content-center text-center">
                    <Col xs={12} md={8} lg={6}>
                        <Form onSubmit={event => handleSubmit(event)} >
                            <InputGroup size='lg'>
                                <Input placeholder='Enter Location' id='city' />
                                <InputGroupAddon addonType='append'>
                                    <Button type='submit'> Go </Button>
                                </InputGroupAddon>
                            </InputGroup>
                        </Form>
                        <hr /> <h5>or</h5> <hr />
                        <Button onClick={getLocation} block size='lg'>
                            Use Current Location
                        </Button>
                    </Col>
                </Row>
            </Container>
        </>
    );
}