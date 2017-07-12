import React from 'react'
import Home from './Home/Home.js';
import Main from './Main/Main.js';
import { BrowserRouter as Router, Route } from 'react-router-dom'; // Switch

const App = () => (
  <Router>
    <div className="App">
      <Route exact path="/" component={Home} />
      <Route path="/main" component={Main} />
    </div>
  </Router>
);

export default App

