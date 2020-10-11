import React from "react";
import PropTypes from "prop-types";
import Tags from "./Tags";
import Links from "./Links";
import { BASE_URL } from "utils/api";
import { Row, Col, Card } from "components/shared";

const Project = ({ title, description, image, github, website, tags }) => {
    return (
        <Card>
            <Card.Header>
                <Card.Title>{title}</Card.Title>
            </Card.Header>
            <img
                src={`${BASE_URL}/${image}`}
                alt="A screenshot of a portfolio project."
            />
            <Card.Body>{description}</Card.Body>
            <Card.Footer>
                <Row>
                    <Col>
                        <Tags tags={tags} />
                    </Col>
                    <Col xs="auto">
                        <Links github={github} website={website} />
                    </Col>
                </Row>
            </Card.Footer>
        </Card>
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
