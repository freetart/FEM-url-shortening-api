import { useState } from "react";
import axios from "axios";
import Globals from "./abstracts/Globals";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ShortenLink from "./components/ShortenLink";
// import Results from "./components/Results";
import Statistics from "./components/Statistics";
import Cta from "./components/Cta";
import Footer from "./components/Footer";
import Tag from "./components/Tag";

const App = () => {
  const [userInput, setUserInput] = useState("");

  const handleUserInput = (e) => {
    const value = setUserInput(e.target.value);
    console.log(e.target.value);
    return value;
  };

  const onSubmit = async () => {
    try {
      const result = await axios(
        `https://api.shrtco.de/v2/shorten?url=${userInput}`
      );
      setUserInput(result.data.result);
      console.log(result.data.result);
    } catch (error) {
      console.log(error);
    }
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
