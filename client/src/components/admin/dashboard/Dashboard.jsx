import React from "react";
import { Link } from "react-router-dom";
import { Button } from "components/shared";

const Dashboard = () => {
    return (
        <div className="form">
            <h1>Admin Dashboard</h1>
            <div>
                <Link to="/new-post">
                    <Button size="lg">New Blog Post</Button>
                </Link>
            </div>
            <div>
                <Link to="/portfolio-manager">
                    <Button size="lg">Manage Portfolio</Button>
                </Link>
            </div>
        </div>
    );
};

export default Dashboard;
