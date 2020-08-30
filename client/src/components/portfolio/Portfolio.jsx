import React, { useState, useEffect } from "react";
import { API } from "../../utils/api";
import Project from "./Project";

const Portfolio = () => {
    const [{ projects, loading }, setState] = useState({
        projects: null,
        loading: true,
    });

    const getProjects = async () => {
        const response = await fetch(`${API}/portfolio`);
        const data = await response.json();
        setState({ projects: data.data, loading: false });
    };

    useEffect(() => {
        getProjects();
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
