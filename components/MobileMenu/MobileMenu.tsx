import {
    DialogContent,
    DialogOverlay,
    DialogOverlayProps,
} from '@reach/dialog';
import clsx from 'clsx';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { Icon } from '../Icon/Icon';
import { Link, LinkProps } from '../Link/Link';
import { SocialIconsRow } from '../SocialIconsRow/SocialIconsRow';
import { UnstyledButton } from '../UnstyledButton/UnstyledButton';
import styles from './MobileMenu.module.css';

type Props = Pick<DialogOverlayProps, 'isOpen' | 'onDismiss'>;

export function MobileMenu({ isOpen, onDismiss }: Props) {
    return (
        <DialogOverlay
            isOpen={isOpen}
            onDismiss={onDismiss}
            className={styles.dialogOverlay}
        >
            <DialogContent as={'nav'} className={styles.dialogContent}>
                <div className={styles.iconWrapper}>
                    <UnstyledButton
                        onClick={onDismiss}
                        className={styles.iconButton}
                    >
                        <Icon id="close" />
                    </UnstyledButton>
                </div>
                <NavItem href="/blog">Blog</NavItem>
                <NavItem href="/contact">Contact</NavItem>
                <div className={styles.row}>
                    <SocialIconsRow />
                </div>
            </DialogContent>
        </DialogOverlay>
    );
}

const NavItem = (props: LinkProps) => {
    const router = useRouter();
    const isActive = router.route === props.href;

    return (
        <div className={clsx(styles.row, isActive && styles.activeNavItem)}>
            <NavLink hideUnderline {...props} />
        </div>
    );
};

const NavLink = styled(Link)`
    padding: var(--spacing-4);
    padding-left: 0;
`;
