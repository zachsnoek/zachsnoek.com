import React from "react";
import { Button } from "../bootstrap";

const CenterButton = (props) => {
    return (
        <div style={{ textAlign: "center" }}>
            <Button {...props} />
        </div>
    );
};

export default CenterButton;
