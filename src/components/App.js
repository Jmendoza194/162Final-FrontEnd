import React from 'react';
import Chatbox from './ChatBox';
import SignInForm from './SignInForm';
import axios from 'axios'
import SearchBar from './SearchBar'
import SongList from './Songs/SongList'
import InviteButton from './InviteComponent/InviteButton';
import { Redirect } from 'react-router-dom';
import '../styles/style_Playlist.css'
<<<<<<< HEAD
=======
import '../styles/style.css'
>>>>>>> 8cb9b66f5bfb9cee697258f1c9d3deca552e7436


const socketIOClient = require( "socket.io-client");


//will have to change to appropriate address later
const endpoint = 'http://localhost:3001';
//const socket = socketIOClient(endpoint);

const hash = window.location.hash
  .substring(1)
  .split("&")
  .reduce(function(initial, item) {
    if (item) {
      var parts = item.split("=");
      initial[parts[0]] = decodeURIComponent(parts[1]);
    }
    return initial;
  }, {});

  window.location.hash = "";

   console.log(window.location.origin)

const inviteLink = (window.location.origin)


class App extends React.Component{
  
    constructor(props){
      super(props);

      this.state = {
        client: socketIOClient.connect(endpoint),
        //spaghetti code lmao, need to figure out how to use react router better
        // userName:this.props.location.search.split('?')[1].split('&')[0].split('=')[1],
        // room:this.props.location.search.split('?')[1].split('&')[1].split('=')[1],
        userName:null,
        room:'162',
        token: null,
        item: {
        album: {
            images: [{ url: "" }]
        },
        name: "",
        artists: [{ name: "" }],
        duration_ms:0,
        },
        is_playing: "Paused", 
        progress_ms: 0,
        searchInfo: [],
        query:'Universe'
      }

    //   this.getCurrentlyPlaying = this.getCurrentlyPlaying.bind(this);

    }

    componentDidMount(){
        // console.log(this.props.location.search.split('?')[1].split('&')[2].split('=')[1])
        // this.state.client.emit('join', {
        //     username:this.props.location.search.split('?')[1].split('&')[0].split('=')[1],
        //     room:this.props.location.search.split('?')[1].split('&')[1].split('=')[1],
        //     host:this.props.location.search.split('?')[1].split('&')[2].split('=')[1]
        // })

        

         // Set token
        let _token = hash.access_token;
        if (_token) {
        // Set token
        this.setState({
            token: _token
        });
    }
  }

  componentDidUpdate(){
    if(this.state.token && !this.state.userName){
      const response  = axios({
        url:" https://api.spotify.com/v1/me",
        method:'get',
        headers:{
            'Authorization': 'Bearer ' + this.state.token
        }
      }).then((res)=>{
          
          console.log('user: ',res)
          this.setState({
            userName: res.data.display_name
          })
      }).then(()=>{
        this.state.client.emit('join', {
          username: this.state.userName,
          room: this.state.room
          })
      })
  }

  if(this.state.userName && this.state.room){
    console.log(this.state.userName)
    
}

  }


    findSongs = async (term) => {
        // Make a call using the token
        // $.ajax({
        //   url: "https://api.spotify.com/v1/me/player",
        //   type: "GET",
        //   beforeSend: (xhr) => {
        //     xhr.setRequestHeader("Authorization", "Bearer " + token);
        //   },
        //   success: (data) => {
        //     this.setState({
        //       item: data.item,
        //       is_playing: data.is_playing,
        //       progress_ms: data.progress_ms,
        //     });
        //   }
        // });
        console.log('Inside find Songs')
        const response  = await axios({
            url:"https://api.spotify.com/v1/search",
            method:'get',
            headers:{
                'Authorization': 'Bearer ' + this.state.token,
            },
            params:{
                type:'track',
                limit: '5',
                q:term
            }
        }).then((res)=>{
            // console.log(res.data.tracks.items)
            this.setState({
                searchInfo: res.data.tracks.items
            })
        })
       
      }

    render(){
      
    return(

      <div>
        {/* <button onClick={this.findSongs}>Search</button> */}
        <div>
      <div id="background-color">
        <div id="container">
          <div id="toptext">
            <textarea id="msg" placeholder="Squad Playlist"></textarea>
          </div>

          <button id="pen">
            <i class="fas fa-pen"></i>
          </button>

          {/* <button id="invite">
            <p>Invite</p>
          </button> */}
          <InviteButton link={inviteLink}/>
        </div>

        <button id="plus">
          <i class="fas fa-plus"></i>
        </button>

        <button id="location">
          <i class="fas fa-location-arrow"></i>
        </button>
      </div>

      <div id="playing">
        <p id="current"> Currently Playing: </p>

        <button id="mute">
          <i class="fas fa-volume-mute"></i>
        </button>
        <button id="volup">
          <i class="fas fa-volume-up"></i>
        </button>
        <div id='song'>
          
        </div>
         <button id="chatbubble">
          <i class="fas fa-comment-alt"></i>
        </button>
      </div>
      
      <div>
        <p id="chat">Chat</p>
      </div>
      
    </div>

        <SongList searchInfo={this.state.searchInfo}/>
        <SearchBar search={this.findSongs.bind(this)}/>
        <Chatbox client={this.state.client} userName={this.state.userName}/>
        
      </div>
      )
    }
    
  }
  
  export default App;