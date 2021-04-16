import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';

class App extends Component {

  render() {
    return (
      <>
        <Router>
          <Switch>
            <Route path='/' exact component= {Home}/>
          </Switch>
        </Router>
      </>
    );
  }
}

export default App;
