import { formatDate } from '../utils/formatDate';

type Props = {
    date: string;
    className: string;
};

export function Date({ date, ...props }: Props) {
    return (
        <time dateTime={date} {...props}>
            {formatDate(date)}
        </time>
    );
}
