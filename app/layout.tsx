import { Metadata } from 'next';
import { ClientLayout } from '../lib/ClientLayout';
import { StyledComponentsRegistry } from '../lib/StyledComponentsRegistry';
import '../styles/theme.css';

// const GOAT_COUNTER_URL = 'https://zachsnoek.goatcounter.com/count';

export const metadata: Metadata = {
    title: 'Zach Snoek',
    description:
        "Hey, I'm Zach! I'm a software engineer and I write about JavaScript, React, CSS, and other web development topics.",
};

type Props = React.PropsWithChildren<{}>;

export default function RootLayout({ children }: Props) {
    return (
        <html lang="en">
            <body>
                <StyledComponentsRegistry>
                    <ClientLayout>{children}</ClientLayout>
                </StyledComponentsRegistry>
            </body>
            {/* <GCScript siteUrl={GOAT_COUNTER_URL} /> */}
        </html>
    );
}
