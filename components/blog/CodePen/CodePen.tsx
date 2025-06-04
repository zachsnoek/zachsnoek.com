import { CodePen as MDXEmbedCodePen } from 'mdx-embed';
import styles from './CodePen.module.scss';

export const CodePen = ({ id, tabs, ...props }) => (
    <div className={styles.wrapper}>
        <MDXEmbedCodePen codePenId={id} tabs={['result', ...tabs]} {...props} />
    </div>
);
