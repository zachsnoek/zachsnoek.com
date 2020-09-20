import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
    return (
        <>
            <div>Admin Dashboard</div>
            <div>
                <Link to="/new-post">New Blog Post</Link>
            </div>
            <div>
                <Link to="/portfolio-manager">Manage Portfolio</Link>
            </div>
        </>
    );
};

export default Dashboard;
