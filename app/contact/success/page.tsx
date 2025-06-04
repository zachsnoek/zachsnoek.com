import type { Metadata } from 'next';
import { MainContentLayout } from '../../../components/MainContentLayout';

export const metadata: Metadata = {
    title: 'Contact Zach Snoek',
    description: 'Get in touch with me!',
    robots: 'noindex',
};

export default function ContactSuccessPage() {
    return (
        <MainContentLayout header="Contact">
            <p>
                Your message has been received. I&apos;ll get back to you soon!
            </p>
        </MainContentLayout>
    );
}
