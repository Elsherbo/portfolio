import React from 'react';
import {IndexRoute ,Router ,Route ,hashHistory}  from 'react-router';
import Home from "./containers/Home";
import App from "./containers/App";
import ContactMe from "./containers/ContactMe";

export default (
        <Router history={hashHistory}>
            <Route path="/" component={App}>
            <IndexRoute component={Home} />
            </Route>
            <Route path='/ContactMe' component={ContactMe}/>
        </Router>
);
