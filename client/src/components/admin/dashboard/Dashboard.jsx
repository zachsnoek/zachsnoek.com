import React from "react";
import { Link } from "react-router-dom";
import { PageHeader, Button } from "components/shared";

const Dashboard = () => {
    return (
        <div>
            <PageHeader text="Dashboard" />

            <div style={{ textAlign: "center" }}>
                <Link to="/new-post">
                    <Button className="mr-2" size="lg">
                        New Blog Post
                    </Button>
                </Link>
                <Link to="/portfolio-manager">
                    <Button variant="secondary" size="lg">
                        Manage Portfolio
                    </Button>
                </Link>
            </div>
        </div>
    );
};

export default Dashboard;
