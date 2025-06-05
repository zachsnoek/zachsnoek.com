import type { MDXComponents } from 'mdx/types';
import { CodePen } from './components/blog/CodePen/CodePen';
import { ConnectSection } from './components/blog/ConnectSection';
import { CopyableHeader } from './components/blog/CopyableHeader/CopyableHeader';
import { OpenToWork } from './components/blog/OpenToWork/OpenToWork';
import { Link } from './components/Link/Link';

export function useMDXComponents(components: MDXComponents): MDXComponents {
    return {
        h1: () => {
            throw new Error('Do not use `h1`s in blog posts!');
        },
        h2: (props) => {
            // @ts-expect-error TODO: Fix types
            return <CopyableHeader as="h2" {...props} />;
        },
        h3: (props) => {
            // @ts-expect-error TODO: Fix types
            return <CopyableHeader as="h3" {...props} />;
        },
        a: (props) => {
            // @ts-expect-error TODO: Fix types
            return <Link {...props} />;
        },
        img: ({ src, ...props }) => {
            return <img {...props} src={`/images/blog/${src}`} />;
        },
        CodePen,
        ConnectSection,
        OpenToWork,
        ...components,
    };
}
