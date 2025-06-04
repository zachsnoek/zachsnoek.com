import styles from './MDXRemoteWrapper.module.scss';

export function MDXRemoteWrapper({ children }: React.PropsWithChildren<{}>) {
    return <div className={styles.mdxRemoteWrapper}>{children}</div>;
}
