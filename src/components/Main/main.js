import { memo } from "react";
import { Posts } from "./Posts";
import { FormAddPost } from "./formAddPost";

const Main = memo(function Main() {
    return (
        <main>
            <FormAddPost />
            <Posts />
        </main>
    );
});

export default Main;