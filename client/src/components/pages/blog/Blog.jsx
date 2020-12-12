import React, { useEffect, useState } from "react";
import { getPosts } from "utils/api";
import Preview from "./Preview";
import { PageHeader, LoadingSpinner } from "components/shared";
import "./styles.scss";

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
            <PageHeader text="Blog" />

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
                <div style={{ textAlign: "center" }}>
                    I'm not currently writing on this blog, but check out some
                    of my posts at{" "}
                    <a className="blog-link" href="https://dev.to/zachsnoek">
                        DEV Community
                    </a>
                    !
                </div>
            )}
        </div>
    );
};

export default Blog;
