import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Navbar, Menu } from "./components/index";
import FirstSection from "./components/FirstSection";
import SecondSection from "./components/SecondSection";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import SectionNumberThree from "./components/SectionNum3";
import SectionNumFour from "./components/SectionNum4";
import SectionNumFive from "./components/SectionNum5";

const App = (props) => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);
  return (
    <BrowserRouter>
      <Menu />
      <Navbar />
      <FirstSection />
      <SecondSection />
      <SectionNumberThree />
      <SectionNumFive />
      <SectionNumFour />
    </BrowserRouter>
  );
};

export default App;
