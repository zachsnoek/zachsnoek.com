import clsx from 'clsx';
import NextLink, { LinkProps as NextLinkProps } from 'next/link';
import styles from './Link.module.scss';

export type LinkProps = React.PropsWithChildren<{
    href: NextLinkProps['href'];
    className?: string;
    hideUnderline?: boolean;
    target?: HTMLLinkElement['target'];
}>;

export function Link({ href, hideUnderline = false, ...props }: LinkProps) {
    return (
        <NextLink href={href} passHref>
            <a
                {...props}
                className={clsx(
                    styles.link,
                    hideUnderline && styles.hideUnderline,
                    props.className
                )}
            />
        </NextLink>
    );
}
