import React, { useState } from "react";
import {
    Row,
    Col,
    Form,
    BasicFormGroup,
    PageHeader,
    Button,
    CenterContainer,
    LoadingSpinner,
} from "components/shared";
import { contact } from "utils/api";
import "./styles.scss";

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
            <PageHeader text="Contact" />

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
                                    <BasicFormGroup
                                        name="name"
                                        label="Name"
                                        value={name}
                                        onChange={(e) => handleChange(e)}
                                        placeholder="Your name"
                                        autoFocus
                                    />
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <BasicFormGroup
                                        name="fromEmail"
                                        label="Email address"
                                        value={fromEmail}
                                        onChange={(e) => handleChange(e)}
                                        placeholder="Your email"
                                        type="email"
                                    />
                                </Col>
                            </Row>
                        </Col>
                    </Row>

                    <Row className="center-contents">
                        <Col>
                            <BasicFormGroup
                                as="textarea"
                                name="message"
                                label="Message"
                                value={message}
                                onChange={(e) => handleChange(e)}
                                placeholder="Your message"
                                rows={8}
                            />
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
