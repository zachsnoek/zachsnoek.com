'use client';

import React from 'react';
import { Spacer } from './Spacer';

type Props = React.PropsWithChildren<{ header: string | React.ReactNode }>;

export function ContentLayout({ header, children }: Props) {
    return (
        <>
            <Spacer size={5} />
            {typeof header === 'string' ? <h1>{header}</h1> : header}
            <Spacer size={5} />
            {children}
        </>
    );
}
