import styles from './VisuallyHiddenLabel.module.scss';

type Props = {
    children: React.ReactNode;
} & React.ComponentPropsWithoutRef<'label'>;

export function VisuallyHiddenLabel(props: Props) {
    const { children, ...rest } = props;
    return (
        <label className={styles.visuallyHidden} {...rest}>
            {children}
        </label>
    );
}
