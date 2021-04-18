import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './web/pages/Home';
import { Navbar, Footer } from './web/components';
import Thread from './web/pages/Thread';
import Boards from './web/pages/Boards';

export default function App(): JSX.Element {
  return (
    <div className="bg-purple-gradient">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/:board/" exact component={Boards} />
          <Route path="/:board/:threadId" component={Thread} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}
