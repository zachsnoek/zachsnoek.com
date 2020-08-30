import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { UserContext } from "../../context/UserContext";

const ProtectedRoute = ({ component: Component, history, ...rest }) => {
    const { user } = useContext(UserContext);

    return (
        <Route
            {...rest}
            render={(props) =>
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
