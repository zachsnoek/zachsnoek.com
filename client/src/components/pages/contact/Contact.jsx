import React, { useState } from "react";
import { CenterContainer, LoadingSpinner } from "components/shared";
import { contact } from "utils/api";
import "./styles.scss";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Contact = () => {
    const [loading, setLoading] = useState(false);
    const [emailSent, setEmailSent] = useState(null);
    const [formData, setFormData] = useState({
        name: "",
        fromEmail: "",
        message: "",
    });

    const { name, fromEmail, message } = formData;

    function handleChange(e) {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    async function handleSubmit(e) {
        e.preventDefault();
        setLoading(true);

        const response = await contact(formData);
        const data = await response.json();

        setEmailSent({ message: response.ok ? data.data : data.error });
        setLoading(false);
    }

    return (
        <div className="contact">
            <div className="header center-contents">
                <span>Contact</span>
            </div>

            {loading && <LoadingSpinner />}

            {emailSent && (
                <CenterContainer>{emailSent.message}</CenterContainer>
            )}

            {!loading && !emailSent && (
                <form onSubmit={(e) => handleSubmit(e)}>
                    <Row className="center-contents">
                        <Col>
                            <Row>
                                <Col>
                                    <div className="form-group">
                                        <label htmlFor="name">Name</label>
                                        <input
                                            id="name"
                                            name="name"
                                            value={name}
                                            onChange={(e) => handleChange(e)}
                                            className="form-control"
                                            type="text"
                                            placeholder="Your name"
                                            required
                                            autoFocus
                                            autoComplete="off"
                                        />
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <div className="form-group">
                                        <label htmlFor="email">
                                            Email address
                                        </label>
                                        <input
                                            id="email"
                                            name="fromEmail"
                                            value={fromEmail}
                                            onChange={(e) => handleChange(e)}
                                            className="form-control"
                                            type="email"
                                            placeholder="Your email"
                                            required
                                            autoComplete="off"
                                        />
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>

                    <Row className="center-contents">
                        <Col>
                            <div className="form-group">
                                <label htmlFor="message">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={message}
                                    onChange={(e) => handleChange(e)}
                                    className="form-control"
                                    placeholder="Your message"
                                    rows="8"
                                    required
                                ></textarea>
                            </div>
                        </Col>
                    </Row>

                    <Row className="center-contents mt-4">
                        <Col className="center-contents">
                            <button
                                className="btn btn-lg btn-primary"
                                type="submit"
                            >
                                Send Message
                            </button>
                        </Col>
                    </Row>
                </form>
            )}
        </div>
    );
};

export default Contact;
