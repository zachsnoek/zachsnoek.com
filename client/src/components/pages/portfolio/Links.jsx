import React from "react";
import PropTypes from "prop-types";

const Links = ({ github, website }) => {
    const btnNormal = "btn btn-link";
    const btnDisabled = `${btnNormal} disabled`;

    return (
        <ul className="badge-list">
            <li>
                <a
                    href={
                        github
                            ? `https://www.github.com/zachsnoek/${github}`
                            : ""
                    }
                    className={github ? btnNormal : btnDisabled}
                    target="__blank"
                    data-toggle="tooltip"
                    title="View Source"
                >
                    <span className="fa fa-github" aria-hidden="true"></span>
                </a>
            </li>
            <li>
                <a
                    href={website ? website : ""}
                    className={website ? btnNormal : btnDisabled}
                    target="__blank"
                    data-toggle="tooltip"
                    title="View Demo"
                >
                    <span className="fas fa-desktop" aria-hidden="true"></span>
                </a>
            </li>
        </ul>
    );
};

Links.propTypes = {
    github: PropTypes.string,
    website: PropTypes.string,
};

export default Links;
