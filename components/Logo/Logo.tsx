import { Link } from '../Link/Link';
import styles from './Logo.module.css';

export function Logo() {
    return (
        <Link href="/" hideUnderline>
            <span className={styles.logo}>Zach Snoek</span>
        </Link>
    );
}
