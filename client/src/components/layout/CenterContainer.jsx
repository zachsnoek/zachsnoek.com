import React from "react";

const CenterContainer = ({ children }) => {
    return (
        <div
            style={{ marginTop: "3rem" }}
            className="d-flex align-items-center justify-content-center"
        >
            {children}
        </div>
    );
};

export default CenterContainer;
