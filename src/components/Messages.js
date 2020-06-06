import React from 'react';

const Messages = (props) =>{
    const renderList = props.messages.map((message)=>{
        return <p>{message}</p>
    })

    return(
        <div>{renderList}</div>
    )
}

export default Messages;