import React from "react";
import { withRouter } from "react-router-dom";
import { createProject } from "../../../utils/api";
import ProjectForm from "./ProjectForm";

const NewProject = withRouter(({ history }) => {
    const onSubmit = async ({
        title,
        description,
        image,
        github,
        website,
        tags,
    }) => {
        const formData = new FormData();

        formData.append("title", title);
        formData.append("description", description);
        formData.append("image", image);
        formData.append("github", github);
        formData.append("website", website);
        tags.forEach((tag) => formData.append("tags[]", tag));

        const response = await createProject(formData);

        if (response.ok) {
            history.push("/portfolio-manager");
        } else {
            // TODO: handle error
            console.log(response);
        }
    };
    return (
        <ProjectForm
            formTitle={"New Project"}
            submitButtonText={"Create Project"}
            onSubmit={onSubmit}
        />
    );
});

export default NewProject;
