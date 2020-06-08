import React from 'react';
import { Link } from 'react-router-dom';

//console.log(process.env)

class SignInForm extends React.Component{

    constructor(){
        super()
        //Need to implement Host privileges (if any)
        this.state = ({
            username:'',
            // password: '',
            room:'162',
            host:false,
            //Need to use own clientID and client Secret
            clientID: 'ef991f79ee6f4498b0563e592a734e8f',
            clientSecret:'',
            scopes:[
                "user-read-currently-playing",
                "user-read-playback-state",
              ],
              authEndpoint:'https://accounts.spotify.com/authorize?',
              redirectURI:'http://localhost:3000/redirect'
        })

    }

      
    

    //Will have to have two different functions from input because spotify account details and room num should be handled differently

    handleChange = (e) =>{
        e.preventDefault()
        const target = e.target;
        const value = target.value
        const name = target.name;
        this.setState({
            [name]:value
        })

       
    }

    submitForm = (e) =>{
        e.preventDefault()
        // console.log(this.state.password)
        console.log(this.state.room)
      }

    //   spotfyAuth = async (e) =>{
    //     console.log('Hello')
    //     const auth = await backend.get('/auth/spotify')
    //     return auth
    // }
    
    render(){
    return(
        <div id='spotifylogin'>
            {/* <form>
                <label>Username</label>
                <input placeholder='Username' name='username' value={this.state.username} onChange={this.handleChange} type='text' required/>
                <label>Password</label>
                <input placeholder='Password' name='password' value={this.state.password} onChange={this.handleChange} type='password' required/>
                <label>Room</label>
                <input placeholder='Room' name='room' value={this.state.room} onChange={this.handleChange} type='text' required/>
                <Link to={`/Home?username=${this.state.username}&room=${this.state.room}&host=False`}><button>Join</button></Link>
            </form> */}
            
              
                <button id='spotifylogin'>
                    <a
                    className="btn btn--loginApp-link"
                    href={`${this.state.authEndpoint}client_id=${this.state.clientID}&redirect_uri=${this.state.redirectURI}&scope=${this.state.scopes.join("%20")}&response_type=token&show_dialog=true`}
                    >
                    <p id='block'>Login with Spotify</p>
                    </a>
                </button>
        
        </div>
        
    )}
            
}

export default SignInForm;