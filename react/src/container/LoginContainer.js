import React, { Component } from "react";
import { Login } from "../present/Login.js";

class LoginContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      personType: '',
    }
    this.clicked = this.clicked.bind(this);
    this.setId = this.setId.bind(this);
    this.submit = this.submit.bind(this);
  }

  setId(e) {
    this.setState({ id: e })
  }

  clicked(person) {
    this.setState({ personType: person})
  }

  submit(){
    this.props.changeView(this.state.personType, this.state.id)
  }


  render() {
   return (
    <div>
      <Login setId={ this.setId } submit={ this.submit }
      clicked={ this.clicked } personType={ this.state.personType }/>
    </div>
  )}
}

module.exports.LoginContainer = LoginContainer;