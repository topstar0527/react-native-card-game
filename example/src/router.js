import React from 'react';
import { Router, IndexRoute, Route } from 'dva/router';

import App from "./routes/App.js";
import Home from "./routes/Home";
import {Heart2Demo,Heart3Demo} from "./routes/Hearts";
import {Spade2Demo} from "./routes/Spades";
import {Club2Demo,Club6Demo,Club7Demo} from "./routes/Clubs";
import WIP from "./components/WIP";

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        <Route path="home" component={Home}/>
        <Route path="heart/heart2" component={Heart2Demo}/>
        <Route path="heart/heart3" component={Heart3Demo}/>
        <Route path="spade/spade2" component={Spade2Demo}/>
        <Route path="club/club2" component={Club2Demo}/>
        <Route path="club/club6" component={Club6Demo}/>
        <Route path="club/club7" component={Club7Demo}/>
        <Route path='*' component={WIP}/>
      </Route>
    </Router>
  );
}

export default RouterConfig;
