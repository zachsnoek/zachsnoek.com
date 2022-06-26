import kebabCase from 'lodash.kebabcase';

// TODO: Tests
export function toKebabCase(string: string): string {
    if (typeof string !== 'string' || !string) {
        throw new Error(`Invalid string: ${string}`);
    }

    return kebabCase(string);
}
