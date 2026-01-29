#!/bin/bash

set -e

if [ -z "$1" ]; then
    echo "Usage: yarn new-post <slug>"
    echo "Example: yarn new-post my-new-blog-post"
    exit 1
fi

SLUG="$1"
POST_DIR="content/blog/$SLUG"

if [ -d "$POST_DIR" ]; then
    echo "Error: Post directory '$POST_DIR' already exists"
    exit 1
fi

TODAY=$(date +%Y-%m-%d)

mkdir -p "$POST_DIR"

touch "$POST_DIR/index.mdx"

cat > "$POST_DIR/metadata.ts" << EOF
import { PostMetadata } from '../../../types';

export const metadata: PostMetadata = {
    title: '',
    date: '$TODAY',
    description: null,
    categories: [],
    tags: [],
};
EOF

echo "Created new post at $POST_DIR"
