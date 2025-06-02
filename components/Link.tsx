import NextLink, { LinkProps as NextLinkProps } from 'next/link';

export type LinkProps = React.PropsWithChildren<{
    href: NextLinkProps['href'];
    hideUnderline?: boolean;
    target?: HTMLLinkElement['target'];
}>;

export function Link({ href, hideUnderline = false, ...props }: LinkProps) {
    return <NextLink href={href} {...props} scroll={true} />;
}
