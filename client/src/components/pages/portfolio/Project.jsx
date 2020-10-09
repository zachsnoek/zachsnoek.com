import React from "react";
import PropTypes from "prop-types";
import Tags from "./Tags";
import Links from "./Links";
import { BASE_URL } from "utils/api";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Project = ({ title, description, image, github, website, tags }) => {
    return (
        <div className="card">
            <div className="card-header">
                <span className="card-title">{title}</span>
            </div>
            <img
                src={`${BASE_URL}/${image}`}
                alt="A screenshot of a portfolio project."
            />
            <div className="card-body">{description}</div>
            <div className="card-footer">
                <Row>
                    <Col>
                        <Tags tags={tags} />
                    </Col>
                    <Col xs="auto">
                        <Links github={github} website={website} />
                    </Col>
                </Row>
            </div>
        </div>
    );
};

Project.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    github: PropTypes.string,
    website: PropTypes.string,
    tags: PropTypes.array.isRequired,
};

export default Project;
