import type { Metadata } from 'next';
import { Link } from '../../components/Link/Link';
import { MainContentLayout } from '../../components/MainContentLayout';

export const metadata: Metadata = {
    title: 'Credits',
    robots: 'noindex',
};

export default function CreditsPage() {
    return (
        <MainContentLayout header="Credits">
            <p>
                <Link target="_blank" href="https://velvetyne.fr/fonts/karrik/">
                    Karrick
                </Link>{' '}
                by Jean-Baptiste Morizot and Lucas Le Bihan (Velvetyne Type
                Foundry).
            </p>
        </MainContentLayout>
    );
}
