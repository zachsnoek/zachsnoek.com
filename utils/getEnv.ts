type EnvVar = 'NEXT_PUBLIC_ORIGIN';

export function getEnv(envVar: EnvVar): string {
    if (!process.env[envVar]) {
        throw new Error(`Environment variable '${envVar}' not set`);
    }
    return process.env[envVar];
}
