import React from "react";
import Screen from "./Screen";
import Calc from "./Calc";
import "./Styles/App.css";

function App() {
  return (
    <section className="container">
      <Screen/>
      <Calc/>
    </section>
  )
}

export default App;