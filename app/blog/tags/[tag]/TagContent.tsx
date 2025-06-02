'use client';

import { ContentLayout } from '../../../../components/ContentLayout';
import { PostPreviewList } from '../../../../components/PostPreviewList';
import { Post } from '../../../../utils/posts';

type Props = {
    tag: string;
    posts: Post[];
};

export function TagContent({ tag, posts }: Props) {
    return (
        <ContentLayout header={`Posts about "${tag}"`}>
            <PostPreviewList posts={posts} />
        </ContentLayout>
    );
}
