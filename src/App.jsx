import React from "react";
import "./App.css";
import { Slider } from "./components/Slider";
import { Header } from "./components/Header";
import { About } from "./components/About";
import { DietSelection } from "./components/DietSelection";
import { Programs } from "./components/Programs";

function App() {
  return (
    <>
      <Header />
      <Slider />
      <About />
      <DietSelection />
      <Programs />
    </>
  );
}

export default App;
