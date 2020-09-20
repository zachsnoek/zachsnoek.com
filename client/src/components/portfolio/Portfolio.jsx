import React, { useState, useEffect } from "react";
import Project from "./Project";
import { getProjects } from "../../utils/api";

const Portfolio = () => {
    const [{ projects, loading }, setState] = useState({
        projects: null,
        loading: true,
    });

    const loadProjects = async () => {
        const response = await getProjects();
        const data = await response.json();
        setState({ projects: data.data, loading: false });
    };

    useEffect(() => {
        loadProjects();
    }, []);

    return (
        <div className="portfolio">
            <div className="header d-flex justify-content-center">
                <span>Portfolio</span>
            </div>

            <div className="row" id="grid">
                {loading
                    ? null
                    : projects.map((project) => (
                          <Project {...project} key={project._id} />
                      ))}
            </div>
        </div>
    );
};

export default Portfolio;
