import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { loginUser } from "utils/auth";
import { useUserContext } from "context/useUserContext";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

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
        <div className="contact">
            <div className="header d-flex justify-content-center">
                <span>Login</span>
            </div>
            <form onSubmit={(e) => handleSubmit(e)}>
                <Row className="d-flex justify-content-center">
                    <Col>
                        <Row>
                            <Col>
                                <div className="form-group">
                                    <label htmlFor="email">Email address</label>
                                    <input
                                        id="email"
                                        name="email"
                                        value={email}
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
                        <Row>
                            <Col>
                                <div className="form-group">
                                    <label htmlFor="password">Password</label>
                                    <input
                                        id="password"
                                        name="password"
                                        value={password}
                                        onChange={(e) => handleChange(e)}
                                        className="form-control"
                                        type="password"
                                        placeholder="Your password"
                                        required
                                        autoFocus
                                        autoComplete="off"
                                    />
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>

                <Row className="d-flex justify-content-center mt-4">
                    <Col className="d-flex justify-content-center">
                        <button
                            className="btn btn-lg btn-primary"
                            type="submit"
                        >
                            Login
                        </button>
                    </Col>
                </Row>
            </form>
        </div>
    );
};

export default Login;
