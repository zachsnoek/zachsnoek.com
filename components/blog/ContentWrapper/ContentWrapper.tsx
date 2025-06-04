import styles from './MDXRemoteWrapper.module.scss';

export function ContentWrapper({ children }: React.PropsWithChildren<{}>) {
    return <div className={styles.mdxRemoteWrapper}>{children}</div>;
}
