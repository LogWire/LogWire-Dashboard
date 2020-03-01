import React from 'react';
import PrivateRoute from './components/Route/PrivateRoute';

import {
    Route,
    Switch,
    Redirect
} from 'react-router';

// ----------- Pages Imports ---------------
import Home from './Dashboards/Home';
import Login from './Login';

//------ Route Definitions --------
// eslint-disable-next-line no-unused-vars
export const RoutedContent = () => {
    return (
        <Switch>
            
            <Route path="/login" exact component={Login} />

            <PrivateRoute path="/" exact component={Home} />

            { /*    404    */ }
            <Redirect to="/pages/error-404" />
            
        </Switch>
    );
};

