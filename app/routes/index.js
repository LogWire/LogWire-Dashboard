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
import CreateApp from './Dashboards/Applications/CreateApp';
import AppOverview from './Dashboards/Applications/Overview';

import UserSearch from './Dashboards/SIEM/UserSearch'

//------ Route Definitions --------
// eslint-disable-next-line no-unused-vars
export const RoutedContent = () => {
    return (
        <Switch>
            
            <Route path="/login" exact component={Login} />

            <PrivateRoute path="/" exact component={Home} />
            <PrivateRoute path="/applications" exact component={ListApps} />
            <PrivateRoute path="/applications/add" exact component={CreateApp} />
            <PrivateRoute path="/applications/overview" exact component={AppOverview} />
            <PrivateRoute path='/siem/users' exact component={UserSearch} />


            { /*    404    */ }
            <Redirect to="/pages/error-404" />
            
        </Switch>
    );
};

