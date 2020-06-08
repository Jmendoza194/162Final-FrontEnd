import React from 'react';

class Overlay extends React.Component {
  
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
            <div id="bar">
              <textarea id="search_box" placeholder="Search by title, artist, or album"></textarea>
              <div id="search_button">Search</div>
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
