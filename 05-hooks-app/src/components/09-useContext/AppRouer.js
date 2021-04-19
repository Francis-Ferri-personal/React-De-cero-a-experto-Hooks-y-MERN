import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import { AboutScreen } from './AboutScreen';
import { HomeScreen } from './HomeScreen';
import { LoginScreen } from './LoginScreen';
import { NavBar } from './NavBar';

export const AppRouer = () => {
    {/* La palabra exact es para que laruta deba coincidir exactamnete para que se reenderice */}
    return (
        <Router>
            <div>
                < NavBar />
                <div className="container">
                    <Switch>
                        <Route exact path="/about" component={AboutScreen}/>
                        <Route exact path="/login" component={LoginScreen}/>
                        <Route exact path="/" component={HomeScreen}/>
                        {/* La ultima opcion funciona como el default del router */}
                        <Redirect to="/" />
                    </Switch>
                </div>
            </div>
        </Router>
    )
}
