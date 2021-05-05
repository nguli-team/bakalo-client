import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './web/pages/Home';
import { Footer, Navbar } from './web/components';
import Thread from './web/pages/Thread';
import Boards from './web/pages/Boards';
import VIP from './web/pages/VIP';

export default function App(): JSX.Element {
  return (
    <div className="bg-purple-gradient">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/VIP/" exact component={VIP} />
          <Route path="/:boardShorthand/" exact component={Boards} />
          <Route path="/:boardShorthand/:threadId" component={Thread} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}
