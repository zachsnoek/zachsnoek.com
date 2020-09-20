import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { UserContext } from "./context/UserContext";
import { loadUser } from "./utils/auth";
import ProtectedRoute from "./components/routing/ProtectedRoute";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./components/Home";
import Portfolio from "./components/portfolio/Portfolio";
// import Blog from "./components/blog/Blog";
// import Post from "./components/blog/Post";
import Contact from "./components/contact/Contact";
import Dashboard from "./components/admin/Dashboard";
import NewPost from "./components/admin/NewPost";
import EditPost from "./components/admin/EditPost";
import PortfolioManager from "./components/admin/PortfolioManager";
import NewProject from "./components/admin/NewProject";
import Login from "./components/auth/Login";
import NotFound from "./components/NotFound";

import "./App.scss";

function App() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const load = async () => {
            const userData = await loadUser();
            if (userData)
                setUser({ authenticated: true, token: localStorage.token });
        };

        if (localStorage.token) load();
    }, []);

    return (
        <div className="container">
            <UserContext.Provider value={{ user, setUser }}>
                <Router>
                    <Navbar />
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/portfolio" component={Portfolio} />
                        {/* <Route exact path="/blog" component={Blog} />
                        <Route exact path="/blog/:id" component={Post} /> */}
                        <Route exact path="/contact" component={Contact} />
                        <Route exact path="/login" component={Login} />
                        <ProtectedRoute
                            exact
                            path="/dashboard"
                            component={Dashboard}
                        />
                        <ProtectedRoute
                            exact
                            path="/new-post"
                            component={NewPost}
                        />
                        <ProtectedRoute
                            exact
                            path="/edit-post/:id"
                            component={EditPost}
                        />
                        <ProtectedRoute
                            exact
                            path="/portfolio-manager"
                            component={PortfolioManager}
                        />
                        <ProtectedRoute
                            exact
                            path="/new-project"
                            component={NewProject}
                        />
                        <Route exact path="*" component={NotFound} />
                    </Switch>
                    <Footer />
                </Router>
            </UserContext.Provider>
        </div>
    );
}

export default App;
