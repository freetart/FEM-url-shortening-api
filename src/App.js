import Globals from "./abstracts/Globals";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ShortenLink from "./components/ShortenLink";
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
        <Statistics />
        <Cta />
      </main>
      <Footer />
      <Tag />
    </>
  );
};

export default App;
