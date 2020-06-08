import React from 'react';
import PopUp from './PopUp'

class InviteButton extends React.Component{
    constructor(props){
        super(props);
        this.state = ({
            open: false
        })
    }

    handleClick = (e) =>{
        e.preventDefault()

        this.setState({
            open:!this.state.open
        })
    }

    closePopUp(){
        this.setState({
            open: false
        })
    }
    
    render(){
        return(
            <div>
                <button id = "invite" onClick={this.handleClick}>Invite</button>
                {
                   this.state.open ? <PopUp handleClick={this.handleClick} inviteLink={this.props.link}/> : null
                }
                
            </div>
        )
    }
    
}

export default InviteButton;