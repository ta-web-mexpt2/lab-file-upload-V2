import React from 'react';
import {Switch, Route} from 'react-router-dom';

//Importar las vistas
import {Home, Auth,PostWall} from './app/views';


const Routes = () =>  (
    <Switch>
        
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Auth} />
        <Route exact path="/signup" component={Auth} />
        <Route exact path="/posts" component={PostWall} />
    </Switch>
)
export default Routes