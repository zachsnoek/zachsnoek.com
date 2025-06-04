import { GetStaticPaths, GetStaticProps } from 'next';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import Script from 'next/script';
import * as defaultReplacements from '../../components/blog/default-replacements';
import * as globals from '../../components/blog/globals';
import { MDXRemoteWrapper } from '../../components/blog/MDXRemoteWrapper';
import { Date } from '../../components/Date';
import { CustomLayout } from '../../components/Layout';
import { Link } from '../../components/Link/Link';
import { SharePost } from '../../components/SharePost/SharePost';
import { Spacer } from '../../components/Spacer';
import {
    getAllPostIds,
    getPostWithMdx,
    Post as PostType,
} from '../../utils/posts';
import styles from './[id].module.css';

type Props = {
    data: PostType;
    source: MDXRemoteSerializeResult<Record<string, unknown>>;
};

const mdxComponents = {
    ...defaultReplacements,
    ...globals,
};

export default function Post({ source, data }: Props) {
    return (
        <CustomLayout
            title={data.title}
            description={data.description}
            type="article"
            head={() => (
                <>
                    <link
                        media="(prefers-color-scheme: light)"
                        rel="stylesheet"
                        href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.3.1/styles/atom-one-light.min.css"
                    />
                    <link
                        media="(prefers-color-scheme: dark)"
                        rel="stylesheet"
                        href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.3.1/styles/an-old-hope.min.css"
                    />
                </>
            )}
            useOgTemplate
        >
            <Script
                src="https://unpkg.com/@highlightjs/cdn-assets@11.3.1/highlight.min.js"
                strategy="lazyOnload"
                onLoad={() => {
                    // @ts-ignore
                    hljs.configure({ ignoreUnescapedHTML: true }); // https://github.com/highlightjs/highlight.js/issues/2886
                    // @ts-ignore
                    hljs.highlightAll();
                }}
            />
            <article>
                <Spacer size={5} />
                <h1>{data.title}</h1>
                <Spacer size={5} />
                <Date date={data.date} />
                <Spacer size={8} />
                <MDXRemoteWrapper>
                    <MDXRemote {...source} components={mdxComponents} />
                </MDXRemoteWrapper>
                <Spacer size={6} />
                <div className={styles.tagWrapper}>
                    {data.tags.map((x) => (
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
                <SharePost title={data.title} />
            </article>
        </CustomLayout>
    );
}

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
    const { post, mdxSource } = await getPostWithMdx(
        typeof params.id === 'object' ? params.id[0] : params.id
    );

    return { props: { data: post, source: mdxSource } };
};

export const getStaticPaths: GetStaticPaths = () => {
    const paths = getAllPostIds();

    return {
        paths,
        fallback: 'blocking',
    };
};
