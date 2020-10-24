import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ProjectControls from "./ProjectControls";
import { PageHeader } from "components/shared";
import { getProjects, updateProjectPosition, deleteProject } from "utils/api";

const PortfolioManager = () => {
    const [projects, setProjects] = useState(null);
    const [loading, setLoading] = useState(true);

    const loadProjects = async () => {
        const response = await getProjects();
        const data = await response.json();
        setProjects(data.data);
        setLoading(false);
    };

    const updatePosition = (id, position) => {
        const updatedProjects = projects.map((project) =>
            project._id === id ? { ...project, position } : project
        );

        setProjects(updatedProjects);
    };

    const updatePositions = () => {
        setLoading(true);

        const updatePromises = projects.map((project) =>
            updateProjectPosition(project._id, project)
        );

        Promise.all(updatePromises).then(() => {
            loadProjects();
        });
    };

    const handleDelete = async (id) => {
        setLoading(true);
        await deleteProject(id);
        loadProjects();
    };

    useEffect(() => {
        loadProjects();
    }, []);

    return (
        <div>
            <PageHeader text="Portfolio Manager" />

            <Link to="new-project">New Project</Link>
            <button onClick={updatePositions}>Update Positions</button>
            {!loading &&
                projects.map((project) => (
                    <ProjectControls
                        project={project}
                        numProjects={projects.length}
                        updatePosition={updatePosition}
                        key={project._id}
                        onDelete={(id) => handleDelete(id)}
                    />
                ))}
        </div>
    );
};

export default PortfolioManager;
