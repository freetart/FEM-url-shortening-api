import { useState } from "react";
import AOS from "aos";
import "../node_modules/aos/dist/aos.css";
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
  AOS.init({ offset: 150, duration: 1000, once: true });

  const [userInput, setUserInput] = useState("");
  const [items, setItems] = useState([]);

  const URL = `https://api.shrtco.de/v2/shorten?url=${userInput}`;

  const handleUserInput = (e) => {
    const value = setUserInput(e.target.value);
    console.log(e.target.value);
    return value;
  };

  const fetchData = async () => {
    const res = await fetch(URL);
    const data = await res.json();
    setItems(data.result);
    console.log(data.result);
  };

  const onSubmit = () => {
    fetchData();
  };

  return (
    <>
      <Globals />
      <Navbar />
      <Hero />
      <main>
        <ShortenLink handleUserInput={handleUserInput} onSubmit={onSubmit} />
        <Statistics />
        <Cta />
      </main>
      <Footer />
      <Tag />
    </>
  );
};

export default App;
