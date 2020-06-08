import React from 'react';

class ChatBox1 extends React.Component {
  render() {
    return (
      <div id="chat_cont">
      <div id="chatbox">
        <p id="chat">Chat</p>
        <button id="exit" onClick={() => this.onClick()}>
          <i class="fas fa-plus"></i>
        </button>
      </div>
        <div id="message">
         <div id="location">
        <i class="fas fa-location-arrow"></i>
      </div>
        </div>
      </div>
    );
  }

  onClick() {
    document.getElementById("chat_cont").style.display = "none";
    document.getElementById("chatbubble").style.display = "";
    
  }
}
export default ChatBox1;