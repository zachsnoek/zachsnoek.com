import clsx from 'clsx';
import inputStyles from '../Input/Input.module.scss';
import styles from './TextArea.module.css';

export function TextArea(props: React.ComponentProps<'textarea'>) {
    return (
        <textarea
            {...props}
            className={clsx(
                styles.textArea,
                inputStyles.input,
                props.className
            )}
        />
    );
}
