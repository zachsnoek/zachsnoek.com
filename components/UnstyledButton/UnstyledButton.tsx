import { clsx } from 'clsx';
import styles from './UnstyledButton.module.scss';

export function UnstyledButton(props: React.ComponentProps<'button'>) {
    return (
        <button
            {...props}
            className={clsx(styles.unstyledButton, props.className)}
        />
    );
}
