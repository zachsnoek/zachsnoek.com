import { useRouter } from 'next/router';
import React from 'react';
import styled from 'styled-components';
import { Icon } from './Icon';
import { Link, LinkProps } from './Link';
import { Logo } from './Logo';
import { MaxWidthContainer } from './MaxWidthContainer';
import { MobileMenu } from './MobileMenu';
import { SocialIconsRow } from './SocialIconsRow';
import { UnstyledButton } from './UnstyledButton';

export function Header() {
    const router = useRouter();
    const isHomePage = router.route === '/';

    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

    return (
        <Wrapper isSticky={isHomePage}>
            <Container>
                <Logo />
                <DesktopMenu>
                    <DesktopNav>
                        <NavItemList>
                            <NavItem href="/blog">Blog</NavItem>
                            <NavItem href="/contact">Contact</NavItem>
                        </NavItemList>
                    </DesktopNav>
                    <SocialIconsRow />
                </DesktopMenu>
                <MobileActions>
                    <IconButton onClick={() => setIsMobileMenuOpen(true)}>
                        <Icon id="menu" />
                    </IconButton>
                </MobileActions>
            </Container>
            <MobileMenu
                isOpen={isMobileMenuOpen}
                onDismiss={() => setIsMobileMenuOpen(false)}
            />
        </Wrapper>
    );
}

const NavItem = (props: LinkProps) => {
    const router = useRouter();

    return (
        <NavListItem isActive={router.route === props.href}>
            <Link {...props} />
        </NavListItem>
    );
};

const Wrapper = styled.header<{ isSticky: boolean }>`
    z-index: 1; /* Blog post headers have relative positioning */
    padding: var(--spacing-5) 0px;
    background-color: var(--color-background);

    ${(p) =>
        !p.isSticky &&
        ` 
        position: sticky;
        top: 0;
    `}
`;

const Container = styled(MaxWidthContainer)`
    display: flex;
    gap: var(--spacing-7);
    align-items: center;
`;

const DesktopNav = styled.nav`
    display: flex;
    flex: 1;
`;

const DesktopMenu = styled.div`
    display: flex;
    flex: 1;

    @media ${(p) => p.theme.queries.mobileAndBelow} {
        display: none;
    }
`;

const NavItemList = styled.ul`
    list-style: none;
    height: 100%;
    display: flex;
    margin: 0;
    padding: 0;
`;

const NavListItem = styled.li<{ isActive: boolean }>`
    padding-left: 10px;
    padding-right: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${(p) => (p.isActive ? 'var(--color-primary)' : 'unset')};
`;

const MobileActions = styled.div`
    display: none;

    @media ${(p) => p.theme.queries.mobileAndBelow} {
        flex: 1;

        display: flex;
        justify-content: flex-end;
        align-items: center;
    }
`;

const IconButton = styled(UnstyledButton)`
    padding: var(--spacing-1);
`;
