import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Switch, Redirect } from "react-router-dom";
import { startCheckling } from "../actions/auth";
import { LoginScreen } from "../components/auth/LoginScreen";
import { CalendarScreen } from "../components/calendar/CalendarScreen";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

export const AppRouter = () => {
	// TODO: Para que no se pierda el logeuo puedes poner que se haga renew cada vez que recarga la pag y  un setInterval por si no recraga la pag en mucho tiempo
	const dispatch = useDispatch();
	const { checking, uid } = useSelector((state) => state.auth);

	useEffect(() => {
		dispatch(startCheckling());
	}, [dispatch]);

	if (checking) {
		// TODO: Crear componente personalizado lindo de espere
		return <h5>Espere...</h5>;
	}
	return (
		<Router>
			<div>
				<Switch>
					<PublicRoute
						exact
						path="/login"
						component={LoginScreen}
						isAutenticated={!!uid}
					/>
					<PrivateRoute
						exact
						path="/"
						component={CalendarScreen}
						isAutenticated={!!uid}
					/>
					<Redirect to="/" />
				</Switch>
			</div>
		</Router>
	);
};
