'use client';

import Script from 'next/script';

declare const hljs: {
    configure: (options: { ignoreUnescapedHTML: boolean }) => void;
    highlightAll: () => void;
};

export function HljsScript() {
    return (
        <Script
            src="https://unpkg.com/@highlightjs/cdn-assets@11.3.1/highlight.min.js"
            strategy="beforeInteractive"
            onLoad={() => {
                hljs.configure({ ignoreUnescapedHTML: true }); // https://github.com/highlightjs/highlight.js/issues/2886
                hljs.highlightAll();
            }}
        />
    );
}
