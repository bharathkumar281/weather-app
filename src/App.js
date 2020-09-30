import React, { Component } from 'react';
import Main from './components/MainComponent';
import { HashRouter } from 'react-router-dom';

import './App.css';

class App extends Component {
  render() {
    return (
      <HashRouter basename={process.env.PUBLIC_URL}>
        <div className="App">
          <Main />
        </div>
      </HashRouter>
    );
  }
}

export default App;
