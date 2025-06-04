import { HljsScript } from '../../../components/blog/HljsScript';

type Props = React.PropsWithChildren<{}>;

export default function PostLayout({ children }: Props) {
    return (
        <>
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
            <HljsScript />
            {children}
        </>
    );
}
