import React, { useState } from "react";
import PropTypes from "prop-types";
import SimpleMDE from "react-simplemde-editor";
import { Post } from "components/pages";
import { makeHTML } from "utils/markdown";
import "easymde/dist/easymde.min.css";
import {
    Row,
    Col,
    Form,
    BasicFormGroup,
    PageHeader,
    CenterButton,
    Button,
} from "components/shared";

const PostForm = ({ formTitle, submitButtonText, onSubmit, post }) => {
    const [showPreview, setShowPreview] = useState(false);
    const [formData, setFormData] = useState({
        title: post?.title ?? "",
        description: post?.description ?? "",
        content: post?.content ?? "",
    });

    const { title, description, content } = formData;

    function handleChange(e) {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
    };

    return (
        <div className="post-form form">
            <PageHeader text={formTitle} />

            {showPreview ? (
                <>
                    <CenterButton
                        style={{ marginTop: "0", marginBottom: ".5rem" }}
                        size="lg"
                        onClick={() => setShowPreview(false)}
                    >
                        Continue Editing
                    </CenterButton>

                    <Post
                        title={title}
                        date={new Date().toUTCString()}
                        content={makeHTML({ content })}
                    />
                </>
            ) : (
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

                            <Form.Group>
                                <Form.Label htmlFor="content">
                                    Content
                                </Form.Label>
                                <SimpleMDE
                                    value={content}
                                    onChange={(value) =>
                                        setFormData({
                                            ...formData,
                                            content: value,
                                        })
                                    }
                                />
                            </Form.Group>

                            <div style={{ textAlign: "center" }}>
                                <Button
                                    className="mr-2"
                                    size="lg"
                                    variant="outline-secondary"
                                    onClick={() => setShowPreview(true)}
                                >
                                    Preview
                                </Button>
                                <Button size="lg" type="submit">
                                    {submitButtonText}
                                </Button>
                            </div>
                        </Col>
                    </Row>
                </Form>
            )}
        </div>
    );
};

PostForm.propTypes = {
    formTitle: PropTypes.string.isRequired,
    submitButtonText: PropTypes.string.isRequired,
    onSubmit: PropTypes.func.isRequired,
    post: PropTypes.object,
};

export default PostForm;
