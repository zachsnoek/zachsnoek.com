import NextLink, { LinkProps as NextLinkProps } from 'next/link';
import styled from 'styled-components';

export type LinkProps = React.PropsWithChildren<{
    href: NextLinkProps['href'];
    showUnderline?: boolean;
    target?: HTMLLinkElement['target'];
}>;

export function Link({ href, showUnderline = false, ...props }: LinkProps) {
    return (
        <NextLink href={href} passHref>
            <StyledLink showUnderline={showUnderline} {...props} />
        </NextLink>
    );
}

const StyledLink = styled.a<{ showUnderline: boolean }>`
    text-decoration: ${(p) => (p.showUnderline ? 'underline' : 'none')};

    &:hover {
        color: var(--link-hover-color);
    }
`;
