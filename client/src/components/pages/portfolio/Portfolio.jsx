import React, { useState, useEffect } from "react";
import Project from "./Project";
import { PageHeader, LoadingSpinner } from "components/shared";
import { getProjects } from "utils/api";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import "./styles.scss";

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
            <PageHeader text="Portfolio" />

            <div>
                {/* Assume that there will be at least one project */}
                {loading ? (
                    <LoadingSpinner />
                ) : (
                    <ResponsiveMasonry
                        columnsCountBreakPoints={{
                            0: 1,
                            600: 2,
                            900: 3,
                        }}
                    >
                        <Masonry gutter="1.5rem" className="masonry">
                            {projects.map((project) => (
                                <Project {...project} key={project._id} />
                            ))}
                        </Masonry>
                    </ResponsiveMasonry>
                )}
            </div>
        </div>
    );
};

export default Portfolio;
