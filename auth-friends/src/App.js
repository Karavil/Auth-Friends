import React from "react";
import { Switch, Route, Link, Redirect } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";

import Login from "./components/Login";
import UserFriends from "./components/UserFriends";

function App() {
   return (
      <>
         <div className="App"></div>
         <Switch>
            <Route path="/login">
               <Login />
            </Route>
            <PrivateRoute path="/friends">
               <UserFriends />
            </PrivateRoute>
            <Route path="/">
               <Redirect to="login" />
            </Route>
         </Switch>
      </>
   );
}

export default App;
