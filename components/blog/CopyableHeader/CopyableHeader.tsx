'use client';

import clsx from 'clsx';
import React from 'react';
import { toKebabCase } from '../../../utils/toKebabCase';
import { Icon } from '../../Icon/Icon';
import { UnstyledButton } from '../../UnstyledButton/UnstyledButton';
import styles from './CopyableHeader.module.scss';

function CopyHeaderIdButton({ id }: { id: string }) {
    const hash = `#${id}`;

    return (
        <UnstyledButton
            className={styles.button}
            onClick={() => {
                if (globalThis.history.pushState !== undefined) {
                    history.pushState(null, '', hash);
                } else {
                    globalThis.location.hash = hash;
                }

                globalThis.navigator.clipboard.writeText(
                    globalThis.location.href
                );
            }}
        >
            <Icon id="link" />
        </UnstyledButton>
    );
}

type Props = { as: 'h2' | 'h3' } & React.ComponentPropsWithoutRef<'h2'>;

function CopyableHeader({ as, children }: Props) {
    const Component = as;
    const headerString = getRawStringFromChildren(children);
    const id = toKebabCase(headerString);

    return (
        <div className={styles.wrapper}>
            <CopyHeaderIdButton id={id} />
            <Component
                id={id}
                className={clsx({ h2: as === 'h2', h3: as === 'h3' })}
            >
                {children}
            </Component>
        </div>
    );
}

function getRawStringFromChildren(children: React.ReactNode) {
    const strings = React.Children.map(children, (x: any) => {
        if (typeof x === 'string') {
            return x;
        } else if (
            x.$$typeof === Symbol.for('react.element') ||
            x.$$typeof === Symbol.for('react.transitional.element')
        ) {
            return x.props.children;
        } else {
            throw new Error(`Unknown child: ${JSON.stringify(x)}`);
        }
    });

    return strings.join('');
}

export { CopyableHeader };
