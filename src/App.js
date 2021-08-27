import Globals from "./abstracts/Globals";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ShortenLink from "./components/ShortenLink";
import Statistics from "./components/Statistics";
import Cta from "./components/Cta";

const App = () => {
  return (
    <>
      <Globals />
      <Navbar />
      <Hero />
      <main>
        <ShortenLink />
        <Statistics />
        <Cta />
      </main>
    </>
  );
};

export default App;
