import React, { useState, useRef } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import TagsInput from "./TagsInput";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const ProjectForm = ({ formTitle, submitButtonText, onSubmit, project }) => {
    const [formData, setFormData] = useState({
        title: project ? project.title : "",
        description: project ? project.description : "",
        github: project ? project.github : "",
        website: project ? project.website : "",
    });
    const { title, description, github, website } = formData;

    const [tags, setTags] = useState(project ? project.tags : []);
    const [isPickingNewImage, setIsPickingNewImage] = useState(false);

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
        <div className="project-form form">
            <div className="header center-contents">
                <span>{formTitle}</span>
            </div>

            <Form onSubmit={(e) => handleSubmit(e)}>
                <Row className="center-contents">
                    <Col>
                        <Form.Group>
                            <Form.Label htmlFor="title">Title</Form.Label>
                            <Form.Control
                                id="title"
                                name="title"
                                value={title}
                                onChange={(e) => handleChange(e)}
                                type="text"
                                required
                                autoFocus
                                autoComplete="off"
                            />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label htmlFor="description">Description</Form.Label>
                            <Form.Control
                                id="description"
                                name="description"
                                value={description}
                                onChange={(e) => handleChange(e)}
                                type="text"
                                required
                                autoComplete="off"
                            />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label htmlFor="github">GitHub Repository</Form.Label>
                            <Form.Control
                                id="github"
                                name="github"
                                value={github}
                                onChange={(e) => handleChange(e)}
                                type="text"
                                autoComplete="off"
                            />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label htmlFor="website">Website</Form.Label>
                            <Form.Control
                                id="website"
                                name="website"
                                value={website}
                                onChange={(e) => handleChange(e)}
                                type="text"
                                autoComplete="off"
                            />
                        </Form.Group>

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
