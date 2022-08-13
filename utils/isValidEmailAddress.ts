export function isValidEmailAddress(emailAddress: string) {
    if (typeof emailAddress !== 'string') {
        throw new Error(`Expected string but got ${typeof emailAddress}}`);
    }

    // https://stackoverflow.com/a/46181
    return emailAddress
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
}
