import React from "react";
import { withRouter } from "react-router-dom";
import { createPost } from "utils/api";
import PostForm from "./PostForm";

const NewPost = withRouter(({ history }) => {
    async function onSubmit(formData) {
        const response = await createPost(formData);

        if (response.ok) {
            history.push("/blog");
        } else {
            // TODO: handle error
            console.log(response);
        }
    }

    return (
        <PostForm
            formTitle={"Create New Post"}
            submitButtonText={"Create Post"}
            onSubmit={onSubmit}
        />
    );
});

export default NewPost;
