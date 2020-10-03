import React, { Component } from 'react';
import { Row, Container, Spinner, Breadcrumb, BreadcrumbItem, Col, Card, CardBody } from 'reactstrap';
import * as urls from '../shared/urls';
import { Link } from 'react-router-dom';
import { WeatherItem } from './WeatherItemComponent';

class Weather extends Component {

    constructor(props) {
        super(props);

        this.state = {
            forecast: null,
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
                else throw new Error('city not found !');
            })
            .then(response => response.json())
            .then(forecast => {
                this.updateWeather(forecast);
            })
            .catch(error => {
                alert(error.message);
                window.location = '/home';
            });
    }

    updateWeather(forecast) {
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
            city: forecast.city.name
        });
        console.log(forecast);
    }

    render() {
        if (this.state.forecast) {
            const weatherItemList = [];
            var index = 1;
            for (var date_txt in this.state.forecast) {
                weatherItemList.push(<WeatherItem key={index} units={String.fromCharCode(176) + 'C'} date_txt={date_txt} data={this.state.forecast[date_txt]} index={index} />);
                index++;
            }
            return (
                <>
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
                                            <h1 className='text-center'>
                                                {this.state.city}
                                            </h1>
                                        </CardBody>
                                    </Card>
                                </Container>
                                <div id='accordion'>
                                    {weatherItemList}
                                </div>
                                <Container fluid>
                                    <Card className='shadow mt-3'>
                                        <CardBody>
                                            <h5>copyrights &copy; 2020</h5>
                                            <p>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a></p>
                                        </CardBody>
                                    </Card>
                                </Container>
                            </Col>
                        </Row>
                    </Container>
                </>
            );
        }
        else {
            return (
                <Container>
                    <Row>
                        <Spinner color="primary" />
                    </Row>
                </Container>
            );
        }
    }
}

export default Weather;