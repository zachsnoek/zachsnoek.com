import { Link } from '../Link/Link';
import { Icon } from '../Icon/Icon';
import styles from './SocialIconsRow.module.css';

export function SocialIconsRow() {
    return (
        <div className={styles.wrapper}>
            <Link href="https://www.linkedin.com/in/zachsnoek" target="_blank">
                <Icon id="linkedin" />
            </Link>
            <Link href="https://github.com/zachsnoek" target="_blank">
                <Icon id="github" />
            </Link>
        </div>
    );
}
