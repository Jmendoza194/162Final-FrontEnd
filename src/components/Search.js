import React from 'react';

class Search extends React.Component {
  render() {
    return (
      <div>
         <button id="plus" onClick={()=> this.onClick()}>
          <i class="fas fa-plus"></i>
        </button>
      </div>
    );
  }

  onClick() {
    document.getElementById("overlay").style.display = "flex";
  }
}
export default Search;
