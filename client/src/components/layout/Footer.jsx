import React from "react";
import "./styles.scss";

const Footer = () => {
    return (
        <footer>
            <hr />
            <div className="center-contents">
                <span>© {new Date().getFullYear()} Zachary D. Snoek</span>
            </div>
        </footer>
    );
};

export default Footer;
