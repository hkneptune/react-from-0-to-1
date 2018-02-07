import React from 'react';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import {Provider} from 'react-redux';

import {syncHistoryWithStore} from 'react-router-redux';

import App from './pages/App.js';
import Home from './pages/Home.js';
import Category1 from './pages/Category1.js';
import Category2 from './pages/Category2.js';
import Category3 from './pages/Category3.js';
import Category4 from './pages/Category4.js';
import Syntax1 from './pages/Syntax1.js';
import Syntax2 from './pages/Syntax2.js';
import Syntax3 from './pages/Syntax3.js';
import Syntax4 from './pages/Syntax4.js';
import Syntax5 from './pages/Syntax5.js';
import Syntax6 from './pages/Syntax6.js';
import Syntax7 from './pages/Syntax7.js';
import Syntax8 from './pages/Syntax8.js';
import Syntax9 from './pages/Syntax9.js';
import Syntax10 from './pages/Syntax10.js';
import Syntax11 from './pages/Syntax11.js';
import Syntax12 from './pages/Syntax12.js';
import Syntax13 from './pages/Syntax13.js';
import Syntax14 from './pages/Syntax14.js';
import Syntax15 from './pages/Syntax15.js';
import Syntax16 from './pages/Syntax16.js';
import Syntax17 from './pages/Syntax17.js';
import Syntax18 from './pages/Syntax18.js';

import store from './Store.js';
import NotFound from './pages/NotFound.js';

const createElement = (Component, props) => {
  return (
    <Provider store={store}>
      <Component {...props} />
    </Provider>
  );
};

const history = syncHistoryWithStore(browserHistory, store);
//const history = browserHistory;

const Routes = () => (
  <Router history={history} createElement={createElement}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="home" component={Home} />
      <Route path="Category1" component={Category1}>
        <Route path="/ESSyntax/Syntax1" component={Syntax1} />
        <Route path="/ESSyntax/Syntax2" component={Syntax2} />
        <Route path="/ESSyntax/Syntax3" component={Syntax3} />
        <Route path="/ESSyntax/Syntax4" component={Syntax4} />
        <Route path="/ESSyntax/Syntax5" component={Syntax5} />
      </Route>

      <Route path="Category2" component={Category2}>
        <Route path="/ESSyntax/Syntax6" component={Syntax6} />
        <Route path="/ESSyntax/Syntax7" component={Syntax7} />
        <Route path="/ESSyntax/Syntax8" component={Syntax8} />
        <Route path="/ESSyntax/Syntax9" component={Syntax9} />
      </Route>

      <Route path="Category3" component={Category3}>
        <Route path="/ESSyntax/Syntax10" component={Syntax10} />
        <Route path="/ESSyntax/Syntax11" component={Syntax11} />
      </Route>

      <Route path="Category4" component={Category4}>
        <Route path="/ESSyntax/Syntax12" component={Syntax12} />
        <Route path="/ESSyntax/Syntax13" component={Syntax13} />
      </Route>

      <Route path="*" component={NotFound} />
    </Route>
  </Router>
);

export default Routes;
