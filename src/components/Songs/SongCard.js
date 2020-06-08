import React from 'react';

const SongCard = (props) =>{
    console.log(props.song)
    return (
        <div>
        <div id="songlist">
        {/* Color is white, need to properly fix with positioning */}
        
        <div id="info">
            <div id="song1">{props.song}</div>
            <div id="artist">{props.artist}</div>
            <div id="album">{props.album}</div>
           <div id="addsong"><p>Add</p></div>
           </div>
        </div>
        </div>
    )
}

export default SongCard