export type ButtonProps = Omit<
    React.ComponentPropsWithRef<'button'>,
    'style'
> & {
    size?: 'small' | 'medium' | 'large';
    variant?: 'fill' | 'outline';
};
