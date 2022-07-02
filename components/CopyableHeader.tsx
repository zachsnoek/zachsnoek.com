import styled from 'styled-components';
import { Icon } from './Icon';
import { UnstyledButton } from './UnstyledButton';
import { toKebabCase } from '../lib/toKebabCase';
import React from 'react';

const H2 = styled.h2`
    margin-top: var(--spacing-7);

    /* &:first-of-type {
        margin-top: unset;
    } */
`;

const H3 = styled.h3`
    margin-top: var(--spacing-6);
`;

const headers = {
    h2: H2,
    h3: H3,
};

const Wrapper = styled.div`
    position: relative;
`;

const LinkButton = styled(UnstyledButton)`
    display: none;

    padding: var(--spacing-3);
    color: var(--color-primary);

    ${Wrapper}:hover & {
        display: revert;
        position: absolute;
        top: -6px;
        left: -45px;
    }

    @media ${(p) => p.theme.queries.tabletAndBelow} {
        padding: initial;

        ${Wrapper}:hover & {
            display: none;
        }
    }
`;

function CopyHeaderIdButton({ id }: { id: string }) {
    const hash = `#${id}`;

    return (
        <LinkButton
            onClick={() => {
                if (globalThis.history.pushState) {
                    history.pushState(null, null, hash);
                } else {
                    globalThis.location.hash = hash;
                }

                globalThis.navigator.clipboard.writeText(
                    globalThis.location.href
                );
            }}
        >
            <Icon id="link" />
        </LinkButton>
    );
}

type Props = { as: keyof typeof headers; children: React.ReactNode };

function CopyableHeader({ as, children }: Props) {
    const HeaderComponent = headers[as];
    if (!HeaderComponent) {
        throw new Error(`Invalid header: '${as}'`);
    }

    const headerString = getRawStringFromChildren(children);
    const id = toKebabCase(headerString);

    return (
        <Wrapper>
            <CopyHeaderIdButton id={id} />
            <HeaderComponent id={id}>{children}</HeaderComponent>
        </Wrapper>
    );
}

function getRawStringFromChildren(children: React.ReactNode) {
    const strings = React.Children.map(children, (x: any) => {
        if (typeof x === 'string') {
            return x;
        } else if (x.$$typeof === Symbol.for('react.element')) {
            return x.props.children;
        } else {
            throw new Error();
        }
    });

    return strings.join('');
}

export { CopyableHeader };
