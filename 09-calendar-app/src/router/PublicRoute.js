import React from "react";
import { Redirect, Route } from "react-router";
import PropTypes from "prop-types";

export const PublicRoute = ({
	isAutenticated,
	component: Component,
	...rest
}) => {
	return (
		<Route
			{...rest}
			component={(props) =>
				isAutenticated ? <Redirect to="/" /> : <Component {...props} />
			}
		/>
	);
};

PublicRoute.propTypes = {
	isAutenticated: PropTypes.bool.isRequired,
	component: PropTypes.func.isRequired
};
