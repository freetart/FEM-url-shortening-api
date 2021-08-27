import Globals from "./abstracts/Globals";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ShortenLink from "./components/ShortenLink";
import Results from "./components/Results";
import Statistics from "./components/Statistics";
import Cta from "./components/Cta";
import Footer from "./components/Footer";
import Tag from "./components/Tag";

const App = () => {
  return (
    <>
      <Globals />
      <Navbar />
      <Hero />
      <main>
        <ShortenLink />
        <Results />
        <Statistics />
        <Cta />
      </main>
      <Footer />
      <Tag />
    </>
  );
};

export default App;
