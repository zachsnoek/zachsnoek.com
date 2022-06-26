import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { theme } from '../theme';
import '../styles/global.css';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <ThemeProvider theme={theme}>
            <Component {...pageProps} />
        </ThemeProvider>
    );
}
