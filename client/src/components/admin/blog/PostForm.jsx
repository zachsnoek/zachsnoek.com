import React, { useState } from "react";
import PropTypes from "prop-types";
import SimpleMDE from "react-simplemde-editor";
import { Post } from "components/pages";
import { makeHTML } from "utils/markdown";
import "easymde/dist/easymde.min.css";

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
        <div className="contact">
            <div className="header d-flex justify-content-center">
                <span>{formTitle}</span>
            </div>

            {showPreview ? (
                <>
                    <div className="row d-flex justify-content-center mt-4">
                        <div className="col d-flex justify-content-center">
                            <button
                                className="btn btn-lg btn-primary"
                                type="button"
                                onClick={() => setShowPreview(false)}
                            >
                                Continue Editing
                            </button>
                        </div>
                    </div>

                    <Post
                        title={title}
                        date={new Date().toUTCString()}
                        content={makeHTML({ content })}
                    />
                </>
            ) : (
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
                        </div>
                    </div>

                    <div className="row d-flex justify-content-center">
                        <div className="col">
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
                        </div>
                    </div>

                    <div className="row d-flex justify-content-center mt-4">
                        <div className="col d-flex justify-content-center">
                            <button
                                className="btn btn-lg btn-primary"
                                type="button"
                                onClick={() => setShowPreview(true)}
                            >
                                Preview
                            </button>
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
