import clsx from 'clsx';
import inputStyles from '../Input/Input.module.scss';
import styles from './TextArea.module.css';

type TextAreaProps = React.ComponentProps<'textarea'> & {
    size?: 'small' | 'medium' | 'large';
};

export function TextArea({ size = 'medium', ...props }: TextAreaProps) {
    return (
        <textarea
            {...props}
            className={clsx(
                styles.textArea,
                inputStyles.input,
                inputStyles[size],
                props.className
            )}
        />
    );
}
