import React from 'react';
import styled from 'styled-components';
import { GitHub, Linkedin, Twitter, Copy, Link, Menu, X } from 'react-feather';

const icons = {
    github: GitHub,
    linkedin: Linkedin,
    twitter: Twitter,
    close: X,
    copy: Copy,
    link: Link,
    menu: Menu,
};

interface IconProps {
    id: keyof typeof icons;
    color?: string;
    size?: number;
    [key: string]: any;
}

export const Icon = ({ id, color, size, ...props }: IconProps) => {
    const Component = icons[id];

    if (!Component) {
        throw new Error(`No icon found for ID: ${id}`);
    }

    return (
        <Wrapper {...props}>
            <Component color={color} size={size ?? '1em'} />
        </Wrapper>
    );
};

const Wrapper = styled.div`
    & > svg {
        display: block;
    }
`;
