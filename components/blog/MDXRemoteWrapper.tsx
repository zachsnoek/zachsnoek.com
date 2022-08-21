import styled from 'styled-components';

export const MDXRemoteWrapper = styled.div`
    & *:not(h1, h2, h3, h4, h5, h6) {
        line-height: 1.8;
    }

    /* 🥴 */
    & :first-child h2 {
        margin-top: 0;
    }

    h2,
    h3,
    p,
    ol,
    ul,
    code,
    .mdx-embed {
        margin-bottom: var(--spacing-5);
    }

    /* Don't apply bottom margin to nested lists */
    ul ul {
        margin-bottom: 0;
    }

    /* Inline code snippets */
    code:not(.hljs) {
        background: var(--color-background-light);
        padding: var(--spacing-1);
        border-radius: var(--border-radius-1);
    }

    p code:not(.hljs) {
        font-size: var(--font-size-code);
    }
`;
