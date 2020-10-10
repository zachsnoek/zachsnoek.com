import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import PositionSelect from "./PositionSelect";

const ProjectControls = ({
    numProjects,
    project,
    updatePosition,
    onDelete,
}) => {
    return (
        <>
            <div>{project.title}</div>
            <button>
                <Link to={`/edit-project/${project._id}`}>Edit</Link>
            </button>
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

ProjectControls.propTypes = {
    numProjects: PropTypes.number.isRequired,
    project: PropTypes.object.isRequired,
    updatePosition: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
};

export default ProjectControls;
