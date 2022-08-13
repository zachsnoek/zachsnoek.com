import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';
import { useCurrentUrl } from '../hooks/useCurrentUrl';
import { Post } from '../utils/posts';

type Props = Pick<Post, 'title'>;

export function SharePost({ title }: Props) {
    const url = useCurrentUrl();

    return (
        <Wrapper>
            <Link href={createTwitterShareLink(title, url)}>
                Tweet this post
            </Link>
            <Link href={createLinkedInShareLink(url)}>Share on LinkedIn</Link>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
`;

// https://stackoverflow.com/questions/6208363/sharing-a-url-with-a-query-string-on-twitter
// https://developer.twitter.com/en/docs/twitter-for-websites/tweet-button/overview
function createTwitterShareLink(title: Props['title'], url: string) {
    const params = new URLSearchParams({
        text: `I just read "${title}" by Zach Snoek!`,
        via: 'zach_snoek',
        url,
    }).toString();

    return `https://twitter.com/intent/tweet?${params}`;
}

// https://stackoverflow.com/a/61583095
function createLinkedInShareLink(url: string) {
    return `https://www.linkedin.com/sharing/share-offsite/?url=${url}`;
}
