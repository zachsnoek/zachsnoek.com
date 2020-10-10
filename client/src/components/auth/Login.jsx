import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { loginUser } from "utils/auth";
import { useUserContext } from "context/useUserContext";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Login = ({ history }) => {
    const { user, setUser } = useUserContext();

    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const { email, password } = formData;

    function handleChange(e) {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    async function handleSubmit(e) {
        e.preventDefault();

        const response = await loginUser(formData);
        const data = await response.json();

        if (!response.ok) {
            // TODO: handle error
            console.error(data.error);
            localStorage.clear("token");
            setUser(null);
        } else {
            localStorage.setItem("token", data.token);
            setUser({ authenticated: true });
            history.push("/");
        }
    }

    if (user?.authenticated) return <Redirect to="/" />;

    return (
        <div className="login form">
            <div className="header center-contents">
                <span>Login</span>
            </div>
            <Form onSubmit={(e) => handleSubmit(e)}>
                <Row className="center-contents">
                    <Col>
                        <Row>
                            <Col>
                                <Form.Group>
                                    <Form.Label htmlFor="email">Email address</Form.Label>
                                    <Form.Control
                                        id="email"
                                        name="email"
                                        value={email}
                                        onChange={(e) => handleChange(e)}
                                        type="email"
                                        placeholder="Your email"
                                        required
                                        autoComplete="off"
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Group>
                                    <Form.Label htmlFor="password">Password</Form.Label>
                                    <Form.Control
                                        id="password"
                                        name="password"
                                        value={password}
                                        onChange={(e) => handleChange(e)}
                                        type="password"
                                        placeholder="Your password"
                                        required
                                        autoFocus
                                        autoComplete="off"
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                    </Col>
                </Row>

                <Row className="center-contents">
                    <Col className="center-contents">
                        <Button size="lg" type="submit">
                            Login
                        </Button>
                    </Col>
                </Row>
            </Form>
        </div>
    );
};

export default Login;
