import { formatDate } from '../utils/formatDate';

export function Date({ date, ...props }: { date: string }) {
    return (
        <time dateTime={date} {...props}>
            {formatDate(date)}
        </time>
    );
}
