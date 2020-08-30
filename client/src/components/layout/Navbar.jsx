import React, { useContext } from "react";
import { withRouter, Link } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import { logoutUser } from "../../utils/auth";

const Navbar = withRouter(({ history }) => {
    const { user, setUser } = useContext(UserContext);

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
                        <li className="nav-item">
                            <Link className="nav-link" to="/portfolio">
                                Portfolio
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact">
                                Contact
                            </Link>
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
                                <button onClick={handleLogout}>Logout</button>
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
