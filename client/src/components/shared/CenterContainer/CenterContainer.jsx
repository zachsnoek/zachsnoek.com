import React from "react";

const CenterContainer = ({ style, ...props }) => {
    return (
        <div
            style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                textAlign: "center",
                ...style,
            }}
            {...props}
        />
    );
};

export default CenterContainer;
