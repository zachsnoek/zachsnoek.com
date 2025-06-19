import React from 'react';
import { PostMetadata } from '../../types';
import { Link } from '../Link/Link';
import styles from './SharePost.module.css';

type Props = { title: PostMetadata['title']; url: string };

export function SharePost({ title, url }: Props) {
    return (
        <div className={styles.wrapper}>
            <Link
                href={createTwitterShareLink(title, url)}
                target="_blank"
                hideUnderline
            >
                Tweet this post
            </Link>
            <Link
                href={createLinkedInShareLink(title, url)}
                target="_blank"
                hideUnderline
            >
                Share on LinkedIn
            </Link>
        </div>
    );
}

// https://stackoverflow.com/questions/6208363/sharing-a-url-with-a-query-string-on-twitter
// https://developer.twitter.com/en/docs/twitter-for-websites/tweet-button/overview
function createTwitterShareLink(title: Props['title'], url: string) {
    const params = new URLSearchParams({
        text: `Check out this post "${title}" by Zach Snoek!`,
        via: 'zach_snoek',
        url,
    }).toString();

    return `https://twitter.com/intent/tweet?${params}`;
}

// https://stackoverflow.com/a/61583095
function createLinkedInShareLink(title: Props['title'], url: string) {
    const params = new URLSearchParams({
        shareActive: 'true',
        text: `Check out this post by Zach Snoek!\n\n"${title}": ${url}`,
    }).toString();
    return `https://www.linkedin.com/feed/?${params}`;
}
