module.exports = {
    extends: ['@commitlint/config-conventional'],
    parserPreset: {
        parserOpts: {
            headerPattern: /^([a-z-]+)(?:\(([^)]+)\))?:\s(.+)$/,
            headerCorrespondence: ['type', 'scope', 'subject'],
        },
    },
    rules: {
        'subject-case': [2, 'always', 'lower-case'],
        'subject-full-stop': [2, 'never'],
        'type-enum': [
            2,
            'always',
            [
                'build',
                'chore',
                'docs',
                'feat',
                'fix',
                'refactor',
                'revert',
                'style',
                'test',
                'create-post',
                'update-post',
            ],
        ],
        'type-case': [2, 'always', 'kebab-case'],
    },
};
