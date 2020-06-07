import React from 'react';

const SongCard = (props) =>{
    return (
        <div>
            <h1>{props.song}</h1>
            <h1>{props.artist}</h1>
           <button>Play</button>
        </div>
    )
}

export default SongCard