import React from 'react';
import { Spacer, SpacerProps } from './Spacer';

interface Props {
    size?: SpacerProps['size'];
    top?: SpacerProps['size'];
    bottom?: SpacerProps['size'];
}

/** Creates a line break with even vertical spacing. */
export const Break = ({ size = 6, top, bottom, ...props }: Props) => (
    <>
        <Spacer axis="vertical" size={top ?? size} {...props} />
        <hr />
        <Spacer axis="vertical" size={bottom ?? size} {...props} />
    </>
);
