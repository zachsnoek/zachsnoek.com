import { BuyMeACoffee } from '../BuyMeACoffee/BuyMeACoffee';
import { CopyableHeader } from '../CopyableHeader/CopyableHeader';
import { a as A } from './default-replacements';
export { CodePen } from './CodePen/CodePen';
export { OpenToWork } from '../OpenToWork/OpenToWork';

export * from '../../content/blog/reducer-functions-without-the-switch/components';

export function ConnectSection() {
    return (
        <>
            <CopyableHeader as="h2">Let&apos;s connect</CopyableHeader>
            <p>
                Come connect with me on{' '}
                <A
                    href="https://linkedin.com/in/zachsnoek"
                    target="_blank"
                    rel="noreferrer"
                >
                    LinkedIn
                </A>{' '}
                and{' '}
                <A
                    href="https://github.com/zachsnoek"
                    target="_blank"
                    rel="noreferrer"
                >
                    GitHub
                </A>
                !
            </p>
            <BuyMeACoffee />
        </>
    );
}
