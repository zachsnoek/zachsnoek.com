import styles from './Accent.module.css';

type Props =
    | { text: string; children?: never }
    | { text?: never; children: string };

export function Accent({ text, children }: Props) {
    if (text && children) {
        throw new Error('Only one of `text` and `children` can be provided.');
    }

    return <span className={styles.accent}>{text || children}</span>;
}
