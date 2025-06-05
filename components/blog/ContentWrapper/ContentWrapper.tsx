import styles from './ContentWrapper.module.scss';

export function ContentWrapper({ children }: React.PropsWithChildren<{}>) {
    return <div className={styles.contentWrapper}>{children}</div>;
}
