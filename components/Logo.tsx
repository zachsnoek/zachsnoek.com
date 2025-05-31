import { Link } from './Link';
import styled from 'styled-components';

export function Logo() {
    return (
        <Link href="/">
            <Wrapper>Zach Snoek</Wrapper>
        </Link>
    );
}

const Wrapper = styled.h1`
    font-size: var(--font-size-md);
`;
