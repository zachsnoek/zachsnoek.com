import styled from 'styled-components';

const BORDER_WIDTH = 'var(--border-width-1)';

const sizeStyles = {
    // small button matches the height of the default Input
    small: {
        // '--fontSize': 'var(--font-size-base)',
        '--padding': `calc(var(--spacing-2) - ${BORDER_WIDTH}) calc(var(--spacing-3) - ${BORDER_WIDTH})`,
        '--borderRadius': 'var(--border-radius-1)',
    },
    medium: {
        // '--fontSize': 'var(--font-size-base)',
        '--padding': `calc(var(--spacing-3) - ${BORDER_WIDTH}) calc(var(--spacing-4) - ${BORDER_WIDTH})`,
        '--borderRadius': 'var(--border-radius-1)',
    },
    large: {
        '--fontSize': 'var(font-size-md)',
        '--padding': `calc(var(--spacing-4) - ${BORDER_WIDTH}) calc(var(--spacing-5) - ${BORDER_WIDTH})`,
        '--borderRadius': 'var(--border-radius-2)',
    },
};

const ButtonBase = styled.button<{
    size: Props['size'];
    style: { [x in string]: string };
}>`
    border: ${BORDER_WIDTH} solid transparent;

    font-size: var(--fontSize);
    padding: var(--padding);
    border-radius: var(--borderRadius);

    &:hover:not(:disabled) {
        cursor: pointer;
    }
`;

const FillButton = styled(ButtonBase)`
    background: var(--color-primary);
    color: var(--color-white);

    &:hover {
        /* TODO: Background */
    }
`;

const OutlineButton = styled(ButtonBase)`
    background: none;
    color: var(--color-primary);
    border: ${BORDER_WIDTH} solid currentColor;

    &:hover {
        /* TODO: Background */
    }
`;

const variants = {
    fill: FillButton,
    outline: OutlineButton,
};

type Props = Omit<React.ComponentPropsWithRef<'button'>, 'style'> & {
    size?: 'small' | 'medium' | 'large';
    variant?: 'fill' | 'outline';
};

export const Button = ({
    variant = 'fill',
    size = 'medium',
    className,
    children,
    ...rest
}: Props) => {
    const ButtonVariant = variants[variant];
    if (!ButtonVariant) {
        throw new Error(`Unknown button variant: ${variant}`);
    }

    const buttonStyles = sizeStyles[size];
    if (!buttonStyles) {
        throw new Error(`Unknown size: ${size}`);
    }

    return (
        <ButtonVariant
            size={size}
            style={buttonStyles}
            className={className}
            {...rest}
        >
            {children}
        </ButtonVariant>
    );
};
