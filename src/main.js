import React from 'react';
import Login from "./Login"
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom';
import App from './App';

export default function Main()
{
    return (  
        <Router>
            <Switch>   
                 <Route exact path='/login' component={Login}/>                 
                 <Route exact path='/' component={App}/>                     
            </Switch>
        </Router>
  
    )
}
