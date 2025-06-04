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

export function a(props) {
    return <Link {...props} />;
}

export function img({ src, ...props }) {
    return <img {...props} src={`/images/blog/${src}`} />;
}
