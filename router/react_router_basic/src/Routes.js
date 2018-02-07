import React from 'react';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import {Provider} from 'react-redux';

import {syncHistoryWithStore} from 'react-router-redux';

import App from './pages/App.js';
import Home from './pages/Home.js';
import DesignPatterns from './pages/DesignPatterns.js';
import DesignPatterns1 from './pages/DesignPatterns1.js';
import DesignPatterns2 from './pages/DesignPatterns2.js';
import DesignPatterns3 from './pages/DesignPatterns3.js';
import DesignPatterns4 from './pages/DesignPatterns4.js';
import DesignPatterns5 from './pages/DesignPatterns5.js';
import DesignPatterns6 from './pages/DesignPatterns6.js';
import DesignPatterns7 from './pages/DesignPatterns7.js';
import DesignPatterns8 from './pages/DesignPatterns8.js';
import DesignPatterns9 from './pages/DesignPatterns9.js';
import DesignPatterns10 from './pages/DesignPatterns10.js';
import DesignPatterns11 from './pages/DesignPatterns11.js';
import DesignPatterns12 from './pages/DesignPatterns12.js';
import DesignPatterns13 from './pages/DesignPatterns13.js';
import DesignPatterns14 from './pages/DesignPatterns14.js';
import DesignPatterns15 from './pages/DesignPatterns15.js';
import DesignPatterns16 from './pages/DesignPatterns16.js';
import DesignPatterns17 from './pages/DesignPatterns17.js';
import DesignPatterns18 from './pages/DesignPatterns18.js';
import DesignPatterns19 from './pages/DesignPatterns19.js';
import DesignPatterns20 from './pages/DesignPatterns20.js';
import DesignPatterns21 from './pages/DesignPatterns21.js';
import DesignPatterns22 from './pages/DesignPatterns22.js';
import DesignPatterns23 from './pages/DesignPatterns23.js';
import Syntax from './pages/Syntax.js';
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
import NotFound from './pages/NotFound.js';
import store from './Store.js';

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
      <Route path="ESSyntax" component={Syntax}>
        <Route path="/ESSyntax/Syntax1" component={Syntax1} />
        <Route path="/ESSyntax/Syntax2" component={Syntax2} />
        <Route path="/ESSyntax/Syntax3" component={Syntax3} />
        <Route path="/ESSyntax/Syntax4" component={Syntax4} />
        <Route path="/ESSyntax/Syntax5" component={Syntax5} />
        <Route path="/ESSyntax/Syntax6" component={Syntax6} />
        <Route path="/ESSyntax/Syntax7" component={Syntax7} />
        <Route path="/ESSyntax/Syntax8" component={Syntax8} />
        <Route path="/ESSyntax/Syntax9" component={Syntax9} />
        <Route path="/ESSyntax/Syntax10" component={Syntax10} />
        <Route path="/ESSyntax/Syntax11" component={Syntax11} />
        <Route path="/ESSyntax/Syntax12" component={Syntax12} />
        <Route path="/ESSyntax/Syntax13" component={Syntax13} />
        <Route path="/ESSyntax/Syntax14" component={Syntax14} />
        <Route path="/ESSyntax/Syntax15" component={Syntax15} />
        <Route path="/ESSyntax/Syntax16" component={Syntax16} />
        <Route path="/ESSyntax/Syntax17" component={Syntax17} />
        <Route path="/ESSyntax/Syntax18" component={Syntax18} />
      </Route>

      <Route path="ESDP" component={DesignPatterns}>
        <Route path="/ESDP/DP1" component={DesignPatterns1} />
        <Route path="/ESDP/DP2" component={DesignPatterns2} />
        <Route path="/ESDP/DP3" component={DesignPatterns3} />
        <Route path="/ESDP/DP4" component={DesignPatterns4} />
        <Route path="/ESDP/DP5" component={DesignPatterns5} />
        <Route path="/ESDP/DP6" component={DesignPatterns6} />
        <Route path="/ESDP/DP7" component={DesignPatterns7} />
        <Route path="/ESDP/DP8" component={DesignPatterns8} />
        <Route path="/ESDP/DP9" component={DesignPatterns9} />
        <Route path="/ESDP/DP10" component={DesignPatterns10} />
        <Route path="/ESDP/DP11" component={DesignPatterns11} />
        <Route path="/ESDP/DP12" component={DesignPatterns12} />
        <Route path="/ESDP/DP13" component={DesignPatterns13} />
        <Route path="/ESDP/DP14" component={DesignPatterns14} />
        <Route path="/ESDP/DP15" component={DesignPatterns15} />
        <Route path="/ESDP/DP16" component={DesignPatterns16} />
        <Route path="/ESDP/DP17" component={DesignPatterns17} />
        <Route path="/ESDP/DP18" component={DesignPatterns18} />
        <Route path="/ESDP/DP19" component={DesignPatterns19} />
        <Route path="/ESDP/DP20" component={DesignPatterns20} />
        <Route path="/ESDP/DP21" component={DesignPatterns21} />
        <Route path="/ESDP/DP22" component={DesignPatterns22} />
        <Route path="/ESDP/DP23" component={DesignPatterns23} />
      </Route>

      <Route path="*" component={NotFound} />
    </Route>
  </Router>
);

export default Routes;
