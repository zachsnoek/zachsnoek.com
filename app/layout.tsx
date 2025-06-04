import Head from 'next/head';
import { Footer } from '../components/Footer/Footer';
import { Header } from '../components/Header/Header';
import { MailingListSignupForm } from '../components/MailingListSignup/MailingListSignup';
import { MaxWidthContainer } from '../components/MaxWidthContainer/MaxWidthContainer';
import { Spacer } from '../components/Spacer';
import '../styles/globals.scss';
import '../styles/theme.css';

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
                        <main id="main-content-zs">{children}</main>
                        <Spacer size={10} />
                        <MailingListSignupForm />
                        <Spacer size={4} />
                        <Footer />
                    </MaxWidthContainer>
                </div>
            </body>
        </html>
    );
}
