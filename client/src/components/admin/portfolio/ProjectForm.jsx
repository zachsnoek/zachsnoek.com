import React, { useState, useRef } from "react";
import TagsInput from "./TagsInput";

const ProjectForm = ({ formTitle, submitButtonText, onSubmit, project }) => {
    const [formData, setFormData] = useState({
        title: project ? project.title : "",
        description: project ? project.description : "",
        github: project ? project.github : "",
        website: project ? project.website : "",
    });
    const { title, description, github, website } = formData;
    const [tags, setTags] = useState(project ? project.tags : []);
    const fileInput = useRef(null);

    function handleChange(e) {
        if (e.target.name === "image") {
            setFormData({ ...formData, image: fileInput.current.files[0] });
        } else {
            setFormData({ ...formData, [e.target.name]: e.target.value });
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ ...formData, tags });
    };

    return (
        <div className="contact">
            <div className="header d-flex justify-content-center">
                <span>{formTitle}</span>
            </div>

            <form onSubmit={(e) => handleSubmit(e)}>
                <div className="row d-flex justify-content-center">
                    <div className="col">
                        <div className="form-group">
                            <label htmlFor="title">Title</label>
                            <input
                                id="title"
                                name="title"
                                value={title}
                                onChange={(e) => handleChange(e)}
                                className="form-control"
                                type="text"
                                required
                                autoFocus
                                autoComplete="off"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="description">Description</label>
                            <input
                                id="description"
                                name="description"
                                value={description}
                                onChange={(e) => handleChange(e)}
                                className="form-control"
                                type="text"
                                required
                                autoComplete="off"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="github">GitHub Repository</label>
                            <input
                                id="github"
                                name="github"
                                value={github}
                                onChange={(e) => handleChange(e)}
                                className="form-control"
                                type="text"
                                autoComplete="off"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="website">Website</label>
                            <input
                                id="website"
                                name="website"
                                value={website}
                                onChange={(e) => handleChange(e)}
                                className="form-control"
                                type="text"
                                autoComplete="off"
                            />
                        </div>

                        <label htmlFor="image">Image</label>

                        {project?.image ? (
                            <div>{project.image}</div>
                        ) : (
                            <div className="form-group">
                                <input
                                    id="image"
                                    name="image"
                                    type="file"
                                    onChange={(e) => handleChange(e)}
                                    required
                                    ref={fileInput}
                                    style={{ display: "block" }}
                                />
                            </div>
                        )}

                        <TagsInput tags={tags} setTags={setTags} />
                    </div>
                </div>

                <div className="row d-flex justify-content-center mt-4">
                    <div className="col d-flex justify-content-center">
                        <button
                            className="btn btn-lg btn-primary"
                            type="submit"
                        >
                            {submitButtonText}
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default ProjectForm;
