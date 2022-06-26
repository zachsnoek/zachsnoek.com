export function formatDate(date: string) {
    if (typeof date !== 'string' || !date) {
        throw new Error('Invalid date string.');
    }
    return new Date(date).toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
    });
}
