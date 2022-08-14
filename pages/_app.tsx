import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { theme } from '../theme';
import { GlobalStyle } from '../styles/GlobalStyle';
import { GCScript } from 'next-goatcounter';
import '../styles/global.css';

const GOAT_COUNTER_URL = 'https://zachsnoek.goatcounter.com/count';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Component {...pageProps} />
            <GCScript siteUrl={GOAT_COUNTER_URL} />
        </ThemeProvider>
    );
}
