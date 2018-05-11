import React from 'react';
import { Router, Route } from 'dva/router';
import IndexPage from './routes/IndexPage';

import Login from "./routes/Login.js";

import Home from "./routes/Home.js";

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Route path="/login" component={Login} />
      <Route path="/" component={Home}>

      </Route>
    </Router>
  );
}

export default RouterConfig;
