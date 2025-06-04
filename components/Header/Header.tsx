'use client';

import React from 'react';
import { Icon } from '../Icon/Icon';
import { Link, LinkProps } from '../Link/Link';
import { Logo } from '../Logo/Logo';
import { MaxWidthContainer } from '../MaxWidthContainer/MaxWidthContainer';
import { MobileMenu } from '../MobileMenu/MobileMenu';
import { SocialIconsRow } from '../SocialIconsRow/SocialIconsRow';
import { UnstyledButton } from '../UnstyledButton/UnstyledButton';
import styles from './Header.module.scss';
import clsx from 'clsx';
import { usePathname } from 'next/navigation';

export function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

    return (
        <header className={styles.header}>
            <MaxWidthContainer className={styles.container}>
                <Logo />
                <div className={styles.desktopMenu}>
                    <nav className={styles.desktopNav}>
                        <ul className={styles.navItemList}>
                            <NavItem href="/blog">Blog</NavItem>
                            <NavItem href="/contact">Contact</NavItem>
                        </ul>
                    </nav>
                    <SocialIconsRow />
                </div>
                <div className={styles.mobileActions}>
                    <UnstyledButton
                        className={styles.iconButton}
                        onClick={() => setIsMobileMenuOpen(true)}
                    >
                        <Icon id="menu" />
                    </UnstyledButton>
                </div>
            </MaxWidthContainer>
            <MobileMenu
                isOpen={isMobileMenuOpen}
                onDismiss={() => setIsMobileMenuOpen(false)}
            />
        </header>
    );
}

const NavItem = (props: LinkProps) => {
    const pathname = usePathname();
    const isActive = pathname === props.href;
    return (
        <li
            className={clsx(
                styles.navListItem,
                isActive && styles.activeNavListItem
            )}
        >
            <Link hideUnderline {...props} />
        </li>
    );
};
