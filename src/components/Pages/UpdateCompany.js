import React from 'react';
import UpdateForm from '../UpdateForm'
import ShowCompany from '../ShowCompany'

class UpdateCompany extends React.Component{
constructor(props, getDataFromAPI){
  super();
}
  render(){
    return (
      <div>
        <ShowCompany {...this.props}/>
        <UpdateForm {...this.props} getDataFromAPI={this.props.getDataFromAPI}/>
      </div>
    )
  }
}

export default UpdateCompany;
