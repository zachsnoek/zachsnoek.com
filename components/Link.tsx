import NextLink, { LinkProps as NextLinkProps } from 'next/link';
import styled from 'styled-components';

export type LinkProps = React.PropsWithChildren<{
    href: NextLinkProps['href'];
    hideUnderline?: boolean;
    target?: HTMLLinkElement['target'];
}>;

export function Link({ href, hideUnderline = false, ...props }: LinkProps) {
    return (
        <NextLink href={href} passHref legacyBehavior>
            <StyledLink hideUnderline={hideUnderline} {...props} />
        </NextLink>
    );
}

const StyledLink = styled.a<{ hideUnderline: boolean }>`
    text-decoration: ${(p) => (p.hideUnderline ? 'none' : 'underline')};

    &:hover {
        color: var(--clickable-hover-color);
    }
    @media ${(p) => p.theme.queries.tabletAndBelow} {
        &:hover {
            color: unset;
        }
    }
`;
