import type { Metadata } from 'next';
import Head from 'next/head';
import Script from 'next/script';
import { Footer } from '../components/Footer/Footer';
import { Header } from '../components/Header/Header';
import { MailingListSignupForm } from '../components/MailingListSignup/MailingListSignup';
import { MaxWidthContainer } from '../components/MaxWidthContainer/MaxWidthContainer';
import { Spacer } from '../components/Spacer';
import '../styles/globals.scss';
import '../styles/theme.css';

export const metadata: Metadata = {
    title: {
        default: 'Zach Snoek | Software Engineer',
        template: 'Zach Snoek | %s',
    },
    description:
        'Zach Snoek is full-stack software engineer writing about about JavaScript, React, CSS, and other software engineering topics.',
};

type Props = {
    children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
    return (
        <html lang="en">
            <Head>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <body>
                <div>
                    <Header />
                    <MaxWidthContainer>
                        {children}
                        <Spacer size={10} />
                        <MailingListSignupForm />
                        <Spacer size={4} />
                        <Footer />
                    </MaxWidthContainer>
                </div>
            </body>
            <Script
                async
                src="//gc.zgo.at/count.js"
                data-goatcounter="https://zachsnoek.goatcounter.com/count"
            />
        </html>
    );
}
