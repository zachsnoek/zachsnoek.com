import Document, { DocumentContext } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

// https://github.com/vercel/next.js/blob/6b8e499c7bf13914cca92f9da1737d358133ee20/examples/with-styled-components/pages/_document.tsx

export default class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        const sheet = new ServerStyleSheet();
        const originalRenderPage = ctx.renderPage;

        try {
            ctx.renderPage = () =>
                originalRenderPage({
                    enhanceApp: (App) => (props) =>
                        sheet.collectStyles(<App {...props} />),
                });

            const initialProps = await Document.getInitialProps(ctx);
            return {
                ...initialProps,
                styles: [initialProps.styles, sheet.getStyleElement()],
            };
        } finally {
            sheet.seal();
        }
    }
}
