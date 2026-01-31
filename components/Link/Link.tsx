import clsx from 'clsx';
import NextLink, { LinkProps as NextLinkProps } from 'next/link';
import styles from './Link.module.scss';

export type LinkProps = React.PropsWithChildren<
    NextLinkProps &
        Omit<
            React.AnchorHTMLAttributes<HTMLAnchorElement>,
            keyof NextLinkProps
        > & {
            hideUnderline?: boolean;
        }
>;

export function Link({ hideUnderline = false, ...props }: LinkProps) {
    return (
        <NextLink
            className={clsx(
                styles.link,
                hideUnderline && styles.hideUnderline,
                props.className
            )}
            {...props}
        />
    );
}
