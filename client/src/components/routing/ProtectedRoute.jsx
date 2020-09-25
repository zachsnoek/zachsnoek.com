import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useUserContext } from "../../context/useUserContext";

const ProtectedRoute = ({ component: Component, history, props, ...rest }) => {
    const { user } = useUserContext();

    return (
        <Route
            {...rest}
            render={() =>
                user?.authenticated ? (
                    <Component {...props} />
                ) : (
                    <Redirect to="/" />
                )
            }
        />
    );
};

export default ProtectedRoute;
