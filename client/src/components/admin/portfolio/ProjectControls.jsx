import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Button } from "components/shared";
import PositionSelect from "./PositionSelect";

const ProjectControls = ({
    numProjects,
    project,
    updatePosition,
    onDelete,
}) => {
    return (
        <div>
            <div>{project.title}</div>

            <Button variant="warning">
                <Link to={`/edit-project/${project._id}`}>Edit</Link>
            </Button>
            <Button variant="danger" onClick={() => onDelete(project._id)}>
                Delete
            </Button>

            <PositionSelect
                _id={project._id}
                position={project.position}
                numOptions={numProjects}
                updatePosition={updatePosition}
            />
        </div>
    );
};

ProjectControls.propTypes = {
    numProjects: PropTypes.number.isRequired,
    project: PropTypes.object.isRequired,
    updatePosition: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
};

export default ProjectControls;
