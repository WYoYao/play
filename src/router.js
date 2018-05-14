import React from 'react';
import { Router, Route } from 'dva/router';
import IndexPage from './routes/IndexPage';

import Login from "./routes/Login.js";

import Home from "./routes/Home.js";

import Scan from "./routes/Scan.js";

function RouterConfig({ history }) {

  return (
    <Router history={history}>
      <Route path="/login" component={Login} />
      <Route path="/" component={Home}>

      </Route>
      <Route path="/Scan" component={Scan} />
    </Router>
  );
}

export default RouterConfig;
