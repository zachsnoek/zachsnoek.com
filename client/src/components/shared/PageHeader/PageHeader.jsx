import React from "react";
import PropTypes from "prop-types";

const PageHeader = ({ text }) => {
    return (
        <div className="header center-contents">
            <span>{text}</span>
        </div>
    );
};

PageHeader.propTypes = {
    text: PropTypes.string.isRequired,
};

export default PageHeader;
