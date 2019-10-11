import React from 'react';


class ShowCompany extends React.Component{
  constructor(props){
    super(props);
    this.state= {
      companies : {}
    }

  }


  componentDidMount(){
   // const { id } = this.props.match.params.id;
   fetch("https://powerful-tor-71755.herokuapp.com/companies/" + this.props.match.params.id)
     .then((response) => response.json())
     .then((response)=> {
      this.setState ({companies : response });
      console.log(this.state.companies.hasEnvironmentProgram)
   })
}
  render(){


    return(

      <ul id="updateEntry">
        <li>Name:<span> {this.state.companies.name}</span></li>
        <li>Industry  Type:<span> {this.state.companies.industryType}</span></li>
        <li>Has Environmental Program:<span> {this.state.companies.hasEnvironmentProgram}</span></li>
        <li>Ownership Structure:<span> {this.state.companies.ownershipStructure}</span></li>
        <li>Glassdoor Rating:<span> {this.state.companies.glassdoorRating}</span></li>
        <li>Personal Rating:<span> {this.state.companies.oneToTenRating}</span></li>
        </ul>


    )
  }
}

export default ShowCompany;
