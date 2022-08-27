import { CodePen as MDXEmbedCodePen } from 'mdx-embed';
import styled from 'styled-components';
import { BuyMeACoffee } from '../BuyMeACoffee';
import { CopyableHeader } from '../CopyableHeader';
import { a as A } from './default-replacements';
export const CodePen = ({ id, tabs, ...props }) => (
    <CodePenWrapper>
        <MDXEmbedCodePen codePenId={id} tabs={['result', ...tabs]} {...props} />
    </CodePenWrapper>
);
const CodePenWrapper = styled.div`
    margin-left: calc(var(--spacing-5) * -1);
    margin-right: calc(var(--spacing-5) * -1);

    @media ${(p) => p.theme.queries.tabletAndBelow} {
        margin-left: 0;
        margin-right: 0;
    }
`;

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
                </A>
                ,{' '}
                <A
                    href="https://twitter.com/zach_snoek"
                    target="_blank"
                    rel="noreferrer"
                >
                    Twitter
                </A>
                , and{' '}
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
