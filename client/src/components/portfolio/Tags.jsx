import React from "react";
import PropTypes from "prop-types";

const Tags = ({ tags }) => {
    return (
        <ul className="tags">
            {tags.map((tag, index) => (
                <li className="badge badge-info" key={index}>
                    #{tag}
                </li>
            ))}
        </ul>
    );
};

Tags.propTypes = {
    tags: PropTypes.array.isRequired,
};

export default Tags;
