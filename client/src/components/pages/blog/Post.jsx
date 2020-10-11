import React from "react";
import PropTypes from "prop-types";
import parse from "html-react-parser";
import { formatDate } from "utils/date";
import "./styles.scss";
import { Row, Col } from "components/shared";

const Post = ({ title, date, content }) => {
    return (
        <Row className="blog-post">
            <Col xs={12} md={10} lg={8} className="ml-auto mr-auto">
                <h1>{title}</h1>
                <div className="blog-date">
                    <span className="badge badge-info">{formatDate(date)}</span>
                </div>

                <div className="blog-body">{parse(content)}</div>
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
