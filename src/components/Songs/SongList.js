import React from 'react';
import SongCard from './SongCard'
const SongList = (props) => {

    
    const renderList = props.searchInfo.map((data) =>{
        console.log(data)
        
        return <SongCard artist={data.artists[0].name} song={data.name} album={data.album.name} spotifyURI={data.uri}/>
    })

    return(
        <div>
            <div id="sad">
        <p id="songname">Song</p>
        <p id="artistname">Artist</p>
        <p id="albumname">Album</p>
    </div>
            {renderList}
        </div>
    )
}

export default SongList