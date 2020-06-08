import React from 'react';

class InviteOverlay extends React.Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <div>
        <div id="invite_over">
          <div id="inv_cont">
            <p id="invite1">Invite your friends: </p>
            <p id="invite2">{this.props.link}</p>
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
