import React, { useState } from 'react';
import { Button } from '../Button/Button';
import { Input } from '../Input/Input';
import { TextArea } from '../TextArea/TextArea';
import styles from './ContactForm.module.css';

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
        <form
            name="Contact Form"
            action="/contact/success"
            method="POST"
            data-netlify="true"
            className={styles.form}
        >
            <input type="hidden" name="form-name" value="Contact Form" />
            <div className={styles.formGroup}>
                <label htmlFor="name">Name</label>
                <Input
                    type="text"
                    name="name"
                    placeholder="Geddy Lee"
                    required
                    value={formData.name}
                    onChange={handleChange}
                />
            </div>
            <div className={styles.formGroup}>
                <label htmlFor="email">Email</label>
                <Input
                    type="email"
                    name="email"
                    placeholder="geddy@rush.com"
                    required
                    value={formData.email}
                    onChange={handleChange}
                />
            </div>
            <div className={styles.formGroup}>
                <label htmlFor="message">Message</label>
                <TextArea
                    id="message"
                    name="message"
                    className={styles.textArea}
                    placeholder="Let's get the band back together..."
                    required
                    value={formData.message}
                    onChange={handleChange}
                />
            </div>
            <Button type="submit" className={styles.button}>
                Send
            </Button>
        </form>
    );
}
