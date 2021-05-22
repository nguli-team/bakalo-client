import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './web/pages/Home';
import { Footer } from './web/components';
import Thread from './web/pages/Thread';
import Boards from './web/pages/Boards';
import VIP from './web/pages/VIP';
import ResetPass from './web/pages/ResetPass';

export default function App(): JSX.Element {
  return (
    <div className="bg-purple-gradient">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/VIP/" component={VIP} />
          <Route exact path="/Reset/" component={ResetPass} />
          <Route exact path="/:boardShorthand/" component={Boards} />
          <Route path="/:boardShorthand/:threadId" component={Thread} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}
