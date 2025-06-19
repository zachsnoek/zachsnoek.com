import {
    DialogContent,
    DialogOverlay,
    DialogOverlayProps,
} from '@reach/dialog';
import clsx from 'clsx';
import { usePathname } from 'next/navigation';
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
            <DialogContent
                as={'nav'}
                className={styles.dialogContent}
                aria-label="Mobile device menu"
            >
                <div className={styles.iconWrapper}>
                    <UnstyledButton
                        onClick={onDismiss}
                        className={styles.iconButton}
                    >
                        <Icon id="close" />
                    </UnstyledButton>
                </div>
                <NavItem href="/blog" onNavigate={onDismiss}>
                    Blog
                </NavItem>
                <NavItem href="/contact" onNavigate={onDismiss}>
                    Contact
                </NavItem>
                <div className={styles.row}>
                    <SocialIconsRow />
                </div>
            </DialogContent>
        </DialogOverlay>
    );
}

const NavItem = (props: LinkProps) => {
    const pathname = usePathname();
    const isActive = pathname === props.href;

    return (
        <div className={clsx(styles.row, isActive && styles.activeNavItem)}>
            <Link {...props} hideUnderline className={styles.link} />
        </div>
    );
};
