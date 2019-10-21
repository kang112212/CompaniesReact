import React from 'react';
import '../../App.css';
import SubmitForm from '../SubmitForm';

class SubmitCompany extends React.Component {
constructor(props, getDataFromAPI){
  super();
}




  render(){
		return (
      <div id="submitPage">
  			<SubmitForm {...this.props} getDataFromAPI={this.props.getDataFromAPI} />
      </div>
		)
	}
}

export default SubmitCompany;
