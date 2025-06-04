import clsx from 'clsx';
import styles from './Button.module.scss';

type Props = Omit<React.ComponentPropsWithRef<'button'>, 'style'> & {
    size?: 'small' | 'medium' | 'large';
    variant?: 'fill' | 'outline';
};

export const Button = ({
    variant = 'fill',
    size = 'medium',
    ...rest
}: Props) => {
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
