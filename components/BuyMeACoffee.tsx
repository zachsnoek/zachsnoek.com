import styled from 'styled-components';

const URL = 'https://www.buymeacoffee.com/zachsnoek';

export function BuyMeACoffee() {
    return (
        <div>
            <p style={{ marginBottom: 'var(--spacing-3)' }}>
                If you found this post helpful, please consider supporting my
                work financially:
            </p>
            <Wrapper href={URL} target="_blank" rel="noreferrer">
                <Container>
                    <span>☕️</span>
                    <span>Buy me a coffee!</span>
                </Container>
            </Wrapper>
        </div>
    );
}

const Wrapper = styled.a`
    display: inline-block;
    padding: var(--spacing-3) var(--spacing-4);
    background: var(--color-primary);
    border-radius: var(--border-radius-3);

    &:hover {
        color: var(--color-text);
    }
`;

const Container = styled.span`
    display: flex;
    gap: var(--spacing-2);
`;
