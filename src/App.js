import Globals from "./abstracts/Globals";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ShortenLink from "./components/ShortenLink";
import Statistics from "./components/Statistics";

const App = () => {
  return (
    <>
      <Globals />
      <Navbar />
      <Hero />
      <main>
        <ShortenLink />
        <Statistics />
      </main>
    </>
  );
};

export default App;
