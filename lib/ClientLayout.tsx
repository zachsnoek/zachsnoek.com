'use client';

import { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { MailingListSignupForm } from '../components/MailingListSignup';
import { MaxWidthContainer } from '../components/MaxWidthContainer';
import { Spacer } from '../components/Spacer';
import { GlobalStyle } from '../styles/GlobalStyle';
import { theme } from '../theme';

export function ClientLayout({ children }: { children: ReactNode }) {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Header />
            <MaxWidthContainer>
                <main id="main-content-zs">{children}</main>
                <Spacer size={10} />
                <MailingListSignupForm />
                <Spacer size={4} />
                <Footer />
            </MaxWidthContainer>
        </ThemeProvider>
    );
}
