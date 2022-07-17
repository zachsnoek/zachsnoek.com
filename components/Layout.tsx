import Head from 'next/head';
import { Header } from './Header';
import { Footer } from './Footer';
import { MailingListSignupForm } from './MailingListSignup';
import { SITE_TITLE } from '../constants';
import { Break } from './Break';
import { Spacer } from './Spacer';
import { MaxWidthContainer } from './MaxWidthContainer';

interface LayoutProps {
    title: string;
    description?: string;
    head?: () => React.ReactNode;
    children: React.ReactNode;
}

function Layout({ title, description, head, children }: LayoutProps) {
    return (
        <>
            <Head>
                <title>{title}</title>
                {description && (
                    <meta name="description" content={description} key="desc" />
                )}
                <link rel="icon" href="/favicon.ico" />
                {head?.()}
            </Head>
            <div>
                <Header />
                <MaxWidthContainer>
                    <main id="main-content-zs">{children}</main>
                    <Break />
                    <MailingListSignupForm />
                    <Spacer size={4} />
                    <Footer />
                </MaxWidthContainer>
            </div>
        </>
    );
}

interface MainLayoutProps extends LayoutProps {
    header: string;
}

export function MainLayout({ header, children, ...rest }: MainLayoutProps) {
    if (!header) {
        throw new Error('MainLayout requires a header.');
    }

    return (
        <Layout {...rest}>
            <h1>{header}</h1>
            <Spacer size={5} />
            {children}
        </Layout>
    );
}

export function CustomLayout(props: LayoutProps) {
    return <Layout {...props} />;
}

/** @deprecated */
function getPageTitle(pageTitle: string | undefined) {
    return pageTitle?.length ? `${pageTitle} | ${SITE_TITLE}` : SITE_TITLE;
}
