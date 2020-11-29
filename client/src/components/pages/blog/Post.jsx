import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import parse from "html-react-parser";
import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";
import { formatDate } from "utils/date";
import { Row, Col } from "components/shared";

import "highlight.js/styles/tomorrow-night.css";
import "./styles.scss";

hljs.registerLanguage("javascript", javascript);

const Post = ({ title, date, content }) => {
    const blogBodyRef = useRef(null);

    useEffect(() => {
        const nodes = blogBodyRef.current.querySelectorAll("pre code");
        nodes.forEach((node) => hljs.highlightBlock(node));
    }, [blogBodyRef]);

    return (
        <Row className="blog-post">
            <Col xs={12} md={10} lg={8} className="ml-auto mr-auto">
                <h1>{title}</h1>
                <div className="blog-date">
                    <span className="badge badge-info">{formatDate(date)}</span>
                </div>

                <div className="blog-body" ref={blogBodyRef}>
                    {parse(content)}
                </div>
            </Col>
        </Row>
    );
};

Post.propTypes = {
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
};

export default Post;
