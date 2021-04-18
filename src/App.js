import React, {useState} from "react";
// Import styles
import "./styles/app.scss";
// Add components
import Player from "./components/Player";
import Song from "./components/Song";
import data from "./data";


function App() {
  // State - songs is a name of state now. setSongs is for modifyling songs. useState executes the data function
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]); // Takes the first song of the array of objects
  const [isPlaying, setIsPlaying] = useState(false); // Add state to music playing
  return (
    // Display Song and Player component
    <div className="App">
      <Song currentSong={currentSong} /> {/* currentSong is the state passing by */}
      <Player
        setIsPlaying={setIsPlaying}
        isPlaying={isPlaying}
        currentSong={currentSong}
       />
    </div>
  );
}

export default App;
