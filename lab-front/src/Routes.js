import React from 'react';
import {Switch,Route, BrowserRouter} from 'react-router-dom';
import SignUp from './app/views/signUp';
import Home from './app/views/home';
import LogIn from './app/views/logIn';
const Routes = () =>  (
    <Switch>
        <Route exact path="/" component={SignUp} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/login" component={LogIn} />
    </Switch>
)

export default Routes