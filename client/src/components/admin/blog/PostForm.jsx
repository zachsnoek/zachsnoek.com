import React, { useState } from "react";
import SimpleMDE from "react-simplemde-editor";
import { Post } from "components/pages";
import { makeHTML } from "utils/markdown";
import "easymde/dist/easymde.min.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const PostForm = ({ formTitle, submitButtonText, onSubmit, post }) => {
    const [showPreview, setShowPreview] = useState(false);
    const [formData, setFormData] = useState({
        title: post ? post.title : "",
        description: post ? post.description : "",
        content: post ? post.content : "",
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
            <div className="header center-contents">
                <span>{formTitle}</span>
            </div>

            {showPreview ? (
                <>
                    <Row className="center-contents">
                        <Col className="center-contents">
                            <Button
                                size="lg"
                                onClick={() => setShowPreview(false)}
                            >
                                Continue Editing
                            </Button>
                        </Col>
                    </Row>

                    <Post
                        title={title}
                        date={Date.now()}
                        content={makeHTML({ content })}
                    />
                </>
            ) : (
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
                        </Col>
                    </Row>

                    <Row className="center-contents">
                        <Col>
                            <Form.Group>
                                <Form.Label htmlFor="content">Content</Form.Label>
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
                        </Col>
                    </Row>

                    <Row className="center-contents">
                        <Col className="center-contents">
                            <Button
                                size="lg"
                                onClick={() => setShowPreview(true)}
                            >
                                Preview
                            </Button>
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
            )}
        </div>
    );
};

export default PostForm;
