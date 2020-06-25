import { Meteor } from 'meteor/meteor';
import React from 'react';
import {
  Route,
  Router,
  Switch
} from 'react-router-dom';
import ReactDOM from 'react-dom';
import { Home } from './pages/Home';
import { createBrowserHistory } from 'history';
import './main.html';

const history = createBrowserHistory();

window.browserHistory = history;

Meteor.startup(() => {
  ReactDOM.render(
    <Router  history={history}>
      <Switch >
        <Route exact path="/" component={Home} history={history}/>
      </Switch>
    </Router>, document.getElementById('render-target')
  );
});
