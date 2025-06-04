import type { Metadata } from 'next';
import { ContactForm } from '../../components/ContactForm/ContactForm';
import { MainContentLayout } from '../../components/MainContentLayout';
import { Spacer } from '../../components/Spacer';

export const metadata: Metadata = {
    title: 'Contact Zach Snoek',
    description: 'Get in touch with me!',
};

export default function Contact() {
    return (
        <MainContentLayout header="Contact">
            <p>
                Fill out the form below and I&apos;ll get back to you within 2
                business days.
            </p>
            <Spacer size={4} />
            <ContactForm />
        </MainContentLayout>
    );
}
