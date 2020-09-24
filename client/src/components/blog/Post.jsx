import React, { useState, useEffect } from "react";
import parse from "html-react-parser";
import { getPost } from "../../utils/api";
import { formatDate } from "../../utils/date";

const Post = ({ match, history }) => {
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadPost = async () => {
            const response = await getPost(match.params.id);
            const data = await response.json();

            if (!response.ok) {
                history.push("/oops");
            }

            setPost(data.data);
            setLoading(false);
        };

        loadPost();
    }, [match.params.id, history]);

    return (
        !loading && (
            <div className="blog-post row">
                <div className="col-12 col-md-10 col-lg-8 ml-auto mr-auto">
                    <h1>{post.title}</h1>
                    <div className="blog-date">
                        <span className="badge badge-info">
                            {formatDate(post.createdAt)}
                        </span>
                    </div>

                    <div className="blog-body">{parse(post.content)}</div>
                </div>
            </div>
        )
    );
};

export default Post;
