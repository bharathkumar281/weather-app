import React from 'react';
import { Card, CardBody, Col, Container, Row } from 'reactstrap';
import { Graph } from './GraphComponent';
import * as urls from '../shared/urls';
import { Fade } from 'react-animation-components';

export const WeatherItem = (props) => {

    const index = props.index;
    const avg = (list) => list.reduce((a, b) => a + b, 0) / props.data.temp.length;
    const temp = avg(props.data.temp);
    const humidity = avg(props.data.humidity);
    const pressure = avg(props.data.pressure);
    const wind = avg(props.data.wind);

    return (
        <>
            <div id={'heading' + index}>
                <a className='d-block header-link' data-toggle='collapse' href={'#collapse' + index} aria-expanded='false' aria-controls={'collapse' + index}>
                    <Container fluid>
                        <Fade in>
                            <Card className='shadow mt-2'>
                                <CardBody>
                                    <Row className='align-items-center'>
                                        <Col sm={3} lg={2} xl={1} className='d-none d-sm-block'>
                                            <img src={urls.images.temperature} alt='temperature' className='img-fluid' />
                                        </Col>
                                        <Col xs={12} sm={9}>
                                            <h3>{temp.toFixed(2)} {props.units}</h3>
                                            <h6>{props.date_txt}</h6>
                                        </Col>
                                    </Row>
                                </CardBody>
                            </Card>
                        </Fade>
                    </Container>
                </a>
            </div>
            <div id={'collapse' + index} className={'collapse '} aria-labelledby={'heading' + index} data-parent='#accordion'>
                <Container fluid>
                    <Row>
                        <Col xs={12} lg={6}>
                            <Card className='shadow mt-2 h-100'>
                                <CardBody className='row align-items-center'>
                                    <Graph index={index} data={props.data.temp} labels={props.data.times} units={props.units} />
                                </CardBody>
                            </Card>
                        </Col>
                        <Col xs={12} lg={6} className='mt-3 mt-lg-0 d-none d-md-block'>
                            <Row>
                                {props.data.descriptions.map((desc, i) => {
                                    return (
                                        <Col xs={12} md={6} key={i}> {props.renderData(urls.images[props.data.icons[i]], desc, props.data.times[i], '')} </Col>
                                    );
                                })}
                            </Row>
                        </Col>
                    </Row>
                    <Row className='mt-3 mb-3'>
                        <Col xs={12} sm={6} md={4}> {props.renderData(urls.images.humidity, 'Humidity', humidity.toFixed(2), '%')}</Col>
                        <Col xs={12} sm={6} md={4}> {props.renderData(urls.images.pressure, 'Pressure', pressure.toFixed(2), 'hPA')} </Col>
                        <Col xs={12} sm={6} md={4}> {props.renderData(urls.images.wind, 'Wind Speed', wind.toFixed(2), 'm/s')} </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
};