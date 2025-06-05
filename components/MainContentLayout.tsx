import { Spacer } from './Spacer';

type Props = React.PropsWithChildren<{ header: string | React.ReactNode }>;

export function MainContentLayout({ header, children }: Props) {
    return (
        <main id="main-content-zs">
            <Spacer size={5} />
            {typeof header === 'string' ? <h1>{header}</h1> : header}
            <Spacer size={5} />
            {children}
        </main>
    );
}
