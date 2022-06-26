import styled from 'styled-components';
import { SocialIconsRow } from './SocialIconsRow';

export function Footer() {
    return (
        <Wrapper>
            <span>{`© ${new Date().getFullYear()} Zach Snoek`}</span>
            <SocialIconsRow />
        </Wrapper>
    );
}

const Wrapper = styled.footer`
    padding: var(--spacing-6) 0px;
    display: flex;
    justify-content: space-between;
`;
