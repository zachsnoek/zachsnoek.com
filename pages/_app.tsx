import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { theme } from '../theme';
import { GCScript } from 'next-goatcounter';
import '../styles/theme.css';
import '../styles/globals.scss';

const GOAT_COUNTER_URL = 'https://zachsnoek.goatcounter.com/count';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <ThemeProvider theme={theme}>
            <Component {...pageProps} />
            <GCScript siteUrl={GOAT_COUNTER_URL} />
        </ThemeProvider>
    );
}
