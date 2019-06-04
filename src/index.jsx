import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './index.css';
import App from './App';
import ReduxDemo from './reduxdemo';
import AsyncActionDemo from './asyncactiondemo';
import * as serviceWorker from './serviceWorker';

function Header() {
  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/reduxdemo">Recipes Demo</Link>
      </li>
      <li>
        <Link to="/asyncaction">Async Action Demo</Link>
      </li>
    </ul>
  );
}

ReactDOM.render(
  <Router>
    <div>
      <Header />
      <Route exact path="/" component={App} />
      <Route path="/reduxdemo" component={ReduxDemo} />
      <Route path="/asyncaction" component={AsyncActionDemo} />
    </div>
  </Router>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
