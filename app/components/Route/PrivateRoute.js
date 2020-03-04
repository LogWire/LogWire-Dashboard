import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { isAuthenticated } from "../Authentication/auth";

function PrivateRoute({ component: Component, ...rest }) {
    return (
        <Route
          {...rest}
          render={props => {
            if(isAuthenticated()) {
                return (
                    <Component {...props} />
                  )
            } else {
                return (
                    <Redirect to={{
                      pathname: '/login',
                      state: { redirect_url: rest.path }
                  }} />
                    
                  )
            }
          }            
          }
        />
      );
}

export default PrivateRoute;