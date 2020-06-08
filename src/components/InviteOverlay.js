import React from 'react';

class InviteOverlay extends React.Component {
  render() {
    return (
      <div>
        <div id="invite_over">
          <div id="inv_cont">
            <p id="invite1">Invite your friends: </p>
            <div id="inv_x" onClick={()=> this.onClick()}><i class="fas fa-plus"></i></div>
          </div>
        </div>
      </div>
    );
  }

  onClick() {
    document.getElementById("invite_over").style.display = "none";
  }
}
export default InviteOverlay;
