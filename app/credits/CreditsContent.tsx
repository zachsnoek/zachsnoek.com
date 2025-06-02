'use client';

import { ContentLayout } from '../../components/ContentLayout';
import { Link } from '../../components/Link';

export function CreditsContent() {
    return (
        <ContentLayout header="Credits">
            <p>
                <Link target="_blank" href="https://velvetyne.fr/fonts/karrik/">
                    Karrick
                </Link>{' '}
                by Jean-Baptiste Morizot and Lucas Le Bihan (Velvetyne Type
                Foundry).
            </p>
        </ContentLayout>
    );
}
