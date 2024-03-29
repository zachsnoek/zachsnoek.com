import { MainLayout } from '../components/Layout';

export default function Custom404() {
    return (
        <MainLayout title="404 - Page Not Found" header="Oops..." noIndex>
            <p>😬 Sorry, it looks like that page doesn&apos;t exist.</p>
        </MainLayout>
    );
}
