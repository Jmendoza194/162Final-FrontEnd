<<<<<<< HEAD

import '../styles/style.css';


const React = require('react');
=======
import React from 'react';
import SignInForm from '../components/SignInForm'
import '../styles/style.css'
>>>>>>> 8cb9b66f5bfb9cee697258f1c9d3deca552e7436

const Splash = function() {
  return (
   <div id="back">
    {/* <div id='login'>
        Login
      </div> */}
    
    <div id='body1'>
      
      <h1>Welcome to Song with Friends</h1>

      <p id='msg'>Sit back, relax, and let your friends queue the music!</p>

      {/* <button id='spotifylogin'>
        <p id='block'>Login with Spotify</p>
      </button> */}
      <SignInForm />

    </div>
    </div>
  );
}

export default Splash;
