import React from 'react';
import Header from './components/Layouts/Header';
import BotNavBar from './components/Layouts/BotNavBar';
import UpdateCompany from './components/Pages/UpdateCompany';
import SubmitCompany from './components/Pages/SubmitCompany';
import StoredCompanies from './components/Pages/StoredCompanies';
import GoogMaps from './components/GoogMaps';
import HomePage from './components/Pages/Homepage';
import Footer from './components/Layouts/Footer'


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
			  fetch("https://powerful-tor-71755.herokuapp.com/companies")
			  .then((response) => response.json())
			  .then((response)=> {
			    this.setState ({companies : response });
			  });
			}
			getTrueFromAPI=()=>{
				fetch("https://powerful-tor-71755.herokuapp.com/companies/isecofriendly?hasEnvironmentProgram=true")
				.then((response) => response.json())
				.then((response)=> {
					this.setState ({companies : response });
				});
			}
			componentDidMount(){
			  this.getDataFromAPI();
				this.getTrueFromAPI();
				(function() {
				 var gcse = document.createElement('script');
				 gcse.type = 'text/javascript';
				 gcse.async = true;
				 gcse.src = 'https://cse.google.com/cse.js?cx=007726935285128110588:cbum7heosei';
				 var s = document.getElementsByTagName('script')[0];
				 s.parentNode.insertBefore(gcse, s);
			 })();
			}
			render(){
    return (
      <Router>

        <Header />

        <Switch>

				<Route
					exact
					path="/"
					render={ (props) => <HomePage />}
					/>

				<Route
					exact
					path="/company"
					render={ (props) => <SubmitCompany {...props} getDataFromAPI={this.getDataFromAPI} />}
					/>

				<Route
					path="/company/:id"
					render={ (props) => <UpdateCompany {...props} companies={this.state.companies} getDataFromAPI={this.getDataFromAPI} /> }
				/>

				<Route
				path="/companies"
				render={ props => <StoredCompanies companies={this.state.companies} getTrueFromAPI={this.getTrueFromAPI} getDataFromAPI={this.getDataFromAPI} /> }
				 />

				 <Route
				 path="/maps"
				 render={ props => <GoogMaps  /> }
					/>


        </Switch>

        <BotNavBar />
				<Footer />
      </Router>

    );
	}}

export default App;
