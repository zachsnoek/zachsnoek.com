export function isValidEmailAddress(emailAddress: string) {
    if (!emailAddress || typeof emailAddress !== 'string') {
        throw new Error(`Invalid email address: ${emailAddress}`);
    }

    // https://stackoverflow.com/a/46181
    return emailAddress
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
}
