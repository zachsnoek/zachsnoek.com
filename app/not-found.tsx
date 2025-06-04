import { Link } from '../components/Link/Link';
import { MainContentLayout } from '../components/MainContentLayout';

import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: '404 - Page Not Found',
    robots: 'noindex',
};

export default function Custom404() {
    return (
        <MainContentLayout header="Oops...">
            <p>
                😬 Sorry, it looks like that page doesn&apos;t exist.{' '}
                <Link href="/">Return home</Link>
            </p>
        </MainContentLayout>
    );
}
