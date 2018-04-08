import React, { Component } from "react";
import { Login } from "../present/Login.js";

class LoginContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
    }
  }


  render() {
   return (
    <div>
      <Login changeView={this.props.changeView}/>
    </div>
  )}
}

module.exports.LoginContainer = LoginContainer;