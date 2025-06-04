import styles from './BuyMeACoffee.module.scss';

const URL = 'https://www.buymeacoffee.com/zachsnoek';

export function BuyMeACoffee() {
    return (
        <div>
            <p style={{ marginBottom: 'var(--spacing-3)' }}>
                If you found this post helpful, please consider supporting my
                work financially:
            </p>
            <a
                href={URL}
                target="_blank"
                rel="noreferrer"
                className={styles.link}
            >
                <span className={styles.row}>
                    <span>☕️</span>
                    <span>Buy me a coffee!</span>
                </span>
            </a>
        </div>
    );
}
