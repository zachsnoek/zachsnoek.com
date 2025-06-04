import clsx from 'clsx';
import styles from './MaxWidthContainer.module.css';

export function MaxWidthContainer(props: React.ComponentProps<'div'>) {
    return (
        <div
            {...props}
            className={clsx(styles.maxWidthContainer, props.className)}
        />
    );
}
