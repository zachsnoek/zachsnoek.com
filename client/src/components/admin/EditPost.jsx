import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import { getPost, updatePost } from "../../utils/api";
import { makeMD } from "../../utils/markdown";
import PostForm from "./PostForm";

const EditPost = withRouter(({ match, history }) => {
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);

    async function onSubmit(formData) {
        const response = await updatePost(match.params.id, formData);

        if (response.ok) {
            history.push("/blog");
        } else {
            // TODO: handle error
            console.log(response);
        }
    }

    useEffect(() => {
        const loadPost = async () => {
            const response = await getPost(match.params.id);

            if (response.ok) {
                const data = await response.json();

                if (data.data) {
                    data.data.content = makeMD(data.data);
                    setPost(data.data);
                }

                setLoading(false);
            }
        };

        loadPost();
    }, [match.params.id]);

    return (
        !loading && (
            <PostForm
                formTitle={"Edit Post"}
                submitButtonText={"Save Post"}
                onSubmit={onSubmit}
                post={post}
            />
        )
    );
});

export default EditPost;
