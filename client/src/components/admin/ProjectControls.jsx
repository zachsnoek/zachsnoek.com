import React from "react";
import PositionSelect from "./PositionSelect";

const ProjectControls = ({
    numProjects,
    project,
    updatePosition,
    onDelete,
}) => {
    // const handleEdit = () => {};

    return (
        <>
            <div>{project.title}</div>
            <button>Edit</button>
            <button onClick={() => onDelete(project._id)}>Delete</button>
            <PositionSelect
                _id={project._id}
                position={project.position}
                numOptions={numProjects}
                updatePosition={updatePosition}
            />
        </>
    );
};

export default ProjectControls;
