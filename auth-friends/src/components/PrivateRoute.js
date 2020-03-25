import React from "react";
import { Route, Redirect } from "react-router-dom";

// A wrapper for <Route> that redirects to the login
// screen if you're not yet authenticated.
function PrivateRoute({ children, ...rest }) {
   return (
      <Route
         {...rest}
         render={({ location }) =>
            JSON.parse(localStorage.getItem("token")) ===
            "esfeyJ1c2VySWQiOiJiMDhmODZhZi0zNWRhLTQ4ZjItOGZhYi1jZWYzOTA0NUIhkufemQifQ" ? (
               children
            ) : (
               <Redirect
                  to={{
                     pathname: "/login",
                     state: { from: location }
                  }}
               />
            )
         }
      />
   );
}

export default PrivateRoute;
