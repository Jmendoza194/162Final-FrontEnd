import '../styles/style.css'
import SignInForm from './SignInForm';

const React = require('react');

const Splash = function() {
  return (
   <div id="back">
    {/* <div id='login'>
        Login
      </div> */}
    
    <div id='body1'>
      
      <h1>Welcome to Song with Friends</h1>

      <p id='msg'>Sit back, relax, and let your friends queue the music!</p>


      <SignInForm></SignInForm>

    </div>
    </div>
  );
}

export default Splash;
