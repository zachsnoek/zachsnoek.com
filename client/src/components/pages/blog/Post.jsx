import React from "react";
import parse from "html-react-parser";
import { formatDate } from "utils/date";
import "./styles.scss";

const Post = ({ title, date, content }) => {
    return (
        <div className="blog-post row">
            <div className="col-12 col-md-10 col-lg-8 ml-auto mr-auto">
                <h1>{title}</h1>
                <div className="blog-date">
                    <span className="badge badge-info">{formatDate(date)}</span>
                </div>

                <div className="blog-body">{parse(content)}</div>
            </div>
        </div>
    );
};

export default Post;
