import React from 'react';
import SongCard from './SongCard'
const SongList = (props) => {

    
    const renderList = props.searchInfo.map((data) =>{
        console.log('Hello')
        
        return <SongCard artist={data.artists[0].name} song={data.name} spotifyURI={data.uri}/>
    })

    return(
        <div>
            {renderList}
        </div>
    )
}

export default SongList