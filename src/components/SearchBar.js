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
<<<<<<< HEAD
            <div id = "searchbox">
                <form id="form" onSubmit={this.submitForm}>
                    <input id="input" value={this.state.term} onChange={this.handleChange} placeholder='Enter in a song name'></input>
                    <button id = "search_button">Search</button>
=======
            <div>
                <form onSubmit={this.submitForm}>
                <div id="bar">
                    <input id="search_box" value={this.state.term} onChange={this.handleChange} placeholder='Search by title, artist, or album'></input>
                    <div id="search_button">Search</div>
                    </div>
>>>>>>> 0187ec7038919ade575d818da06810bbeaab1728
                </form>
            </div>
        )
    }
}

export default SearchBar