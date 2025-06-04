import { CopyableHeader } from '../CopyableHeader/CopyableHeader';
import { Link } from '../Link/Link';
import { BuyMeACoffee } from './BuyMeACoffee/BuyMeACoffee';

export function ConnectSection() {
    return (
        <>
            <CopyableHeader as="h2">Let&apos;s connect</CopyableHeader>
            <p>
                Come connect with me on{' '}
                <a
                    href="https://linkedin.com/in/zachsnoek"
                    target="_blank"
                    rel="noreferrer"
                >
                    LinkedIn
                </a>{' '}
                and{' '}
                <a
                    href="https://github.com/zachsnoek"
                    target="_blank"
                    rel="noreferrer"
                >
                    GitHub
                </a>
                !
            </p>
            <BuyMeACoffee />
        </>
    );
}
