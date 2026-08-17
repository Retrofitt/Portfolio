import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import "./styles/styles.css";

function App() {
  return (
    <div className="App" id="home">
      <Navbar />
      <div className="spacer"></div>
      <Home />
    </div>
  );
}

export default App;
