import { Metadata } from 'next';
import { CreditsContent } from './CreditsContent';

export const metadata: Metadata = {
    robots: 'noindex',
};

export default function Credits() {
    return <CreditsContent />;
}
