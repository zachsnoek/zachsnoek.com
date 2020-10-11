import React from "react";
import { withRouter, Link } from "react-router-dom";
import { useUserContext } from "context/useUserContext";
import { logoutUser } from "utils/auth";
import { setTitle } from "utils/title";
import { Button } from "components/shared";

const Navbar = withRouter(({ history }) => {
    const { user, setUser } = useUserContext();

    setTitle(history.location);

    const handleLogout = () => {
        logoutUser();
        setUser(null);
        history.push("/login");
    };

    return (
        <>
            <nav className="navbar navbar-expand-md navbar-dark">
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
                <div className="collapse navbar-collapse" id="collapsed">
                    <ul className="navbar-nav">
                        <li className="nav-item nav-link">
                            <Link to="/portfolio">Portfolio</Link>
                        </li>
                        <li className="nav-item nav-link">
                            <Link to="/blog">Blog</Link>
                        </li>
                        <li className="nav-item nav-link">
                            <Link to="/contact">Contact</Link>
                        </li>
                    </ul>
                    <ul className="navbar-nav ml-auto d-flex flex-row">
                        <li className="nav-item">
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

                        {user?.authenticated && (
                            <li className="nav-item">
                                <Link className="nav-link" to="/dashboard">
                                    Dashboard
                                </Link>
                            </li>
                        )}
                        {user?.authenticated && (
                            <li className="nav-item">
                                <Button onClick={handleLogout}>Logout</Button>
                            </li>
                        )}
                    </ul>
                </div>
            </nav>
            <hr />
        </>
    );
});

export default Navbar;
