import React from 'react';

// Insert currentSong state to change the song
const Song = ({currentSong}) => {
    return(
        <div className="song-container">
            <img src={currentSong.cover}></img> {/* Insert dynamic cover photo */}
            <h2>{currentSong.name}</h2> {/* Insert dynamic song name */}
            <h3>{currentSong.artist}</h3> {/* Insert dynamic artist name */}
        </div>
    );
};

export default Song;