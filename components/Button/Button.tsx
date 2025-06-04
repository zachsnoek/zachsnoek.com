import clsx from 'clsx';
import styles from './Button.module.scss';
import { ButtonProps } from './types';

export const Button = ({
    variant = 'fill',
    size = 'medium',
    ...rest
}: ButtonProps) => {
    if (!styles[variant]) {
        throw new Error(`Unknown button variant: ${variant}`);
    }

    if (!styles[size]) {
        throw new Error(`Unknown size: ${size}`);
    }

    return (
        <button
            {...rest}
            className={clsx(
                styles.base,
                styles[variant],
                styles[size],
                rest.className
            )}
        />
    );
};
