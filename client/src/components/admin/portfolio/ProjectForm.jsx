import React, { useState, useRef } from "react";
import {
    Row,
    Col,
    Form,
    BasicFormGroup,
    PageHeader,
    Button,
} from "components/shared";
import TagsInput from "./TagsInput";

const ProjectForm = ({ formTitle, submitButtonText, onSubmit, project }) => {
    const [formData, setFormData] = useState({
        title: project?.title ?? "",
        description: project?.description ?? "",
        github: project?.github ?? "",
        website: project?.website ?? "",
    });
    const { title, description, github, website } = formData;

    const [tags, setTags] = useState(project ? project.tags : []);
    const [isPickingNewImage, setIsPickingNewImage] = useState(false);

    const fileInput = useRef(null);

    function handleChange(e) {
        e.target.name === "image"
            ? setFormData({ ...formData, image: fileInput.current.files[0] })
            : setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ ...formData, tags });
    };

    return (
        <div className="project-form form">
            <PageHeader text={formTitle} />

            <Form onSubmit={(e) => handleSubmit(e)}>
                <Row className="center-contents">
                    <Col>
                        <BasicFormGroup
                            name="title"
                            label="Title"
                            value={title}
                            onChange={(e) => handleChange(e)}
                            autoFocus
                        />
                        <BasicFormGroup
                            name="description"
                            label="Description"
                            value={description}
                            onChange={(e) => handleChange(e)}
                        />
                        <BasicFormGroup
                            name="github"
                            label="GitHub Repository"
                            value={github}
                            onChange={(e) => handleChange(e)}
                            optional
                        />
                        <BasicFormGroup
                            name="website"
                            label="Website"
                            value={website}
                            onChange={(e) => handleChange(e)}
                            optional
                        />

                        <Form.Label htmlFor="image">Image</Form.Label>

                        {project?.image && <div>{project.image}</div>}

                        {project?.image && !isPickingNewImage && (
                            <>
                                <Button
                                    size="md"
                                    onClick={() => setIsPickingNewImage(true)}
                                >
                                    {"Choose new image"}
                                </Button>
                            </>
                        )}

                        {(!project?.image || isPickingNewImage) && (
                            <Form.Group>
                                <input
                                    id="image"
                                    name="image"
                                    type="file"
                                    onChange={(e) => {
                                        handleChange(e);
                                        if (isPickingNewImage) {
                                            setIsPickingNewImage(false);
                                        }
                                    }}
                                    required
                                    ref={fileInput}
                                    style={{ display: "block" }}
                                />
                            </Form.Group>
                        )}

                        <TagsInput tags={tags} setTags={setTags} />
                    </Col>
                </Row>

                <Row className="center-contents">
                    <Col className="center-contents">
                        <Button size="lg" type="submit">
                            {submitButtonText}
                        </Button>
                    </Col>
                </Row>
            </Form>
        </div>
    );
};

export const createFormData = ({
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
    formData.append("github", github);
    formData.append("website", website);
    image && formData.append("image", image);
    tags.forEach((tag) => formData.append("tags[]", tag));

    return formData;
};

export default ProjectForm;
