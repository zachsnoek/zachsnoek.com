import React from "react";

const CenterContainer = ({ children, ...props }) => {
    return (
        <div
            style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                textAlign: "center",
            }}
            {...props}
        >
            {children}
        </div>
    );
};

export default CenterContainer;
