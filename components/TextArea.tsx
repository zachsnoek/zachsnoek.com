import styled from 'styled-components';

export const TextArea = styled.textarea`
    resize: none;

    /* Styles below match Input styles */

    background-color: inherit;
    color: inherit;
    border: var(--border-width-1) solid;
    border-radius: var(--border-radius-1);
    padding: calc(var(--spacing-2) - var(--border-width-1))
        calc(var(--spacing-3) - var(--border-width-1));

    &:focus {
        border-color: var(--color-pink-500);
        outline-color: var(--color-pink-500);
        outline-width: var(--border-width-2);
    }
`;
