import React from "react";
import "./styles.css";

const LoadingSpinner = () => {
    return (
        <div style={{ textAlign: "center", marginTop: "4rem" }}>
            <div className="hexdots-loader" />
        </div>
    );
};

export default LoadingSpinner;
