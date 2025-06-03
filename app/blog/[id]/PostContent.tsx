'use client';

import React from 'react';
import styled from 'styled-components';
import { ContentLayout } from '../../../components/ContentLayout';
import { Date } from '../../../components/Date';
import { Link } from '../../../components/Link';
import { SharePost } from '../../../components/SharePost';
import { Spacer } from '../../../components/Spacer';
import { Post as PostType } from '../../../utils/posts';

type Props = React.PropsWithChildren<{ post: PostType }>;

export function PostContent({ post: data, children }: Props) {
    return (
        <ContentLayout header={data.title}>
            <Date date={data.date} />
            <Spacer size={8} />
            {children}
            <Spacer size={6} />
            <TagWrapper>
                {data.tags.map((x) => (
                    <TagBadge
                        href={`/blog/tags/${encodeURIComponent(x)}`}
                        key={x}
                        hideUnderline
                    >
                        {x}
                    </TagBadge>
                ))}
            </TagWrapper>
            <Spacer size={6} />
            <SharePost title={data.title} />
        </ContentLayout>
    );
}

const TagWrapper = styled.div`
    font-size: var(--font-size-sm);
    display: flex;
    gap: var(--spacing-2);
    flex-wrap: wrap;
`;

const TagBadge = styled(Link)`
    padding: var(--spacing-1) var(--spacing-2);
    border-radius: var(--border-radius-2);
    background: var(--tag-background-color);
`;
