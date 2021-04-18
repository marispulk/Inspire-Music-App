import React, { useRef, useState } from 'react';
// Import component.
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// Import specific item.
import { faPlay, faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

const Player = ({ currentSong, isPlaying, setIsPlaying }) => { // Add access to Player
    // Ref - To select specific HTML tag in component, use Ref.
    const audioRef = useRef(null); // Null is a starting value.
    // Event handlers.
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
    const timeUpdateHandler = (e) => { // Add time update handler. // Add access to event.
        const current = e.target.currentTime // Add access to currentTime.
        const duration = e.target.duration; // Add access to duration.
        setSongInfo({ ...songInfo, currentTime: current, duration }) // Take all song info, but update only current song duration
    };
    const getTime = (time) => {
        return (
            // Divide time with 60, to get the minute. Math.floor removes decimal points.
            Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2) // Every time it reached 60, it starts 0 again.
        );
    };
    // State
    const [songInfo, setSongInfo] = useState({ // Add state for songinfo.
        currentTime: null, // Starting from 0 as default value.
        duration: null, // Default value.
    })
    return(
        <div className="player">
            <div className="time-control">
                <p>{getTime(songInfo.currentTime)}</p> {/* Display song current time */}
                <input type="range" />
                <p>{getTime(songInfo.duration)}</p> {/* Display suration time */ }
            </div>
            <div className="play-control">
                <FontAwesomeIcon className="skip-back" size="2x" icon={faAngleLeft} /> {/* Display faAngleLeft icon*/}
                <FontAwesomeIcon onClick={playSongHandler} className="play" size="2x" icon={faPlay} /> {/* Display faPlay icon*/} {/* Add playSongHandler */}
                <FontAwesomeIcon className="skip-forward" size="2x" icon={faAngleRight} /> {/* Display faAngleRight icon*/}
            </div>
            <audio
            onTimeUpdate={timeUpdateHandler}
            onLoadedMetadata={timeUpdateHandler} // When metadata bout song loads up, update it initially
            ref={audioRef} // Add access to timeupdateHandler function // Pass audioRef property
            src={currentSong.audio}
            ></audio> {/* Pass  along currentSong */}
        </div>
    )
}

export default Player;

