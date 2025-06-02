'use client';

import { ContactForm } from '../../components/ContactForm';
import { ContentLayout } from '../../components/ContentLayout';
import { Spacer } from '../../components/Spacer';

export function ContactContent() {
    return (
        <ContentLayout header="Contact">
            <p>
                Fill out the form below and I&apos;ll get back to you within 2
                business days.
            </p>
            <Spacer size={4} />
            <ContactForm />
        </ContentLayout>
    );
}
