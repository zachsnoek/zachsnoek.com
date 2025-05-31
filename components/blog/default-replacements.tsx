import styled from 'styled-components';
import { CopyableHeader } from '../CopyableHeader';
import { Link } from '../Link';

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

export function a(props) {
    return <Link showUnderline {...props} />;
}

const OurBlockquote = styled.blockquote`
    color: var(--prose-blockquote-color);
    margin-left: 0px;
    padding-left: 24px;
    border-left: var(--border-width-1) solid var(--blockquote-border-left-color);
    font-style: italic;
`;
export function blockquote(props) {
    return <OurBlockquote {...props} />;
}

const OurCode = styled.code`
    font-size: var(--font-size-code);
    background: var(--code-block-background-color);
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
