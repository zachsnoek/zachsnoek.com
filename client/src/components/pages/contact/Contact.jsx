import React, { useState } from "react";
import { API } from "../../../utils/api";
import "./styles.scss";

const Contact = () => {
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

        const response = await fetch(`${API}/contact`, {
            method: "POST",
            mode: "cors",
            cache: "no-cache",
            headers: {
                "Content-Type": "application/json",
            },
            referrerPolicy: "no-referrer",
            body: JSON.stringify(formData),
        });

        const data = await response.json();
        setEmailSent(data.data);
    }

    return (
        <div className="contact">
            <div className="header d-flex justify-content-center">
                <span>Contact</span>
            </div>

            {emailSent ? (
                <p>{emailSent}</p>
            ) : (
                <form onSubmit={(e) => handleSubmit(e)}>
                    <div className="row d-flex justify-content-center">
                        <div className="col">
                            <div className="row">
                                <div className="col">
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
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
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
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row d-flex justify-content-center">
                        <div className="col">
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
                        </div>
                    </div>

                    <div className="row d-flex justify-content-center mt-4">
                        <div className="col d-flex justify-content-center">
                            <button
                                className="btn btn-lg btn-primary"
                                type="submit"
                            >
                                Send Message
                            </button>
                        </div>
                    </div>
                </form>
            )}
        </div>
    );
};

export default Contact;
