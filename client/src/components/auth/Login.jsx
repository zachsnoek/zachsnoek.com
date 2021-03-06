import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import {
    Row,
    Col,
    Form,
    BasicFormGroup,
    PageHeader,
    CenterButton,
} from "components/shared";
import { loginUser } from "utils/auth";
import { useUserContext } from "context/useUserContext";

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
        <div className="form">
            <PageHeader text="Login" />

            <Form onSubmit={(e) => handleSubmit(e)}>
                <Row className="center-contents">
                    <Col>
                        <BasicFormGroup
                            name="email"
                            label="Email address"
                            value={email}
                            onChange={(e) => handleChange(e)}
                            type="email"
                            autoFocus
                        />
                        <BasicFormGroup
                            name="password"
                            label="Password"
                            value={password}
                            onChange={(e) => handleChange(e)}
                            type="password"
                        />

                        <CenterButton size="lg" type="submit">
                            Login
                        </CenterButton>
                    </Col>
                </Row>
            </Form>
        </div>
    );
};

export default Login;
