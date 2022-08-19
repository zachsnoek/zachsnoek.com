import { GetStaticProps, GetStaticPaths } from 'next';
import { Link } from '../../components/Link';
import Script from 'next/script';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import {
    getAllPostIds,
    getPostWithMdx,
    Post as PostType,
} from '../../utils/posts';
import { Date } from '../../components/Date';
import { CustomLayout } from '../../components/Layout';
import styled from 'styled-components';
import * as defaultReplacements from '../../components/blog/default-replacements';
import * as globals from '../../components/blog/globals';
import { MDXRemoteWrapper } from '../../components/blog/MDXRemoteWrapper';
import { Spacer } from '../../components/Spacer';
import { SharePost } from '../../components/SharePost';

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
                <Title>{data.title}</Title>
                <Spacer size={5} />
                <Date date={data.date} />
                <Spacer size={8} />
                <MDXRemoteWrapper>
                    <MDXRemote {...source} components={mdxComponents} />
                </MDXRemoteWrapper>
                <Spacer size={6} />
                <TagWrapper>
                    {data.tags.map((x) => (
                        <TagBadge
                            href={`/blog/tags/${encodeURIComponent(x)}`}
                            key={x}
                        >
                            {x}
                        </TagBadge>
                    ))}
                </TagWrapper>
                <Spacer size={6} />
                <SharePost title={data.title} />
            </article>
        </CustomLayout>
    );
}

const Title = styled.h1`
    text-align: center;

    @media ${(p) => p.theme.queries.mobileAndBelow} {
        text-align: revert;
    }
`;

const TagWrapper = styled.div`
    font-size: var(--font-size-sm);
    display: flex;
    gap: var(--spacing-2);
    flex-wrap: wrap;
`;

const TagBadge = styled(Link)`
    padding: var(--spacing-1) var(--spacing-2);
    border-radius: var(--border-radius-2);
    background: var(--color-background-light);
`;

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
