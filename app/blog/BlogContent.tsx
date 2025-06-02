'use client';

import { ContentLayout } from '../../components/ContentLayout';
import { PostPreviewList } from '../../components/PostPreviewList';
import { Post } from '../../utils/posts';

type Props = {
    posts: Post[];
};

export function BlogContent({ posts }: Props) {
    return (
        <ContentLayout header="Blog">
            <PostPreviewList posts={posts} />
        </ContentLayout>
    );
}
