import React from "react";
import { Redirect, Switch, Route, Router } from "react-router-dom";
import RouteGuard from "./components/RouteGuard";
//history
import { history } from './helpers/history';
 
//pages
import HomePage from "./pages/Home"
import LoginPage from "./pages/Login"
import Home2Page from "./pages/Dashboard";
import SignupPage from "./pages/Signup";
function Routes() {
   return (
       <Router history={history}>
           <Switch>
               <Route
                   exact
                   path="/"
                   component={SignupPage}
               />
               <Route
                   path="/login"
                   component={LoginPage}
               />
               <Route
                    path="/home"
                    component={HomePage}
                />
               <Redirect to="/" />
           </Switch>
       </Router>
   );
}
 
export default Routes