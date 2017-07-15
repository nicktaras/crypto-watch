import React from 'react'
import Home from './Home/Home.js';
import Currencies from './Currencies/Currencies.js';
import { BrowserRouter as Router, Route } from 'react-router-dom'; // Switch

const App = () => (
  <Router>
    <div className="App">
      <Route exact path="/" component={Home} />
      <Route path="/currencies" component={Currencies} />
    </div>
  </Router>
);

export default App

