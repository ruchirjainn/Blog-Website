import { usePosts } from "../../context/PostContext";

export function Results() {
    const { posts } = usePosts();
    return <p>🚀 {posts.length} atomic posts found</p>;
}