import React from "react";
import { Redirect, Switch, Route, Router } from "react-router-dom";
import RouteGuard from "./components/RouteGuard";
//history
import { history } from './helpers/history';
 
//pages
import HomePage from "./pages/Home"
import LoginPage from "./pages/Login"
import Home2Page from "./pages/HomePage2";
function Routes() {
   return (
       <Router history={history}>
           <Switch>
               <RouteGuard
                   exact
                   path="/"
                   component={HomePage}
               />
               <Route
                   path="/login"
                   component={LoginPage}
               />
               <Route
                    path="/home2"
                    component={Home2Page}
                />
               <Redirect to="/" />
           </Switch>
       </Router>
   );
}
 
export default Routes