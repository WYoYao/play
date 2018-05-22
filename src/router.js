import React from 'react';
import { Router, Route } from 'dva/router';
import IndexPage from './routes/IndexPage';

import Login from "./routes/Login.js";

import Home from "./routes/Home.js";

import Scan from "./routes/Scan.js";

import Info from "./routes/Info.js";



function RouterConfig({ history }) {

  return (
    <Router history={history}>
      <Route path="/login" component={Login} />
      <Route path="/" component={Home}>
        <Route path="/info" component={Info} />
      </Route>
      <Route path="/Scan" component={Scan} />
    </Router>
  );
}

export default RouterConfig;
