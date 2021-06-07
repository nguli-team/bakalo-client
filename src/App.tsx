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
import { checkAccount } from './web/redux/VipAction';

ReactModal.setAppElement('#modal-root');
const contextClass: { [type: string]: string } = {
  success: 'bg-green-500',
  error: 'bg-red',
  info: 'bg-cyan',
  warning: 'bg-yellow',
  default: 'bg-purple-light',
  dark: 'bg-purple-light'
};

export default function App(): JSX.Element {
  const dispatch = useDispatch<AppDispatch>();
  dispatch(checkAccount());
  return (
    <div className="bg-purple-gradient min-h-screen flex flex-col">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/VIP/" component={VIP} />
          <Route exact path="/Reset/" component={ResetPass} />
          <Route exact path="/:boardShorthand/" component={BoardPage} />
          <Route path="/:boardShorthand/:threadId" component={ThreadPage} />
        </Switch>
        <ToastContainer
          toastClassName={(type) =>
            `${
              contextClass[type?.type || 'default']
            } relative flex p-1 min-h-10 lg:rounded-md justify-between overflow-hidden cursor-pointer`
          }
          bodyClassName={() => 'text-sm font-med block p-3'}
          hideProgressBar
          position="top-right"
          autoClose={3000}
        />
        <Footer />
      </Router>
    </div>
  );
}
