import type { Metadata } from 'next';
import { ContentWrapper } from '../../../components/blog/ContentWrapper/ContentWrapper';
import { Date } from '../../../components/Date';
import { Link } from '../../../components/Link/Link';
import { SharePost } from '../../../components/SharePost/SharePost';
import { Spacer } from '../../../components/Spacer';
import { getAllPosts } from '../../../utils/getAllPosts';
import { getPostMetadata } from '../../../utils/getPostMetadata';
import { getRenderablePost } from '../../../utils/getRenderablePost';
import styles from './page.module.css';
import { Params } from './types';
import { getEnv } from '../../../utils/getEnv';

export const dynamicParams = false;

export async function generateStaticParams(): Promise<Params[]> {
    const posts = await getAllPosts();
    return posts.map(({ id }) => ({ id }));
}

type Props = {
    params: Promise<Params>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { id } = await params;
    const { title, description } = await getPostMetadata(id);

    return {
        title: {
            absolute: `${title} | Zach Snoek's Blog`,
        },
        description,
    };
}

export default async function PostPage({ params }: Props) {
    const { id } = await params;
    const { Content, ...meta } = await getRenderablePost(id);
    const url = `${getEnv('NEXT_PUBLIC_ORIGIN')}/blog/${id}`;

    return (
        <article>
            <Spacer size={5} />
            <h1>{meta.title}</h1>
            <Spacer size={5} />
            <Date date={meta.date} />
            <Spacer size={8} />
            <ContentWrapper>
                <Content />
            </ContentWrapper>
            <Spacer size={6} />
            <div className={styles.tagWrapper}>
                {meta.tags.map((x) => (
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
            <SharePost title={meta.title} url={url} />
        </article>
    );
}
