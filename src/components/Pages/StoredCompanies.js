import React from 'react';
import '../../App.css';
import { Link } from "react-router-dom"
import SortButtons from '../SortButtons';
import Dragula from 'react-dragula';
import DragulaStyles from 'react-dragula/dist/dragula.min.css';


class StoredCompanies extends React.Component {


  companyHandleClick=(id)=>{
    fetch('https://powerful-tor-71755.herokuapp.com/company/' + id, {
      method: 'delete',
      headers: {
        "Content-Type": "application/json"
      },
    }).then(()=>{
      this.props.getDataFromAPI();
    });
  }
    render(){
      let companiesArr = this.props.companies.map((company)=>{
        return(
          <div key={company.id}  id="outputDisplayBoxes">
  					<ul id="companyEntry">
  			      <li className="listEntry">Name:<span> {company.name}</span></li>
  			      <li className="listEntry">Industry  Type:<span> {company.industryType}</span></li>
  			      <li className="listEntry">Has Environmental Program:<span> {company.hasEnvironmentProgram.toString()}</span></li>
  			      <li className="listEntry">Ownership Structure:<span>  {company.ownershipStructure}</span></li>
  			      <li className="listEntry">Glassdoor Rating:<span> {company.glassdoorRating}</span></li>
  			      <li className="listEntry">Personal Rating:<span> {company.oneToTenRating}</span></li>

              <Link to={"/company/" + company.id}>
                <button className="functionalButtons">Update</button>
              </Link>

  						<button className="functionalButtons" onClick={()=>this.companyHandleClick(company.id)}>Delete</button>
  					 </ul>
          </div>
      	)
      });
      return(
          <div>
          	<SortButtons getTrueFromAPI={this.props.getTrueFromAPI} getDataFromAPI={this.props.getDataFromAPI} />
      			<div id="listStructure" className='container' ref={this.dragulaDecorator}>{companiesArr}</div>
          </div>


  )}
  dragulaDecorator = (componentBackingInstance) => {
    if (componentBackingInstance) {
       let options = {
         revertOnSpill: false,
         removeOnSpill: false,
         copy: false,
         copySortSource: false
       };
       Dragula([componentBackingInstance], options)
     }
   };

}

export default StoredCompanies;
