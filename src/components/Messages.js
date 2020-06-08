import React from 'react';
import '../styles/chat_styles.css'

const Messages = (props) =>{
    const renderList = props.messages.map((message)=>{
        return(
            <div>
                <p className='message_input'>{message}</p>
            </div>
        ) 
    })

    return(
        <div className='message_container'>{renderList}</div>
    )
}

export default Messages;