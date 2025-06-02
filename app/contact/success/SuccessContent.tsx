'use client';

import { Metadata } from 'next';
import { ContentLayout } from '../../../components/ContentLayout';

export const metadata: Metadata = {
    robots: 'noindex',
};

export function SuccessContent() {
    return (
        <ContentLayout header="Contact">
            <p>
                Your message has been received. I&apos;ll get back to you soon!
            </p>
        </ContentLayout>
    );
}
