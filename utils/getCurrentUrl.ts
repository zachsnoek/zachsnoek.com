export function getCurrentUrl() {
    const { origin, pathname } = new URL(globalThis.location.href);
    return [origin, pathname].join('');
}
