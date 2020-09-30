import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Home } from './HomeComponent';
import Weather from './WeatherComponent';
import { Header } from './HeaderComponent';

class Main extends Component {
    render() {
        const LocalWeather = ({ match }) => {
            return <Weather lat={match.params.latitude} lon={match.params.longitude} />
        }
        const CityWeather = ({ match }) => {
            return <Weather city={match.params.city} />
        }
        return (
            <div className="mb-5">
                <Header />
                <Switch>
                    <Route path="/home" component={Home} />
                    <Route exact path="/weather/:latitude/:longitude" component={LocalWeather} />
                    <Route path="/weather/:city" component={CityWeather} />
                    <Redirect to="/home" />
                </Switch>
            </div>
        );
    }
}

export default Main;