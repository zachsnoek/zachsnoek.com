import styled from 'styled-components';
import {
    DialogOverlay,
    DialogContent,
    DialogOverlayProps,
} from '@reach/dialog';
import { SocialIconsRow } from './SocialIconsRow';
import { UnstyledButton } from './UnstyledButton';
import { Icon } from './Icon';
import { Link, LinkProps } from './Link';
import { useRouter } from 'next/router';

type Props = Pick<DialogOverlayProps, 'isOpen' | 'onDismiss'>;

export function MobileMenu({ isOpen, onDismiss }: Props) {
    return (
        <ModalOverlay isOpen={isOpen} onDismiss={onDismiss}>
            <ModalContent as={'nav'}>
                <IconContainer>
                    <IconButton onClick={onDismiss}>
                        <Icon id="close" />
                    </IconButton>
                </IconContainer>
                <NavItem href="/blog">Blog</NavItem>
                <NavItem href="/contact">Contact</NavItem>
                <Row>
                    <SocialIconsRow />
                </Row>
            </ModalContent>
        </ModalOverlay>
    );
}

const ModalOverlay = styled(DialogOverlay)`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    backdrop-filter: blur(2px);
`;

const ModalContent = styled(DialogContent)`
    position: fixed;
    top: 0;
    right: 0;

    height: 100%;
    width: 300px;
    background: var(--color-background);

    display: flex;
    flex-direction: column;
`;

const IconContainer = styled.div`
    height: var(--spacing-8);
    padding-top: calc(var(--spacing-5) + 3px); /* visual alignment */
    padding-right: var(--spacing-4);

    align-self: flex-end;
`;

const IconButton = styled(UnstyledButton)`
    padding: var(--spacing-1);
`;

const NavItem = (props: LinkProps) => {
    const router = useRouter();

    return (
        <NavListItem isActive={router.route === props.href}>
            <NavLink {...props} />
        </NavListItem>
    );
};

const NavLink = styled(Link)`
    padding: var(--spacing-4);
    padding-left: 0;
`;

const Row = styled.div`
    display: flex;
    align-items: center;
    padding-left: var(--spacing-4);
    height: var(--spacing-8);
`;

const NavListItem = styled(Row)<{ isActive: boolean }>`
    color: ${(p) => p.isActive && 'var(--color-primary)'};
`;
