import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import { ToastContainer } from 'react-toastify';
import ReactModal from 'react-modal';
import { useDispatch } from 'react-redux';
import { AppDispatch } from './web/redux/store';
import Home from './web/pages/Home';
import { Footer } from './web/components';
import ThreadPage from './web/pages/ThreadPage';
import BoardPage from './web/pages/BoardPage';
import VIP from './web/pages/VIP';
import ResetPass from './web/pages/ResetPass';
import { checkVip } from './web/redux/VipAction';

ReactModal.setAppElement('#modal-root');

export default function App(): JSX.Element {
  const dispatch = useDispatch<AppDispatch>();
  dispatch(checkVip());
  return (
    <div className="bg-purple-gradient min-h-screen flex flex-col">
      <Router>
        <div className="flex-grow">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/VIP/" component={VIP} />
            <Route exact path="/Reset/" component={ResetPass} />
            <Route exact path="/:boardShorthand/" component={BoardPage} />
            <Route path="/:boardShorthand/:threadId" component={ThreadPage} />
          </Switch>
          <ToastContainer />
        </div>
        <Footer />
      </Router>
    </div>
  );
}
