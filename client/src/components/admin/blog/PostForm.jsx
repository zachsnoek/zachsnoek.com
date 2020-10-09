import React, { useState } from "react";
import SimpleMDE from "react-simplemde-editor";
import { Post } from "components/pages";
import { makeHTML } from "utils/markdown";
import "easymde/dist/easymde.min.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

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
                            <button
                                className="btn btn-lg btn-primary"
                                type="button"
                                onClick={() => setShowPreview(false)}
                            >
                                Continue Editing
                            </button>
                        </Col>
                    </Row>

                    <Post
                        title={title}
                        date={Date.now()}
                        content={makeHTML({ content })}
                    />
                </>
            ) : (
                <form onSubmit={(e) => handleSubmit(e)}>
                    <Row className="center-contents">
                        <Col>
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
                        </Col>
                    </Row>

                    <Row className="center-contents">
                        <Col>
                            <div className="form-group">
                                <label htmlFor="content">Content</label>
                                <SimpleMDE
                                    value={content}
                                    onChange={(value) =>
                                        setFormData({
                                            ...formData,
                                            content: value,
                                        })
                                    }
                                />
                            </div>
                        </Col>
                    </Row>

                    <Row className="center-contents">
                        <Col className="center-contents">
                            <button
                                className="btn btn-lg btn-primary"
                                type="button"
                                onClick={() => setShowPreview(true)}
                            >
                                Preview
                            </button>
                        </Col>
                    </Row>

                    <Row className="center-contents">
                        <Col className="center-contents">
                            <button
                                className="btn btn-lg btn-primary"
                                type="submit"
                            >
                                {submitButtonText}
                            </button>
                        </Col>
                    </Row>
                </form>
            )}
        </div>
    );
};

export default PostForm;
