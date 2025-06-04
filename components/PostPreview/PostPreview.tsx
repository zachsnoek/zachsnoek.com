import { Link } from '../Link/Link';
import { Date } from '../Date';
import { Spacer } from '../Spacer';
import { Post } from '../../utils/posts';
import styles from './PostPreview.module.scss';

type Props = { post: Post };

export function PostPreview({ post }: Props) {
    const { id, title, description, date, originalPost } = post;
    const href = originalPost?.isExclusive ? originalPost.url : `/blog/${id}`;

    return (
        <article>
            <Link href={href} hideUnderline className={styles.wrapper}>
                <h3 className={styles.title}>{title}</h3>
                <Spacer size={1} />
                <Date date={date} className={styles.date} />
                <Spacer size={3} />
                <p>{description}</p>
                <Spacer size={3} />
            </Link>
        </article>
    );
}
