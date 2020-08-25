import React from "react";

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-md navbar-dark">
                <a className="navbar-brand nav-link" href="/">
                    Zach Snoek
                </a>
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
                            <a className="nav-link" href="/portfolio">
                                Porfolio
                            </a>
                        </li>
                        {/* <li className="nav-item">
                            <a className="nav-link" href="/blog">
                                Blog
                            </a>
                        </li> */}
                        <li className="nav-item">
                            <a className="nav-link" href="/contact">
                                Contact
                            </a>
                        </li>
                    </ul>
                    <ul className="navbar-nav ml-auto d-flex flex-row">
                        <li className="nav-item">
                            <a
                                href="https://www.linkedin.com/in/zach-snoek-5b327b179/"
                                className="nav-link"
                                target="__blank"
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
                                className="nav-link"
                                target="__blank"
                            >
                                <span
                                    className="fa fa-github"
                                    aria-hidden="true"
                                ></span>
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
            <hr />
        </>
    );
};

export default Navbar;
