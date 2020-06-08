<<<<<<< HEAD
import '../styles/style_Playlist.css';

const React = require("react");
const ChatPopUp = require("./ChatPopUp");
const ChatBox1 = require("./ChatBox1");
const Search = require("./Search");
const Overlay = require("./Overlay");
const Invite = require("./Invite");
const InviteOverlay = require("./InviteOverlay");

//const Invite = require("./Invite")
//const PlaylistName = require("./PlaylistName");

=======
import React from 'react';
import InviteButton from '../components/InviteComponent/InviteButton';
import '../styles/style_Playlist.css'
>>>>>>> 8cb9b66f5bfb9cee697258f1c9d3deca552e7436
const Playlist = function() {
  return (
    <div>
      <div id="background-color">
        <div id="container">
          <div id="toptext">
            <textarea id="msg" placeholder="Squad Playlist"></textarea>
            <button id="pen">
              <i class="fas fa-pen"></i>
            </button>
          </div>

<<<<<<< HEAD
          <Invite></Invite>
=======
          <button id="pen">
            <i class="fas fa-pen"></i>
          </button>

          {/* <button id="invite">
            <p>Invite</p>
          </button> */}
          <InviteButton />
>>>>>>> 8cb9b66f5bfb9cee697258f1c9d3deca552e7436
        </div>
        
        <InviteOverlay></InviteOverlay>

        <Search></Search>
        <Overlay></Overlay>
      </div>

      <div id="playing">
        <div id="cmv">
          <p id="current"> Currently Playing: </p>
          <div id="control">
            <button id="mute">
              <i class="fas fa-volume-mute"></i>
            </button>
            <button id="volup">
              <i class="fas fa-volume-up"></i>
            </button>
          </div>
        </div>
        <div id="song"></div>

        <ChatPopUp></ChatPopUp>
        <ChatBox1></ChatBox1>
      </div>
    </div>
  );
};


export default Playlist;