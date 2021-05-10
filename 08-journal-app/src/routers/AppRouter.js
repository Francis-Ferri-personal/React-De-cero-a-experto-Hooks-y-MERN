import React, { useEffect, useState } from 'react'
import {
    BrowserRouter as Router,
    Redirect,
    Switch
} from "react-router-dom";
import { firebase } from '../firebase/firebaseConfig';
import { useDispatch } from 'react-redux';

import { JournalScreen } from '../components/journal/JournalScreen';
import { AuthRouter } from './AuthRouter';
import { login } from '../actions/auth';
import { PublicRoute } from './PublicRoute';
import { PrivateRoute } from './PrivateRoute';


export const AppRouter = () => {
    
    const dispatch = useDispatch();

    // Revisando todabia el estado en firebas
    const [checking, setChecking] = useState(true);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        // Un obserbable
        firebase.auth().onAuthStateChanged((user) => {
            // El ususario de firebase se queda almacenda
            if(user?.uid){
                dispatch(login(user.uid, user.displayName));
                setIsLoggedIn(true);
            } else {
                setIsLoggedIn(false);
            }
            setChecking(false);
        });
    }, [dispatch, setChecking, setIsLoggedIn]);
    // Parece que no son necesarias, se podia omitir en esta linea, se lo puso para evitar un warning

    if (checking) {
        return (
            <h1>Espere...</h1>
        )
    }

    return (
        <Router>
            <div>
                <Switch>
                    <PublicRoute 
                        path="/auth"
                        isLoggedIn={ isLoggedIn }
                        component={ AuthRouter }
                    />
                    <PrivateRoute 
                        exact
                        path="/"
                        isLoggedIn={ isLoggedIn }
                        component={ JournalScreen }
                    />
                    <Redirect to="/auth/login" />
                </Switch>
            </div>
        </Router>
    )
}
