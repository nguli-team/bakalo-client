import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './web/pages/Home';
import Navbar from './web/components/Navbar';
import Thread from './web/pages/Thread';
import Boards from './web/pages/Boards';

export default function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/:board/" exact component={Boards} />
          <Route path="/:board/:threadId" component={Thread} />
        </Switch>
      </Router>
    </div>
  );
}
