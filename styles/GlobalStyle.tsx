import { createGlobalStyle } from 'styled-components';

// Adapted from https://www.joshwcomeau.com/css/custom-css-reset/

const GlobalStyle = createGlobalStyle`
    @font-face {
        /* Karrick by Jean-Baptiste Morizot and Lucas Le Bihan (Velvetyne Type Foundry): https://velvetyne.fr/fonts/karrik */
        font-family: 'Karrik';
        src: url('/fonts/Karrik-Regular.woff2') format('woff2');
        font-display: swap;
    }

    *,
    *::before,
    *::after {
        box-sizing: border-box;
    }

    * {
        margin: 0;
    }

    html {
        --spacing-1: 4px;
        --spacing-2: 8px;
        --spacing-3: 16px;
        --spacing-4: 24px;
        --spacing-5: 32px;
        --spacing-6: 40px;
        --spacing-7: 48px;
        --spacing-8: 64px;
        --spacing-9: 80px;
        --spacing-10: 96px;

        --border-width-1: 3px;

        --border-radius-1: 3px;
        --border-radius-2: 5px;
        --border-radius-3: 7px;

        --layout-max-width: 700px;

        font-size: var(--font-size-base);
    }

    html,
    body,
    #__next {
        height: 100%;
    }

    body {
        font-family: Karrik, Roboto, sans-serif;
        -webkit-font-smoothing: antialiased;

        background-color: var(--color-background);
        color: var(--color-text);
        line-height: 1.5;
    }

    img,
    picture,
    video,
    canvas {
        display: block;
        max-width: 100%;
    }

    input,
    button,
    textarea,
    select {
        font: inherit;
    }

    p,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        line-height: initial;
        overflow-wrap: break-word;
    }

    #root,
    #__next {
        isolation: isolate;
    }

    a {
        color: inherit;
        text-decoration: none;
        text-underline-offset: var(--spacing-1);
    }

    a:hover {
        color: var(--color-primary);
    }

    a:focus,
    button:focus,
    input:focus {
        outline-color: var(--color-primary);
        outline-offset: var(--spacing-1);
    }

    ::selection {
        background-color: var(--color-primary);
    }

    h1 {
        font-size: var(--font-size-xl);
    }

    h2 {
        font-size: var(--font-size-lg);
    }

    h3 {
        font-size: var(--font-size-md);
    }

    h4 {
        font-size: var(--font-size-base);
    }

    h5 {
        font-size: var(--font-size-sm);
    }

    h6 {
        font-size: var(--font-size-xs);
    }

    @media ${(p) => p.theme.queries.mobileAndBelow} {
        h1 {
            font-size: var(--font-size-lg);
        }

        h2 {
            font-size: var(--font-size-md);
        }

        h3 {
            font-size: var(--font-size-base);
        }

        h4 {
            font-size: var(--font-size-sm);
        }
    }
`;

export { GlobalStyle };
