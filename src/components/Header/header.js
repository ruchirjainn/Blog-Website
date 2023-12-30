import { usePosts } from "../../context/PostContext";
import { Results } from "./results";
import { SearchPosts } from "./searchPost";

export function Header() {

    // 3) Reading the Context Value
    const { onClearPosts } = usePosts();

    return (
        <header>
            <h1>
                <span><img src="blog.png" alt="Blog Website Icon" style={{ width: '70px', height: '70px' }} /></span>The Atomic Blog
            </h1>
            <div>
                <Results />
                <SearchPosts />
                <button onClick={onClearPosts}>Clear posts</button>
            </div>
        </header>
    );
}