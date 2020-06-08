import React from 'react';

const SongCard = (props) =>{
    console.log(props.song)
    return (
        <div>
        {/* Color is white, need to properly fix with positioning */}
            <h1>{props.song}</h1>
            <h1>{props.artist}</h1>
           <button>Play</button>
        </div>
    )
}

export default SongCard