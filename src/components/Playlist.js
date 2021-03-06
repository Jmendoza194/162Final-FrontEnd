import '../styles/style_Playlist.css';
import Invite from './Invite'

const React = require("react");

const Playlist = function() {
  return (
    <div>
      <div id="background-color">
        <div id="container">
          <div id="toptext">
            <textarea id="msg" placeholder="Squad Playlist"></textarea>
          </div>

          <Invite></Invite>
        </div>

        <button id="plus">
          <i class="fas fa-plus"></i>
        </button>

        <button id="location">
          <i class="fas fa-location-arrow"></i>
        </button>
      </div>

      <div id="playing">
        <p id="current"> Currently Playing: </p>

        <button id="mute">
          <i class="fas fa-volume-mute"></i>
        </button>
        <button id="volup">
          <i class="fas fa-volume-up"></i>
        </button>
        <div id='song'>
          
        </div>
         <button id="chatbubble">
          <i class="fas fa-comment-alt"></i>
        </button>
      </div>
      
      <div>
        <p id="chat">Chat</p>
      </div>
      
    </div>
  );
};

export default Playlist;
