import React from 'react';
import { useCurrentUrl } from '../../hooks/useCurrentUrl';
import { Post } from '../../utils/posts';
import { Link } from '../Link';
import styles from './SharePost.module.css';
type Props = Pick<Post, 'title'>;

export function SharePost({ title }: Props) {
    const { url } = useCurrentUrl();

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
                href={createLinkedInShareLink(url)}
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
