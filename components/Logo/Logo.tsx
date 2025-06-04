import { Link } from '../Link/Link';
import styles from './Logo.module.css';

export function Logo() {
    return (
        <Link href="/" hideUnderline>
            <h1 className={styles.logo}>Zach Snoek</h1>
        </Link>
    );
}
