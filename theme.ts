import { Tokens } from './.mirrorful/theme';
import { QUERIES } from './constants';

export const theme = {
    ...Tokens,
    queries: QUERIES,
};

export type Theme = typeof theme;
