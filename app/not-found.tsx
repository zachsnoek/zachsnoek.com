import { Metadata } from 'next';
import { ContentLayout } from '../components/ContentLayout';

export const metadata: Metadata = {
    title: '404 - Page Not Found',
    robots: 'noindex',
};

export default function NotFound() {
    return (
        <ContentLayout header="Oops...">
            <p>😬 Sorry, it looks like that page doesn&apos;t exist.</p>
        </ContentLayout>
    );
}
