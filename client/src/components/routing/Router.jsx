import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ProtectedRoute } from "./ProtectedRoute";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import { routes } from "./routes";

export const Router = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Switch>
                {routes.map((route, index) =>
                    !route.hidden ? (
                        route.protectedRoute ? (
                            <ProtectedRoute
                                key={index}
                                exact
                                path={route.path}
                                component={route.component}
                            />
                        ) : (
                            <Route
                                key={index}
                                exact
                                path={route.path}
                                component={route.component}
                            />
                        )
                    ) : null
                )}
            </Switch>
            <Footer />
        </BrowserRouter>
    );
};
