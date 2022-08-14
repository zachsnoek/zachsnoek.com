import styled from 'styled-components';
import { Link } from './Link';

export function Footer() {
    return (
        <Wrapper>
            <span>{`© ${new Date().getFullYear()} Zach Snoek`}</span>
            <Link href={'credits'}>Credits</Link>
        </Wrapper>
    );
}

const Wrapper = styled.footer`
    padding: var(--spacing-6) 0px;
    display: flex;
    justify-content: space-between;
`;
