import React from "react";
import PropTypes from "prop-types";

const Tags = ({ tags }) => {
    return (
        <ul className="badge-list">
            {tags.map((tag, index) => (
                <li className="badge badge-info" key={index}>
                    #{tag}
                </li>
            ))}
        </ul>
    );
};

Tags.propTypes = {
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Tags;
