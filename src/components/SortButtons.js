import React from 'react';
import '../App.css';

class SortButtons extends React.Component {
  render(){
    return(
      <div className="sortingButtons">
        <button onClick={()=>this.props.getTrueFromAPI()}>Eco Companies</button>
        <button onClick={()=>this.props.getDataFromAPI()}>All Companies</button>
      </div>
    )
  }
}

export default SortButtons;
