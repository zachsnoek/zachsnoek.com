import { CodePen as MDXEmbedCodePen } from 'mdx-embed';
import styled from 'styled-components';

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
