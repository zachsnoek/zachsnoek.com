import React from "react";
import PropTypes from "prop-types";
import Tags from "./Tags";
import Links from "./Links";
import { BASE_URL } from "utils/api";

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
                <div className="row">
                    <div className="col">
                        <Tags tags={tags} />
                    </div>
                    <div className="col-auto">
                        <Links github={github} website={website} />
                    </div>
                </div>
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
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Project;
