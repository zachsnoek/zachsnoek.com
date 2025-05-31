import styled from 'styled-components';

const AccentBase = styled.span`
    color: var(--color-pink-500);
`;

type Props =
    | { text: string; children?: never }
    | { text?: never; children: string };

export function Accent({ text, children }: Props) {
    if (text && children) {
        throw new Error('Only one of `text` and `children` can be provided.');
    }

    return <AccentBase>{text || children}</AccentBase>;
}
