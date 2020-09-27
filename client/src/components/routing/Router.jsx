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
                {routes.map((route, index) => {
                    const props = {
                        key: index,
                        exact: true,
                        path: route.path,
                        component: route.component,
                    };

                    return !route.hidden ? (
                        route.protectedRoute ? (
                            <ProtectedRoute {...props} />
                        ) : (
                            <Route {...props} />
                        )
                    ) : null;
                })}
            </Switch>
            <Footer />
        </BrowserRouter>
    );
};
