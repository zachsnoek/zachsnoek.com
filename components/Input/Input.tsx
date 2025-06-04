import clsx from 'clsx';
import styles from './Input.module.scss';

// TODO: Create size variants that match Button sizes
export function Input(props: React.ComponentProps<'input'>) {
    return <input {...props} className={clsx(styles.input, props.className)} />;
}
