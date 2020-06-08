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
            <div>
                <form onSubmit={this.submitForm}>
                <div id="bar">
                    <input id="search_box" value={this.state.term} onChange={this.handleChange} placeholder='Search by title, artist, or album'></input>
                    <div id="search_button">Search</div>
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar