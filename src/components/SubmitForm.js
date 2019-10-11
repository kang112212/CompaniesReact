import React from 'react';
import '../App.css';
import { Link } from "react-router-dom"

class SubmitForm extends React.Component{
  constructor(props){
    super();
    this.state={
      name:"",
      eco:false,
      industry:"",
      ownership:"",
      glassdoorRating: 0.0,
      personalRating:0,
    }
  }
  onNameInput=(e)=>{
    this.setState({name:  e.target.value});
  }
  onEcoInput=(e)=>{
    this.setState({eco: e.target.value});
  }
  onIndustryInput=(e)=>{
    this.setState({industry: e.target.value});
  }
  onOwnershipInput=(e)=>{
    this.setState({ownership: e.target.value});
  }
  onGlassdoorInput=(e)=>{
    this.setState({glassdoorRating: e.target.value});
  }
  persRatingInput=(e)=>{
    this.setState({personalRating: e.target.value});
  }
submitClick = () => {
  fetch('https://powerful-tor-71755.herokuapp.com/companies', {
    method: 'post',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      name: this.state.name,
      hasEnvironmentProgram: this.state.eco,
      industryType: this.state.industry,
      ownershipStructure: this.state.ownership,
      glassdoorRating: this.state.glassdoorRating,
      oneToTenRating: this.state.personalRating,
    })
  }).then(()=>{
    this.props.getDataFromAPI();
  });
};
  render(){
    return(
      <div id="newEntry">
        <div>
          <input className="inputBox" onInput={this.onNameInput} placeholder="Name of Company" />
          <input list="eco" className="inputBox" onInput={this.onEcoInput} placeholder="Eco Programs?" />
            <datalist id="eco">
              <option>true</option>
              <option>false</option>
            </datalist>
          <input className="inputBox" onInput={this.onIndustryInput} placeholder="What industry" />
          <input className="inputBox" onInput={this.onOwnershipInput} placeholder="Ownership Structure" />
          <input type="number" step="0.1" min="0" max="10" className="inputBox" onInput={this.onGlassdoorInput} placeholder="Glassdoor Rating" />
          <input type="number" min="0" max="10" className="inputBox" onInput={this.persRatingInput} placeholder="Personal Rating 1-10" />
          <Link to="/companies" className="sortingButtons">
            <button onClick={this.submitClick}>Submit Company</button>
          </Link>
        </div>
      </div>
    )
  }
}

export default SubmitForm;
