import React, { Component } from 'react';
import { Row, Container, Spinner, Breadcrumb, BreadcrumbItem, Col, Card, CardBody } from 'reactstrap';
import * as urls from '../shared/urls';
import { Link } from 'react-router-dom';
import { WeatherItem } from './WeatherItemComponent';

export default class Weather extends Component {

    constructor(props) {
        super(props);

        this.state = {
            forecast: null,
            weather: null,
            city: props.city,
            lat: props.lat,
            lon: props.lon
        }

        this.fetchWeather = this.fetchWeather.bind(this);
        this.updateWeather = this.updateWeather.bind(this);
    }

    componentDidMount() {
        const format = this.state.city ? `q=${this.state.city}` : `lat=${this.state.lat}&lon=${this.state.lon}`;
        this.fetchWeather(format);
    }

    fetchWeather(format) {
        fetch(urls.API_URL + `forecast?${format}&appid=${urls.API_KEY}&units=metric`)
            .then(response => {
                if (response.ok) return response;
                throw new Error('city not found !');
            })
            .then(response => response.json())
            .then(forecast => {
                fetch(urls.API_URL + `weather?${format}&appid=${urls.API_KEY}&units=metric`)
                    .then(response => {
                        if (response.ok) return response;
                        throw new Error('city not found !');
                    })
                    .then(response => response.json())
                    .then(weather => {
                        this.updateWeather(weather, forecast);
                    })
                    .catch(error => { throw error; });
            })
            .catch(error => {
                alert(error.message);
                window.location = '/home';
            });
    }

    updateWeather(weather, forecast) {

        const forecastData = {};
        const dateFormat = {
            month: 'short',
            day: '2-digit',
            weekday: 'short'
        }
        const timeFormat = {
            hour12: true,
            hour: 'numeric',
            minute: 'numeric'
        }

        forecast.list.forEach((item) => {
            const date_txt = new Intl.DateTimeFormat('en-US', dateFormat).format(new Date(item.dt_txt));
            const time_txt = new Intl.DateTimeFormat('en-US', timeFormat).format(new Date(item.dt_txt));
            if (forecastData[date_txt]) {
                forecastData[date_txt].times.push(time_txt);
                forecastData[date_txt].temp.push(item.main.temp);
                forecastData[date_txt].humidity.push(item.main.humidity);
                forecastData[date_txt].pressure.push(item.main.pressure);
                forecastData[date_txt].wind.push(item.wind.speed);
                forecastData[date_txt].descriptions.push(item.weather[0].description);
                forecastData[date_txt].icons.push(item.weather[0].icon);
            }
            else {
                forecastData[date_txt] = {
                    times: [time_txt],
                    temp: [item.main.temp],
                    humidity: [item.main.humidity],
                    pressure: [item.main.pressure],
                    wind: [item.wind.speed],
                    descriptions: [item.weather[0].description],
                    icons: [item.weather[0].icon]
                }
            }
        });
        this.setState({
            forecast: forecastData,
            city: forecast.city.name,
            weather: {
                humidity: weather.main.humidity.toFixed(2),
                pressure: weather.main.pressure.toFixed(2),
                wind: weather.wind.speed.toFixed(2),
                temp: weather.main.temp.toFixed(2),
                icon: weather.weather[0].icon,
                description: weather.weather[0].description
            }
        });
    }

    render() {

        if (this.state.forecast) {

            const weatherItemList = [];
            var index = 0;
            const celsius = String.fromCharCode(176) + 'C';
            const current_time = new Intl.DateTimeFormat('en-US', {
                hour12: true,
                hour: 'numeric',
                minute: 'numeric'
            }).format(Date.now());

            const renderData = (imgUrl, description, value, units) => {
                return (
                    <Card className='shadow mt-2'>
                        <CardBody>
                            <Row className='align-items-center'>
                                <Col xs={4}>
                                    <img src={imgUrl} className='w-100 img-fluid' alt={description} />
                                </Col>
                                <Col xs={8} className='text-center'>
                                    <h4>{value} <span className='h6'>{units}</span></h4>
                                    <p>{description}</p>
                                </Col>
                            </Row>
                        </CardBody>
                    </Card>
                );
            }

            for (var date_txt in this.state.forecast) {
                if (index !== 0) weatherItemList.push(<WeatherItem key={index} units={celsius} date_txt={date_txt} data={this.state.forecast[date_txt]} index={index} renderData={renderData} />);
                index++;
            }

            return (
                <Container fluid>
                    <Row className='justify-content-center'>
                        <Col xs={12} xl={11}>
                            <Container fluid>
                                <Breadcrumb className='shadow'>
                                    <BreadcrumbItem active>
                                        <Link to='/home'><h4>Home</h4></Link>
                                    </BreadcrumbItem>
                                    <BreadcrumbItem>
                                        <h4>Weather</h4>
                                    </BreadcrumbItem>
                                </Breadcrumb>
                                <Card className='shadow'>
                                    <CardBody>
                                        <Row className='align-items-center'>
                                            <Col sm={3} lg={2} xl={1} className='d-none d-sm-block'>
                                                <img src={urls.images.temperature} alt='temperature' className='img-fluid' />
                                            </Col>
                                            <Col xs={12} sm={9}>
                                                <h1>{this.state.city}</h1>
                                                <h3>{this.state.weather.temp + ' ' + celsius}</h3>
                                                <h6>Now</h6>
                                            </Col>
                                        </Row>
                                    </CardBody>
                                </Card>
                                <Row>
                                    <Col xs={12} sm={6} lg={3}>
                                        {renderData(urls.images[this.state.weather.icon], this.state.weather.description, current_time, '')}
                                    </Col>
                                    <Col xs={12} sm={6} lg={3}>
                                        {renderData(urls.images.humidity, 'Humidty', this.state.weather.humidity, '%')}
                                    </Col>
                                    <Col xs={12} sm={6} lg={3}>
                                        {renderData(urls.images.pressure, 'Pressure', this.state.weather.pressure, 'hPA')}
                                    </Col>
                                    <Col xs={12} sm={6} lg={3}>
                                        {renderData(urls.images.wind, 'Wind Speed', this.state.weather.wind, 'm/s')}
                                    </Col>
                                </Row>
                            </Container>
                            <div id='accordion'>
                                {weatherItemList}
                            </div>
                            <Container fluid>
                                <Card className='shadow mt-3'>
                                    <CardBody>
                                        <h5>copyrights &copy; 2020</h5>
                                        <p>Icons made by <a target='_blank' href="https://www.flaticon.com/authors/freepik" title="Freepik" rel='noopener noreferrer'>Freepik</a> from <a target='_blank' href="https://www.flaticon.com/" title="Flaticon" rel='noopener noreferrer'> www.flaticon.com</a></p>
                                    </CardBody>
                                </Card>
                            </Container>
                        </Col>
                    </Row>
                </Container>
            );
        }
        else {
            return (
                <Container>
                    <Spinner color="primary" />
                </Container>
            );
        }
    }
}