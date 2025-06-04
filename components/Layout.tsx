import Head from 'next/head';
import { Header } from './Header';
import { Footer } from './Footer/Footer';
import { MailingListSignupForm } from './MailingListSignup';
import { Spacer } from './Spacer';
import { MaxWidthContainer } from './MaxWidthContainer/MaxWidthContainer';
import { useCurrentUrl } from '../hooks/useCurrentUrl';

const SITE_TITLE = 'Zach Snoek';
const DEFAULT_DESCRIPTION =
    "Hey, I'm Zach! I'm a software engineer and I write about JavaScript, React, CSS, and other web development topics.";

interface LayoutProps {
    title: string;
    description?: string;
    type?: 'website' | 'article';
    head?: () => React.ReactNode;
    noIndex?: boolean;
    useOgTemplate?: boolean;
    children: React.ReactNode;
}

function Layout({
    title,
    description = DEFAULT_DESCRIPTION,
    type = 'website',
    head,
    noIndex = false,
    useOgTemplate = false,
    children,
}: LayoutProps) {
    const { url } = useCurrentUrl();

    const ogImagePath = useOgTemplate
        ? `https://www.zachsnoek.com/api/og?text=${encodeURIComponent(
              removeEmojis(title)
          )}`
        : `${url}/images/og-default.png`;

    return (
        <>
            <Head>
                <title>{title}</title>

                <meta name="description" content={description} key="desc" />
                <meta property="og:title" content={title} />
                <meta property="og:type" content={type} />
                <meta property="og:url" content={url} />
                <meta property="og:image" content={ogImagePath} />

                <meta property="og:description" content={description} />
                <meta property="og:site_name" content={SITE_TITLE} />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:creator" content="@zach_snoek" />
                <meta name="twitter:title" content={title} />
                <meta name="twitter:description" content={description} />
                <meta name="twitter:image" content={ogImagePath} />

                {noIndex && <meta name="robots" content="noindex" />}

                <link rel="icon" href="/favicon.ico" />

                {head?.()}
            </Head>
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
        </>
    );
}

interface MainLayoutProps extends LayoutProps {
    header: string | React.ReactNode;
}

export function MainLayout({ header, children, ...rest }: MainLayoutProps) {
    if (!header) {
        throw new Error('MainLayout requires a header.');
    }

    return (
        <Layout {...rest}>
            <Spacer size={5} />
            {typeof header === 'string' ? <h1>{header}</h1> : header}
            <Spacer size={5} />
            {children}
        </Layout>
    );
}

export function CustomLayout(props: LayoutProps) {
    return <Layout {...props} />;
}

function removeEmojis(string) {
    return string.replace(
        /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g,
        ''
    );
}
