import React, { useEffect, useState } from "react";
import { getPosts } from "../../utils/api";
import Preview from "./Preview";

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

            {!loading && posts.length
                ? posts.map(
                      ({ _id, title, description, content, createdAt }) => {
                          return (
                              <Preview
                                  id={_id}
                                  title={title}
                                  description={description}
                                  content={content}
                                  createdAt={createdAt}
                                  key={_id}
                                  loadPosts={loadPosts}
                              />
                          );
                      }
                  )
                : null}
        </div>
    );
};

export default Blog;
