import React from 'react';
import { GitHub, Linkedin, Twitter, Copy, Link, Menu, X } from 'react-feather';
import styles from './Icon.module.scss';

const icons = {
    github: GitHub,
    linkedin: Linkedin,
    twitter: Twitter,
    close: X,
    copy: Copy,
    link: Link,
    menu: Menu,
};

interface Props {
    id: keyof typeof icons;
    color?: string;
    size?: number;
    [key: string]: any;
}

export const Icon = ({ id, color, size, ...props }: Props) => {
    const Component = icons[id];

    if (!Component) {
        throw new Error(`No icon found for ID: ${id}`);
    }

    return (
        <div {...props} className={styles.wrapper}>
            <Component color={color} size={size ?? '1em'} />
        </div>
    );
};
