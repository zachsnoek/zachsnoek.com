import React from "react";

const Footer = () => {
    return (
        <footer>
            <hr />
            <div className="d-flex justify-content-center">
                <span>© {new Date().getFullYear()} Zachary D. Snoek</span>
            </div>
        </footer>
    );
};

export default Footer;
