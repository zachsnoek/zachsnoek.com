import styled from 'styled-components';

// TODO: Create size variants that match Button sizes

export const Input = styled.input`
    /* Styles below match TextArea styles */

    background-color: inherit;
    color: inherit;
    border: var(--border-width-1) solid;
    border-radius: var(--border-radius-1);
    padding: calc(var(--spacing-2) - var(--border-width-1))
        calc(var(--spacing-3) - var(--border-width-1));

    &:focus {
        border-color: var(--color-primary);
        outline-color: var(--color-primary);
        outline-width: var(--border-width-2);
    }
`;
