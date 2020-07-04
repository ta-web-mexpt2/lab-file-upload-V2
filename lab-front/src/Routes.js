import React from "react";
import { Route, Switch } from "react-router-dom";
import UserRegistration from "./Components/UserRegistration";
import CardsContainer from "./Components/CardsContainer";
import AuthForm from "./Components/AuthForm";

const Routes = (props) => (
  <Switch>
    <Route exact path="/">
      <CardsContainer user={ props.user}  posts={ props.posts } />
    </Route> 
    <Route exact path="/signup">
      <UserRegistration />
    </Route>
    <Route exact path="/login">
        <AuthForm setUser={props.setUser} />
    </Route>
  </Switch>
);

export default Routes;
