import React from 'react';
import { Link } from 'react-router-dom';
import {backend} from '../apis/spotify';

class SignInForm extends React.Component{

    constructor(){
        super()
        //Need to implement Host privileges (if any)
        this.state = ({
            username:'',
            password: '',
            room:'',
            host:false
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
        console.log(this.state.username)
        console.log(this.state.password)
        console.log(this.state.room)
      }

      spotfyAuth = async (e) =>{
        console.log('Hello')
        const auth = await backend.get('/auth/spotify')
        return auth
    }
    
    render(){
    return(
        <div>
            {/* <form onSubmit={this.spotfyAuth}>
                <label>Username</label>
                <input placeholder='Username' name='username' value={this.state.username} onChange={this.handleChange} type='text' required/>
                <label>Password</label>
                <input placeholder='Password' name='password' value={this.state.password} onChange={this.handleChange} type='password' required/>
                <label>Room</label>
                <input placeholder='Room' name='room' value={this.state.room} onChange={this.handleChange} type='text' required/>
                <button>Click</button>
                <Link to={`/Home?username=${this.state.username}&room=${this.state.room}&host=True`}><button>Host</button></Link>
                <Link to='/Home?username=${this.state.username}&room=${this.state.room}&host=False'><button>Join</button></Link>
            </form> */}
            <a onClick={this.spotfyAuth} href={'http://localhost:3001/auth/spotify'}>Login</a>
        </div>
        
    )}
            
}

export default SignInForm;