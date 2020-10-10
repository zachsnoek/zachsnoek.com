import React, { useState } from "react";
import { CenterContainer, LoadingSpinner } from "components/shared";
import { contact } from "utils/api";
import "./styles.scss";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

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
        <div className="contact form">
            <div className="header center-contents">
                <span>Contact</span>
            </div>

            {loading && <LoadingSpinner />}

            {emailSent && (
                <CenterContainer>{emailSent.message}</CenterContainer>
            )}

            {!loading && !emailSent && (
                <Form onSubmit={(e) => handleSubmit(e)}>
                    <Row className="center-contents">
                        <Col>
                            <Row>
                                <Col>
                                    <Form.Group>
                                        <Form.Label htmlFor="name">Name</Form.Label>
                                        <Form.Control
                                            id="name"
                                            name="name"
                                            value={name}
                                            onChange={(e) => handleChange(e)}
                                            type="text"
                                            placeholder="Your name"
                                            required
                                            autoFocus
                                            autoComplete="off"
                                        />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Form.Group>
                                        <Form.Label htmlFor="email">
                                            Email address
                                        </Form.Label>
                                        <Form.Control
                                            id="email"
                                            name="fromEmail"
                                            value={fromEmail}
                                            onChange={(e) => handleChange(e)}
                                            type="email"
                                            placeholder="Your email"
                                            required
                                            autoComplete="off"
                                        />
                                    </Form.Group>
                                </Col>
                            </Row>
                        </Col>
                    </Row>

                    <Row className="center-contents">
                        <Col>
                            <Form.Group>
                                <Form.Label htmlFor="message">Message</Form.Label>
                                <Form.Control
                                    as="textarea"
                                    id="message"
                                    name="message"
                                    value={message}
                                    onChange={(e) => handleChange(e)}
                                    placeholder="Your message"
                                    rows="8"
                                    required
                                />
                            </Form.Group>
                        </Col>
                    </Row>

                    <Row className="center-contents">
                        <Col className="center-contents">
                            <Button size="lg" type="submit">
                                Send Message
                            </Button>
                        </Col>
                    </Row>
                </Form>
            )}
        </div>
    );
};

export default Contact;
