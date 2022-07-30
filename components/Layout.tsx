import Head from 'next/head';
import { Header } from './Header';
import { Footer } from './Footer';
import { MailingListSignupForm } from './MailingListSignup';
import { Break } from './Break';
import { Spacer } from './Spacer';
import { MaxWidthContainer } from './MaxWidthContainer';
import { useCurrentUrl } from '../hooks/useCurrentUrl';

const SITE_TITLE = 'Zach Snoek';
const DEFAULT_DESCRIPTION =
    "Hey, I'm Zach! I'm a software engineer and I write about JavaScript, React, CSS, and other web development topics.";

interface LayoutProps {
    title: string;
    description?: string;
    type?: 'website' | 'article';
    head?: () => React.ReactNode;
    children: React.ReactNode;
}

function Layout({
    title,
    description = DEFAULT_DESCRIPTION,
    type = 'website',
    head,
    children,
}: LayoutProps) {
    const url = useCurrentUrl();

    return (
        <>
            <Head>
                <title>{title}</title>

                <meta name="description" content={description} key="desc" />
                <meta property="og:title" content={title} />
                <meta property="og:type" content={type} />
                <meta property="og:url" content={url} />
                {/* TODO: <meta property="og:image" content="" /> */}

                <meta property="og:description" content={description} />
                <meta property="og:site_name" content={SITE_TITLE} />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:creator" content="@zach_snoek" />
                <meta name="twitter:title" content={title} />
                <meta name="twitter:description" content={description} />
                {/* TODO: <meta name="twitter:image" content="" /> */}

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
