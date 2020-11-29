import { Button } from "components/shared";
import { useUserContext } from "context/useUserContext";
import React from "react";
import { Link, useHistory, withRouter } from "react-router-dom";
import { ASSETS } from "utils/api";
import { logoutUser } from "utils/auth";
import { setTitle } from "utils/title";
import "./styles.scss";

const Navbar = withRouter(({ history }) => {
    const { user, setUser } = useUserContext();
    const isHomePage = history.location.pathname === "/";

    setTitle(history.location);

    const handleLogout = () => {
        logoutUser();
        setUser(null);
        history.push("/login");
    };

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark">
                <div
                    className="navbar-icon"
                    style={{
                        opacity: isHomePage ? 0 : 1,
                    }}
                >
                    <img
                        src={`${ASSETS}/img/zach-home-circle.png`}
                        alt=""
                        style={{
                            height: isHomePage ? 0 : "3rem",
                            marginRight: isHomePage ? 0 : ".75rem",
                        }}
                    />
                </div>

                <Link to="/">
                    <span className="navbar-brand nav-link">Zach Snoek</span>
                </Link>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapsed"
                    aria-controls="collapsed"
                >
                    <span className="fas fa-bars"></span>
                </button>
                <div
                    className="collapse navbar-collapse mt-3 mt-lg-0"
                    id="collapsed"
                >
                    <ul className="navbar-nav">
                        <NavLink to="/portfolio" title="Portfolio" />
                        <NavLink to="/blog" title="Blog" />
                        <NavLink to="/contact" title="Contact" />
                    </ul>
                    <div className="navbar-nav ml-auto d-flex flex-column">
                        <ul className="navbar-nav d-flex flex-row">
                            <li className="nav-item ml-lg-auto">
                                <a
                                    href="https://www.linkedin.com/in/zach-snoek-5b327b179/"
                                    target="__blank"
                                    className="nav-link"
                                >
                                    <span
                                        className="fab fa-linkedin"
                                        aria-hidden="true"
                                    ></span>
                                </a>
                            </li>

                            <li className="nav-item">
                                <a
                                    href="https://www.github.com/zachsnoek"
                                    target="__blank"
                                    className="nav-link"
                                >
                                    <span
                                        className="fa fa-github"
                                        aria-hidden="true"
                                    ></span>
                                </a>
                            </li>
                        </ul>
                        {user?.authenticated && (
                            <ul className="navbar-nav d-flex flex-row mt-1">
                                <li className="nav-item">
                                    <Link to="/dashboard">
                                        <Button variant="outline-primary">
                                            Dashboard
                                        </Button>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Button
                                        variant="outline-secondary"
                                        onClick={handleLogout}
                                    >
                                        Logout
                                    </Button>
                                </li>
                            </ul>
                        )}
                    </div>
                </div>
            </nav>
            <hr />
        </>
    );
});

const NavLink = ({ to, title }) => {
    const history = useHistory();
    return (
        <li
            className={`nav-item nav-link ${
                history.location.pathname === to ? "nav-link-active" : ""
            }`}
        >
            <Link to={to}>{title}</Link>
        </li>
    );
};

export default Navbar;
