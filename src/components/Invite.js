import React from 'react';

class Invite extends React.Component {
  render() {
    return (
      <div>
        <div id="invbutton">
            <button id="invite" onClick={()=> this.onClick()}>
              <p>Invite</p>
            </button>
          </div>
      </div>
    );
  }

  onClick() {
    document.getElementById("invite_over").style.display = "flex";

  }
}
export default Invite;
