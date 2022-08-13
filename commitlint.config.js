module.exports = {
    extends: ['@commitlint/config-conventional'],
    rules: {
        'subject-case': [2, 'always', 'sentence-case'],
        'subject-full-stop': [2, 'always', '.'],
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
                'createPost',
                'updatePost',
            ],
        ],
        'type-case': [2, 'always', 'camel-case'], // TODO: Fix kebab-case
    },
};
