import React from 'react'
import { Switch, Route } from "react-router-dom";
import Signup from "./components/AddUser";
import Post from "./components/AddPost";
import Comment from "./components/AddComment";

const Routes = () => (
  <Switch>
    <Route exact path="/signup" component={Signup} />
    <Route exact path="/post" component={Post} />
    <Route exact path="/comment" component={Comment} />
  </Switch>
);
export default Routes;