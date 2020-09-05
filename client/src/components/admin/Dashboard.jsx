import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
    return (
        <>
            <div>Admin Dashboard</div>
            <Link to="/new-post">New Blog Post</Link>
        </>
    );
};

export default Dashboard;
