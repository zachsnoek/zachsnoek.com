import clsx from 'clsx';
import styles from './Input.module.scss';

type InputProps = Omit<React.ComponentProps<'input'>, 'size'> & {
    size?: 'small' | 'medium' | 'large';
};

export function Input({ size = 'medium', className, ...props }: InputProps) {
    return (
        <input
            {...props}
            className={clsx(styles.input, styles[size], className)}
        />
    );
}
