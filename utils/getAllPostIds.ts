import fs from 'fs';
import path from 'path';

const postsDirectory = path.join(process.cwd(), 'content', 'blog');

export function getAllPostIds() {
    const directories = fs.readdirSync(postsDirectory);
    return directories.map((directory) => ({
        id: directory,
    }));
}
