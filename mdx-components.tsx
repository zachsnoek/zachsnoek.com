import type { MDXComponents } from 'mdx/types';
import { CodePen, ConnectSection, OpenToWork } from './components/blog/globals';
import { BuyMeACoffee } from './components/BuyMeACoffee';

export function useMDXComponents(components: MDXComponents): MDXComponents {
    return {
        ...components,
        ConnectSection,
        BuyMeACoffee,
        CodePen,
        OpenToWork,
    };
}
