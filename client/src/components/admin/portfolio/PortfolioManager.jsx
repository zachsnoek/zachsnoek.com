import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getProjects, updateProject, deleteProject } from "utils/api";
import ProjectControls from "./ProjectControls";

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
            project._id === id ? { ...project, _id: id, position } : project
        );

        setProjects(updatedProjects);
    };

    const updatePositions = () => {
        setLoading(true);
        projects.forEach(
            async (project) => await updateProject(project._id, project)
        );
        loadProjects();
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
        <>
            <div>Portfolio Manager</div>
            <Link to="new-project">New Project</Link>
            <button onClick={updatePositions}>Update Positions</button>
            {!loading &&
                projects.map((project, index) => (
                    <ProjectControls
                        project={project}
                        numProjects={projects.length}
                        updatePosition={updatePosition}
                        key={index}
                        onDelete={(id) => handleDelete(id)}
                    />
                ))}
        </>
    );
};

export default PortfolioManager;
