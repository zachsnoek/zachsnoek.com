export function formatDate(date: string) {
    if (!date || typeof date !== 'string') {
        throw new Error(`Invalid date string: ${date}`);
    }

    const localizedDate = new Date(date);
    const utcDate = new Date(
        localizedDate.getTime() + localizedDate.getTimezoneOffset() * 60000
    );

    return utcDate.toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
    });
}
