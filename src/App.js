import React from "react";
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
