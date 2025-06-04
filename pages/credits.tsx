import { MainLayout } from '../components/Layout';
import { Link } from '../components/Link/Link';

export default function Credits() {
    return (
        <MainLayout title="Credits" header="Credits" noIndex>
            <p>
                <Link target="_blank" href="https://velvetyne.fr/fonts/karrik/">
                    Karrick
                </Link>{' '}
                by Jean-Baptiste Morizot and Lucas Le Bihan (Velvetyne Type
                Foundry).
            </p>
        </MainLayout>
    );
}
