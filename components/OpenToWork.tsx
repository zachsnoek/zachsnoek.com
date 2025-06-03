'use client';

import styled from 'styled-components';
import { Link } from './Link';

const isOpenToWork = true;

export function OpenToWork() {
    if (!isOpenToWork) return null;

    return (
        <Wrapper className="open-to-work">
            <Heading>
                👋 Looking for a senior engineer who gets things done?
            </Heading>
            <p>
                I&apos;m currently seeking new full-stack engineering
                opportunities. If you&apos;re hiring or know someone who is,
                I&apos;d love to connect!{' '}
                <Link href="https://z7k.io/coffee" target="_blank">
                    Schedule a call
                </Link>{' '}
                or{' '}
                <Link href="/contact" target="_blank">
                    send a message
                </Link>
                .
            </p>
            {/* <Details>
                <Summary>Find out how I deliver value</Summary>
            </Details> */}
        </Wrapper>
    );
}

const Heading = styled.h4`
    color: var(--prose-otw-heading-color);
    font-size: var(--font-size-base);
`;

const Wrapper = styled.div`
    background: var(--otw-background-color);

    display: flex;
    flex-direction: column;
    gap: var(--spacing-3);

    padding: var(--spacing-4) var(--spacing-3);

    border-radius: var(--border-radius-3);
    border-left: var(--border-width-2) solid var(--otw-border-color);

    margin-left: calc(var(--spacing-5) * -1);
    margin-right: calc(var(--spacing-5) * -1);

    @media ${(p) => p.theme.queries.tabletAndBelow} {
        border: 1px solid var(--otw-border-color);
        margin-left: 0;
        margin-right: 0;
    }
`;

const Details = styled.details`
    &[open] summary::before {
        content: '🎯 ';
    }
`;

const Summary = styled.summary`
    list-style: none;

    &::before {
        content: '🔎 ';
    }
`;
