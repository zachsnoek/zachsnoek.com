import { AppProps } from 'next/app';
import { GCScript } from 'next-goatcounter';
import '../styles/theme.css';
import '../styles/globals.scss';

const GOAT_COUNTER_URL = 'https://zachsnoek.goatcounter.com/count';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Component {...pageProps} />
            <GCScript siteUrl={GOAT_COUNTER_URL} />
        </>
    );
}
