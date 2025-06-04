import { Link } from '../Link';
import styles from './Footer.module.css';

export function Footer() {
    return (
        <footer className={styles.footer}>
            <span>{`© ${new Date().getFullYear()} Zach Snoek`}</span>
            <Link href="/credits" hideUnderline>
                Credits
            </Link>
        </footer>
    );
}
