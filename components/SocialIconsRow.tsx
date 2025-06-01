import styled from 'styled-components';
import { Link } from './Link';
import { Icon } from './Icon';

export function SocialIconsRow() {
    return (
        <Wrapper>
            <Link href="https://www.linkedin.com/in/zachsnoek" target="_blank">
                <Icon id="linkedin" />
            </Link>
            <Link href="https://github.com/zachsnoek" target="_blank">
                <Icon id="github" />
            </Link>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 14px;
`;
