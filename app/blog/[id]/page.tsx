import type { Metadata } from 'next';
import { ContentWrapper } from '../../../components/blog/ContentWrapper/ContentWrapper';
import { Date } from '../../../components/Date';
import { Link } from '../../../components/Link/Link';
import { SharePost } from '../../../components/SharePost/SharePost';
import { Spacer } from '../../../components/Spacer';
import { getAllPostIds } from '../../../utils/posts';
import styles from './page.module.css';
import { schPostMetadata } from '../../../schemas/schPostMetadata';

export const dynamicParams = false;

export async function generateStaticParams() {
    return getAllPostIds();
}

type Props = {
    params: Promise<{ id: string }>;
};

export default async function PostPage({ params }: Props) {
    const { id } = await params;
    const { default: Content, ...rest } = await import(
        `../../../content/blog/${id}/index.mdx`
    );
    const post = schPostMetadata.parse({ id, ...rest });

    return (
        <article>
            <Spacer size={5} />
            <h1>{post.title}</h1>
            <Spacer size={5} />
            <Date date={post.date} />
            <Spacer size={8} />
            <ContentWrapper>
                <Content />
            </ContentWrapper>
            <Spacer size={6} />
            <div className={styles.tagWrapper}>
                {post.tags.map((x) => (
                    <Link
                        href={`/blog/tags/${encodeURIComponent(x)}`}
                        key={x}
                        hideUnderline
                        className={styles.tagBadge}
                    >
                        {x}
                    </Link>
                ))}
            </div>
            <Spacer size={6} />
            <SharePost title={post.title} />
        </article>
    );
}
