import React from 'react';
import { Link } from 'react-router-dom';

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
    
    render(){
    return(
        <div>
            <form >
                <label>Username</label>
                <input placeholder='Username' name='username' value={this.state.username} onChange={this.handleChange} type='text' required/>
                <label>Password</label>
                <input placeholder='Password' name='password' value={this.state.password} onChange={this.handleChange} type='password' required/>
                <label>Room</label>
                <input placeholder='Room' name='room' value={this.state.room} onChange={this.handleChange} type='text' required/>
                <Link to={`/Home?username=${this.state.username}&room=${this.state.room}`}><button>Host</button></Link>
                <Link to='/Home'><button>Join</button></Link>
            </form>
        </div>
        
    )}
            
}

export default SignInForm;