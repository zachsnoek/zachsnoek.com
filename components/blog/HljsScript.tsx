'use client';

import Script from 'next/script';

export function HljsScript() {
    return (
        <Script
            src="https://unpkg.com/@highlightjs/cdn-assets@11.3.1/highlight.min.js"
            strategy="beforeInteractive"
            onLoad={() => {
                // @ts-expect-error TODO: Fix types
                hljs.configure({ ignoreUnescapedHTML: true }); // https://github.com/highlightjs/highlight.js/issues/2886
                // @ts-expect-error TODO: Fix types
                hljs.highlightAll();
            }}
        />
    );
}
