import React from "react";
import "./App.css";
import { Home } from "./Components/Home";
import { Navbar } from "./Components/Navigation/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
