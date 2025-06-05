import type { Metadata } from 'next';
import { ContentWrapper } from '../../../components/blog/ContentWrapper/ContentWrapper';
import { Date } from '../../../components/Date';
import { Link } from '../../../components/Link/Link';
import { SharePost } from '../../../components/SharePost/SharePost';
import { Spacer } from '../../../components/Spacer';
import { getAllPostIds, getPost } from '../../../utils/posts';
import styles from './page.module.css';

export const dynamicParams = false;

export async function generateStaticParams() {
    return getAllPostIds();
}

type Props = {
    params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { id } = await params;
    const { title, description } = await getPost(id);

    return {
        title: {
            absolute: `${title} | Zach Snoek's Blog`,
        },
        description,
    };
}

export default async function PostPage({ params }: Props) {
    const { id } = await params;
    const { Content, ...meta } = await getPost(id);

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
            <SharePost title={meta.title} />
        </article>
    );
}
