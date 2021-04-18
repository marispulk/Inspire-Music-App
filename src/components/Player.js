import React, {useRef} from 'react';
// Import component
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// Import specific item
import { faPlay, faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

const Player = ({ currentSong, isPlaying, setIsPlaying }) => { // Add access to Player
    // Ref - To select specific HTML tag in component, use Ref
    const audioRef = useRef(null); // Null is a starting value
    // Event handlers
    // If playing, then pause it. If pause, then play it.
    const playSongHandler = () => {
       if (isPlaying) {
           audioRef.current.pause();
           setIsPlaying(!isPlaying); // Setting the state to opposite what it was.
       }else {
           audioRef.current.play();
           setIsPlaying(!isPlaying); // Setting the state to opposite what it was.
       }
    };
    return(
        <div className="player">
            <div className="time-control">
                <p>Start Time</p>
                <input type="range" />
                 <p>End Time</p>
            </div>
            <div className="play-control">
                <FontAwesomeIcon className="skip-back" size="2x" icon={faAngleLeft} /> {/* Display faAngleLeft icon*/}
                <FontAwesomeIcon onClick={playSongHandler} className="play" size="2x" icon={faPlay} /> {/* Display faPlay icon*/} {/* Add playSongHandler */}
                <FontAwesomeIcon className="skip-forward" size="2x" icon={faAngleRight} /> {/* Display faAngleRight icon*/}
            </div>
            <audio ref={audioRef} // Pass audioRef property
            src={currentSong.audio}></audio> {/* Pass  along currentSong */}
        </div>
    )
}

export default Player;

