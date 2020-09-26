import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
    return (
        <>
            <h1>Admin Dashboard</h1>
            <div>
                <button className="btn btn-lg btn-primary">
                    <Link to="/new-post">New Blog Post</Link>
                </button>
            </div>
            <div>
                <button className="btn btn-lg btn-primary">
                    <Link to="/portfolio-manager">Manage Portfolio</Link>
                </button>
            </div>
        </>
    );
};

export default Dashboard;
