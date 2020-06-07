import React from 'react';
import Messages from './Messages';

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
            <div>
                <Messages messages={this.state.message}/>
                <form onSubmit={(e) => this.submitForm(e)}>
                    <input value={this.state.answer} onChange={(e)=> this.inputChange(e)}></input>
                </form>
            </div>
        )
    }
}

export default ChatBox;