import styled from 'styled-components';
import { CopyableHeader } from '../CopyableHeader';

// https://github.com/hashicorp/next-mdx-remote#replacing-default-components

export function h1() {
    throw new Error('Do not use `h1`s in blog posts!');
}

export function h2(props) {
    return <CopyableHeader as="h2" {...props} />;
}

export function h3(props) {
    return <CopyableHeader as="h3" {...props} />;
}

const OurOl = styled.ol`
    padding-left: 0px;
    margin-left: 22px; /* offsets max width container padding; subtracts 2px for optical alignment */
`;
export function ol(props) {
    return <OurOl {...props} />;
}

const OurUl = styled.ul`
    padding-left: 0px;
    margin-left: 22px; /* offsets max width container padding; subtracts 2px for optical alignment */
    list-style-position: outside;
`;
export function ul(props) {
    return <OurUl {...props} />;
}

const OurA = styled.a`
    color: var(--color-pink-500);
    text-decoration: none;

    &:hover {
        color: var(--color-pink-500);
        text-decoration: underline;
    }
`;
export function a(props) {
    return <OurA {...props} />;
}

const OurBlockquote = styled.blockquote`
    margin-left: 0px;
    padding-left: 24px;
    border-left: var(--border-width-1) solid var(--color-pink-500);
    font-style: italic;
`;
export function blockquote(props) {
    return <OurBlockquote {...props} />;
}

const OurCode = styled.code`
    font-size: var(--font-size-code);
    background: var(--color-gray-800);
    border-radius: var(--border-radius-3);

    margin-left: calc(var(--spacing-5) * -1);
    margin-right: calc(var(--spacing-5) * -1);

    @media ${(p) => p.theme.queries.tabletAndBelow} {
        font-size: calc(var(--font-size-code) - 0.1rem);

        margin-left: 0;
        margin-right: 0;
    }
`;
export function code({ className, children }) {
    return (
        <pre>
            <OurCode className={className}>{children}</OurCode>
        </pre>
    );
}

export function img({ src, ...props }) {
    return <img {...props} src={`/images/blog/${src}`} />;
}
