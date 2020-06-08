import React from 'react';

const PopUp = (props) =>{
    return(
        <div>
        <div id="invite_over">
          <div id="inv_cont">
            <p id="invite1">Invite your friends: </p>
            <p>{props.inviteLink}</p>
            <div id="inv_x" onClick={()=> this.onClick()}><i class="fas fa-plus"></i></div>
          </div>
        </div>
      </div>
    )
}

export default PopUp;