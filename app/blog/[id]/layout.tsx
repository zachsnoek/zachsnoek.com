'use client';

import Script from 'next/script';

type Props = React.PropsWithChildren<{}>;

export default function PostLayout({ children }: Props) {
    return (
        <article>
            <Script
                src="https://unpkg.com/@highlightjs/cdn-assets@11.3.1/highlight.min.js"
                strategy="beforeInteractive"
                onLoad={() => {
                    // @ts-ignore
                    hljs.configure({ ignoreUnescapedHTML: true }); // https://github.com/highlightjs/highlight.js/issues/2886
                    // @ts-ignore
                    hljs.highlightAll();
                }}
            />
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
            {children}
        </article>
    );
}
