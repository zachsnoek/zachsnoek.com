import clsx from 'clsx';
import { Link } from '../Link/Link';
import styles from './OpenToWork.module.scss';

const isOpenToWork = true;

export function OpenToWork() {
    if (!isOpenToWork) return null;

    return (
        <div className={clsx('open-to-work', styles.wrapper)}>
            <h4 className={styles.heading}>
                👋 Looking for a senior engineer who gets things done?
            </h4>
            <p>
                I&apos;m currently seeking new full-stack engineering
                opportunities. If you&apos;re hiring or know someone who is,
                I&apos;d love to connect!{' '}
                <Link href="https://z7k.io/coffee" target="_blank">
                    Schedule a call
                </Link>{' '}
                or{' '}
                <Link href="/contact" target="_blank">
                    send a message
                </Link>
                .
            </p>
            {/* <details className={styles.details}>
                <summary className={styles.summary}>
                    Find out how I deliver value
                </summary>
            </details> */}
        </div>
    );
}
