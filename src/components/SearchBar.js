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
                    <input value={this.state.term} onChange={this.handleChange} placeholder='search'></input>
                    <button>Search</button>
                </form>
            </div>
        )
    }
}

export default SearchBar