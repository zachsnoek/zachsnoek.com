import styled from 'styled-components';
import { CopyableHeader } from '../CopyableHeader/CopyableHeader';
import { Link } from '../Link/Link';

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
    return <Link {...props} />;
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

export function code({ className, children }) {
    return <code className={className}>{children}</code>;
}

export function img({ src, ...props }) {
    return <img {...props} src={`/images/blog/${src}`} />;
}
