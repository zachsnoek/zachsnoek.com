import React, { useState, useEffect } from "react";
import Post from "./Post";
import { getPost } from "../../../utils/api";

const PostPage = ({ match, history }) => {
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
            <Post
                title={post.title}
                date={post.createdAt}
                content={post.content}
            />
        )
    );
};

export default PostPage;
