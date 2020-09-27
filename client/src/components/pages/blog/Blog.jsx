import React, { useEffect, useState } from "react";
import { getPosts } from "../../../utils/api";
import Preview from "./Preview";
import { CenterContainer, LoadingSpinner } from "../../shared/";

const Blog = () => {
    const [posts, setPosts] = useState(null);
    const [loading, setLoading] = useState(true);

    const loadPosts = async () => {
        const response = await getPosts();
        const data = await response.json();

        setPosts(data.data);
        setLoading(false);
    };

    useEffect(() => {
        loadPosts();
    }, []);

    return (
        <div className="blog">
            <div className="header d-flex justify-content-center">
                <span>Blog</span>
            </div>

            {loading && <LoadingSpinner />}

            {!loading &&
                posts.length > 0 &&
                posts.map(
                    ({ _id, slug, title, description, content, createdAt }) => {
                        return (
                            <Preview
                                id={_id}
                                slug={slug}
                                title={title}
                                description={description}
                                content={content}
                                createdAt={createdAt}
                                key={_id}
                                loadPosts={loadPosts}
                            />
                        );
                    }
                )}

            {!loading && posts.length === 0 && (
                <CenterContainer>
                    There are no posts to display.
                </CenterContainer>
            )}
        </div>
    );
};

export default Blog;
