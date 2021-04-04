import React from "react";
// Import styles
import "./styles/app.scss";
// Add components
import Player from "./components/Player";
import Song from "./components/Song";

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
