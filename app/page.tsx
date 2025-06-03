import { getAllPosts } from '../utils/posts';
import { IndexContent } from './IndexContent';

export default async function Index() {
    const posts = await getAllPosts({ limit: 3 });

    return <IndexContent posts={posts} />;
}
