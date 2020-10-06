import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import { getProject, updateProject } from "utils/api";
import ProjectForm from "./ProjectForm";

const EditProject = withRouter(({ match, history }) => {
    const [project, setProject] = useState(null);
    const [loading, setLoading] = useState(true);

    async function onSubmit(formData) {
        const response = await updateProject(match.params.id, formData);

        if (response.ok) {
            history.push("/portfolio");
        } else {
            // TODO: handle error
            console.log(response);
        }
    }

    useEffect(() => {
        const loadProject = async () => {
            const response = await getProject(match.params.id);

            if (response.ok) {
                const data = await response.json();

                if (data.data) {
                    setProject(data.data);
                }

                setLoading(false);
            }
        };

        loadProject();
    }, [match.params.id]);

    return (
        !loading && (
            <ProjectForm
                formTitle={"Edit Project"}
                submitButtonText={"Save Project"}
                onSubmit={onSubmit}
                project={project}
            />
        )
    );
});

export default EditProject;
