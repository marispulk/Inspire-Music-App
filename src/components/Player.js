import React from 'react';
// Import component
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// Import specific item
import { faPlay, faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

const Player = () => {
    return(
        <div className="player">
            <div className="time-control">
                <p>Start Time</p>
                <input type="range" />
                 <p>End Time</p>
            </div>
            <div className="play-control">
                <FontAwesomeIcon className="skip-back" size="2x" icon={faAngleLeft} /> {/* Display faAngleLeft icon*/}
                <FontAwesomeIcon className="play" size="2x" icon={faPlay} /> {/* Display faPlay icon*/}
                <FontAwesomeIcon className="skip-forward" size="2x" icon={faAngleRight} /> {/* Display faAngleRight icon*/}
            </div>
        </div>
    )
}

export default Player;

