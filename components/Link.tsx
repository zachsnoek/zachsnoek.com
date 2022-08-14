import NextLink, { LinkProps as NextLinkProps } from 'next/link';

export type LinkProps = React.PropsWithChildren<{
    href: NextLinkProps['href'];
    target?: HTMLLinkElement['target'];
}>;

export function Link({ href, ...props }: LinkProps) {
    return (
        <NextLink href={href}>
            <a {...props} />
        </NextLink>
    );
}
