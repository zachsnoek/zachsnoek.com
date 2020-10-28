import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Button, Card } from "components/shared";
import PositionSelect from "./PositionSelect";
import "./styles.scss";

const ProjectControls = ({
    numProjects,
    project,
    updatePosition,
    onDelete,
}) => {
    return (
        <Card>
            <Card.Header>
                <div className="d-flex justify-content-between align-items-center">
                <Card.Title>{project.title}</Card.Title>
                    <div className="project-controls">
                    <Button variant="outline-secondary">
                    <Link to={`/edit-project/${project._id}`}>Edit</Link>
                </Button>
                <Button variant="outline-danger" onClick={() => onDelete(project._id)}>
                    Delete
                </Button>

                <PositionSelect
                    _id={project._id}
                    position={project.position}
                    numOptions={numProjects}
                    updatePosition={updatePosition}
                />
                    </div>
                </div>
            </Card.Header>
            <Card.Body>{project.description}</Card.Body>
        </Card>
    );
};

ProjectControls.propTypes = {
    numProjects: PropTypes.number.isRequired,
    project: PropTypes.object.isRequired,
    updatePosition: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
};

export default ProjectControls;
