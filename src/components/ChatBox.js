import React from 'react';
import Messages from './Messages';
import '../styles/chat_styles.css';

class ChatBox extends React.Component{
    constructor(props){
        super(props);

        this.state = ({
            answer:'',
            message: []
        })

       

    }

    submitForm(e){
        e.preventDefault()
        console.log('submit!')
        this.props.client.emit('sendMessage',this.state.answer)
        this.setState({
            answer:''
        })
      }
    
      inputChange(e){
          this.setState({answer: e.target.value})
      }
    
    componentDidMount(){
        this.props.client.on('message', message =>{
            console.log('Hello')
            this.setState({
                message:[...this.state.message, message.text]
            })
        })
    }

    render(){
        
        return(
            // <div id="chat_cont">
            //     <Messages messages={this.state.message}/>
            //     <form onSubmit={(e) => this.submitForm(e)}>
            //         <input value={this.state.answer} onChange={(e)=> this.inputChange(e)}></input>
            //     </form>
            // </div>

            // <div id="chat_cont">
            //     <div id="chatbox">
            //         <p id="chat">Chat</p>
            //         <button id="exit" onClick={() => this.onClick()}>
            //             <i class="fas fa-plus"></i>
            //         </button>
            //     </div>
            //     <div>
            //         <Messages messages={this.state.message}/>
            //     </div>
            // </div>

             <div id="chat_container">
                    <Messages messages={this.state.message}/>
                    <div className="chatInput_container">
                        <div className="chat_input">
                            <form className="chat_form" onSubmit={(e) => this.submitForm(e)}>
                                <input className="chat_form-input" value={this.state.answer} onChange={(e)=> this.inputChange(e)}></input>
                                <button className='send_button'><i class="fas fa-chevron-circle-right"></i></button>
                            </form>
                        </div>
                    </div>
                    
                

                
            </div> 
            
        )
    }
}

export default ChatBox;