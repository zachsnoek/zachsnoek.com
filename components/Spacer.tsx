import styled from 'styled-components';

// Adapted from https://www.joshwcomeau.com/react/modern-spacer-gif/

function getHeight({ axis, size }) {
    return axis === 'horizontal' ? '1px' : `var(--spacing-${size})`;
}

function getWidth({ axis, size }) {
    return axis === 'vertical' ? '1px' : `var(--spacing-${size})`;
}
const SpacerBase = styled.span`
    display: block;
    width: ${getWidth};
    min-width: ${getWidth};
    height: ${getHeight};
    min-height: ${getHeight};
`;

export interface SpacerProps {
    size: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
    axis?: 'vertical' | 'horizontal';
}

export function Spacer({ axis = 'vertical', ...props }: SpacerProps) {
    return <SpacerBase axis={axis} {...props} />;
}
