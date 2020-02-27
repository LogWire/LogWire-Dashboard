import React from 'react';
import {
    Route,
    Switch,
    Redirect
} from 'react-router';

// ----------- Pages Imports ---------------
import Home from './Dashboards/Home';

//------ Route Definitions --------
// eslint-disable-next-line no-unused-vars
export const RoutedContent = () => {
    return (
        <Switch>
            
            <Route path="/" exact component={Home} />

            { /*    404    */ }
            <Redirect to="/pages/error-404" />
            
        </Switch>
    );
};

