import { GetStaticPaths, GetStaticProps } from 'next';
import { MainLayout } from '../../../components/Layout';
import { PostPreviewList } from '../../../components/PostPreviewList';
import { getAllPosts, getAllTags, Post } from '../../../lib/posts';

type Props = {
    tag: string;
    posts: Post[];
};

export default function Tag({ tag, posts }: Props) {
    return (
        <MainLayout
            title={`Blog posts about ${tag}`}
            description={`Blog posts about ${tag} by Zach Snoek`}
            header={`Posts about "${tag}"`} // TODO: Render tag text with primary color
        >
            <PostPreviewList posts={posts} />
        </MainLayout>
    );
}

export const getStaticProps: GetStaticProps<Props> = ({ params }) => {
    const posts = getAllPosts({
        filter: {
            tag: params.tag as string,
        },
    });
    return {
        props: {
            tag: params.tag as string,
            posts,
        },
    };
};

export const getStaticPaths: GetStaticPaths = () => {
    const paths = getAllTags();
    return {
        paths,
        fallback: false,
    };
};
