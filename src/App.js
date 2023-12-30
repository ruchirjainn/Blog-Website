import { useEffect, useState } from "react";
import { PostProvider } from "./context/PostContext";
import { Footer } from "./components/Footer/footer";
import { Archive } from "./components/Archive/archive";
import { Header } from "./components/Header/header";
import Main from "./components/Main/main";

function App() {

  const [isFakeDark, setIsFakeDark] = useState(false);

  // Whenever `isFakeDark` changes, we toggle the `fake-dark-mode` class on the HTML element (see in "Elements" dev tool).
  useEffect(
    function () {
      document.documentElement.classList.toggle("fake-dark-mode");
    },
    [isFakeDark]
  );

  return (

    <section>
      <button
        onClick={() => setIsFakeDark((isFakeDark) => !isFakeDark)}
        className="btn-fake-dark-mode"
      >
        {isFakeDark ? "☀️" : "🌙"}
      </button>

      {/* PostProvider Component here is helper of a PostContext */}
      <PostProvider>
        <Header />
        <Main />
        <Archive />
        <Footer />
      </PostProvider >
    </section>


  );
}

export default App;
