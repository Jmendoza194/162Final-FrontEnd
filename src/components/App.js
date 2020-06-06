import React from 'react';
import Chatbox from './ChatBox';
import SignInForm from './SignInForm';
const socketIOClient = require( "socket.io-client");

//will have to change to appropriate address later
const endpoint = 'http://localhost:3001';
//const socket = socketIOClient(endpoint);

class App extends React.Component{
  
    constructor(props){
      super(props);

      this.state = {
        client: socketIOClient.connect(endpoint),
        //spaghetti code lmao, need to figure out how to use react router better
        userName:this.props.location.search.split('?')[1].split('&')[0].split('=')[1],
        room:this.props.location.search.split('?')[1].split('&')[1].split('=')[1]
      }

    }

    componentDidMount(){
        console.log('Hello')
        this.state.client.emit('join', {
            username:this.props.location.search.split('?')[1].split('&')[0].split('=')[1],
            room:this.props.location.search.split('?')[1].split('&')[1].split('=')[1]
        })
    }
    
    
    render(){
      
    return(
      <div>
        <Chatbox client={this.state.client} userName={this.state.userName} room={this.state.room}/>
      </div>
      )
    }
    
  }
  
  export default App;