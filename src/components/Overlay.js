import React from 'react';
import SearchBar from './SearchBar'
import SongList from './Songs/SongList'
class Overlay extends React.Component {
  constructor(props){
    super(props);
  }
  
  render() {
    return (
      <div>
        <div id="overlay">
          <div id="search">
            <div id="top">
              <p id="add">Add Songs to Queue</p>
              <div id="leave" onClick={() => this.onClick()}>
                <i class="fas fa-plus"></i>
              </div>
            </div>
            <div id="bar1">
              {/* <textarea id="search_box" placeholder="Search by title, artist, or album"></textarea> */}
              <SearchBar search={this.props.search}/>
              <SongList searchInfo={this.props.searchInfo}/>
            </div>
          </div>
        </div>
      </div>
    );
  }

  onClick() {
    document.getElementById("overlay").style.display = "none";
  }
}
export default Overlay;
