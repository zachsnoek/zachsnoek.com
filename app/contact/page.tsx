import { Metadata } from 'next';
import { ContactContent } from './ContactContent';

export const metadata: Metadata = {
    title: 'Contact Zach Snoek',
    description: 'Get in touch with me!',
};

export default function Contact() {
    return <ContactContent />;
}
