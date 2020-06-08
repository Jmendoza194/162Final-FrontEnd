import React from 'react';
import '../styles/chat_styles.css'

class ChatPopUp extends React.Component {
  render() {
    return (
      <div>
        <div id="chatbubble" onClick={() => this.onClick()}>
          <i class="fas fa-comment-alt"></i>
        </div>
      </div>
    );
  }

  onClick() {
    document.getElementById("chat_container").style.display = "flex";
    document.getElementById("chatbubble").style.display = "none";
  }
}
export default ChatPopUp;