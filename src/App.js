import React from 'react';
import Header from './components/Layouts/Header';
import Navbar from './components/Layouts/Navbar';
import UpdateCompany from './components/Pages/UpdatePage';
import SubmitCompany from './components/Pages/SubmitPage';
import StoredCompanies from './components/Pages/StoragePage';



import {
	BrowserRouter as Router,
	Route,
	Switch,
} from  "react-router-dom";

		class App extends React.Component {
			constructor(){
			  super();
			  this.state = {
			    companies : []
			  }
			}
			getDataFromAPI=()=>{
			  fetch("https://powerful-tor-71755.herokuapp.com/companies/")
			  .then((response) => response.json())
			  .then((response)=> {
			    this.setState ({companies : response });
			  });
			}
			getTrueFromAPI=()=>{
				fetch("https://powerful-tor-71755.herokuapp.com/companies/isecofriendly?hasEnvironmentProgram=true/")
				.then((response) => response.json())
				.then((response)=> {
					this.setState ({companies : response });
				});
			}
			componentDidMount(){
			  this.getDataFromAPI();
				this.getTrueFromAPI();
			}
			render(){
    return (
      <Router>

        <Header />

        <Switch>

				<Route
					exact
					path="/company"
					render={ props => <SubmitCompany {...props} getDataFromAPI={this.getDataFromAPI} />}
					/>

				<Route
					path="/company/:id"
					render={ (props) => <UpdateCompany {...props} companies={this.state.companies} getDataFromAPI={this.getDataFromAPI} /> }
				/>

				<Route
				path="/companies"
				render={ props => <StoredCompanies companies={this.state.companies} getTrueFromAPI={this.getTrueFromAPI} getDataFromAPI={this.getDataFromAPI} /> }
				 />

        </Switch>

        <Navbar />

      </Router>
    );
	}}

export default App;
