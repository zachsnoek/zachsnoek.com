export function getCurrentUrl(): {
    url: string;
    origin: string;
} {
    const { origin, pathname } = new URL(globalThis.location.href);
    const url = [origin, pathname === '/' ? '' : pathname].join('');

    return { url, origin };
}
