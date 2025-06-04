// Adapted from https://www.joshwcomeau.com/react/modern-spacer-gif/

function getHeight({ axis, size }) {
    return axis === 'horizontal' ? '1px' : `var(--spacing-${size})`;
}

function getWidth({ axis, size }) {
    return axis === 'vertical' ? '1px' : `var(--spacing-${size})`;
}

export interface SpacerProps {
    size: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
    axis?: 'vertical' | 'horizontal';
}

// TODO: Remove this component and use Flexbox instead
export function Spacer({ axis = 'vertical', size }: SpacerProps) {
    return (
        <span
            style={{
                display: 'block',
                width: getWidth({ axis, size }),
                minWidth: getWidth({ axis, size }),
                height: getHeight({ axis, size }),
                minHeight: getHeight({ axis, size }),
            }}
        />
    );
}
