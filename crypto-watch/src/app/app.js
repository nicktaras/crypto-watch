import React from 'react'
import Home from './../containers/home/home.js';
import Currencies from './../containers/currencies/currencies.js';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const App = () => (
  <Router>
    <div className="App">
      <Route exact path="/" component={Home} />
      <Route path="/currencies" component={Currencies} />
    </div>
  </Router>
);

export default App
