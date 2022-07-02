/** Returns the URL of the current page. */
export function getCurrentUrl() {
    const { origin, pathname } = new URL(globalThis.location.href);
    return [origin, pathname].join('');
}
