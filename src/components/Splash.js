const React = require('react');
import '../styles/style.css'
import '../styles/style_playlist'

const Splash = function() {
  return (
   <div id="back">
    <div id='login'>
        Login
      </div>
    
    <div id='body1'>
      
      <h1>Welcome to Song with Friends</h1>

      <p id='msg'>Sit back, relax, and let your friends queue the music!</p>

      <button id='spotifylogin'>
        <p id='block'>Login with Spotify</p>
      </button>

    </div>
    </div>
  );
}

export default Playlist
