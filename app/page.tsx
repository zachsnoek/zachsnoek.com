import { getAllPosts } from '../utils/posts';
import { IndexContent } from './IndexContent';

export default function Index() {
    const posts = getAllPosts({ limit: 3 });

    return <IndexContent posts={posts} />;
}
