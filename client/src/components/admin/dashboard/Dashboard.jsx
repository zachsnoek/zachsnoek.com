import React from "react";
import { Link } from "react-router-dom";
import { PageHeader, Button } from "components/shared";

const Dashboard = () => {
    return (
        <div className="form">
            <PageHeader text="Dashboard" />
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
