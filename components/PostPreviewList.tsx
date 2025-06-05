import React from 'react';
import { PostMetadata } from '../schemas/schPostMetadata';
import { PostPreview } from './PostPreview/PostPreview';
import { Spacer } from './Spacer';

type Props = { posts: PostMetadata[] };

export const PostPreviewList = ({ posts }: Props) => {
    if (!posts.length) {
        return null;
    }

    const [first, ...rest] = posts;

    if (posts.length === 1) {
        return <PostPreview post={first} />;
    }

    const postPreviews = rest.reduce(
        (allPosts, currentPost) => [
            ...allPosts,
            <Spacer key={currentPost.id + '-spacer'} size={5} />,
            <PostPreview key={currentPost.id} post={currentPost} />,
        ],
        [<PostPreview key={first.id} post={first} />]
    );

    return <>{postPreviews}</>;
};
