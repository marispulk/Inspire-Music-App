import React from "react";
// Import styles
import "./styles/app.scss";
// Add components
import Player from "./components/Player";
import Song from "./components/Song";
// Import Data
import data from "./data";

function App() {
  return (
    // Display Song and Player component
    <div className="App">
      <Song />
      <Player />
    </div>
  );
}

export default App;
