import React, { useState } from 'react';
import styled from 'styled-components';
import { Input } from './Input';
import { TextArea } from './TextArea';
import { Button } from './Button';

export function ContactForm() {
    const [formData, setFormData] = useState<{
        name: string;
        email: string;
        message: string;
    }>({ name: '', email: '', message: '' });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <Form
            name="Contact Form"
            action="/contact/success"
            method="POST"
            data-netlify="true"
        >
            <input type="hidden" name="form-name" value="Contact Form" />
            <FormGroup>
                <label htmlFor="name">Name</label>
                <Input
                    type="text"
                    name="name"
                    placeholder="Geddy Lee"
                    required
                    value={formData.name}
                    onChange={handleChange}
                />
            </FormGroup>
            <FormGroup>
                <label htmlFor="email">Email</label>
                <Input
                    type="email"
                    name="email"
                    placeholder="geddy@rush.com"
                    required
                    value={formData.email}
                    onChange={handleChange}
                />
            </FormGroup>
            <FormGroup>
                <label htmlFor="message">Message</label>
                <FormTextArea
                    id="message"
                    name="message"
                    placeholder="Let's get the band back together..."
                    required
                    value={formData.message}
                    onChange={handleChange}
                />
            </FormGroup>
            <SubmitButton type="submit">Send</SubmitButton>
        </Form>
    );
}

const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: var(--spacing-3);
`;

const FormGroup = styled.div`
    display: flex;
    flex-direction: column;
    gap: var(--spacing-2);
`;

const FormTextArea = styled(TextArea)`
    height: var(--spacing-10);
`;

const SubmitButton = styled(Button)`
    align-self: flex-start;
`;
