import React from 'react';

class SearchBar extends React.Component{
    constructor(props){
        super(props);

        this.state={
            term:''
        }
    }

    handleChange = (e) =>{
        e.preventDefault()
        this.setState({
            term: e.target.value
        })
    }

    submitForm = (e) =>{
        e.preventDefault()
        this.props.search(this.state.term)
    }

    render(){
        return(
            <div id = "searchbox">
                <form id="form" onSubmit={this.submitForm}>
                    <input id="input" value={this.state.term} onChange={this.handleChange} placeholder='Enter in a song name'></input>
                    <button id = "search_button">Search</button>
                </form>
            </div>
        )
    }
}

export default SearchBar