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
                console.log();
                var url = "/login?redirect_url=" + rest.path;
                return (
                    <Redirect to={url} />
                  )
            }
          }            
          }
        />
      );
}

export default PrivateRoute;