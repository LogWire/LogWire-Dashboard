import React from 'react';
import PrivateRoute from './../components/Route/PrivateRoute';

import {
    Route,
    Switch,
    Redirect
} from 'react-router';

// ----------- Pages Imports ---------------
import Login from './Login';

import Home from './Dashboards/Home';
import ListApps from './Dashboards/Applications/ListApps';

//------ Route Definitions --------
// eslint-disable-next-line no-unused-vars
export const RoutedContent = () => {
    return (
        <Switch>
            
            <Route path="/login" exact component={Login} />

            <PrivateRoute path="/" exact component={Home} />
            <PrivateRoute path="/Applications" exact component={ListApps} />

            { /*    404    */ }
            <Redirect to="/pages/error-404" />
            
        </Switch>
    );
};

