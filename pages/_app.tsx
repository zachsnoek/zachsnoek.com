import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { theme } from '../theme';
import { GlobalStyle } from '../components/GlobalStyle';
import { GCScript } from 'next-goatcounter';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Component {...pageProps} />
            <GCScript siteUrl="https://beta-zachsnoek.goatcounter.com/count" />
        </ThemeProvider>
    );
}
