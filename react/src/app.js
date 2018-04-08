import React, { Component } from "react";
import ReactDOM from "react-dom";
import { LoginContainer } from "./container/LoginContainer.js"
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      view: 'home',
    }
    this.changeView = this.changeView.bind(this);
  }

  changeView(changeTo) {
    this.setState({view: changeTo})
  }

  renderView() {
    const view = this.state.view;
    if(view === 'home') {
      return <LoginContainer changeView={this.changeView}/>
    }
    if (view === 'student') {
      return <h1>STUDENT</h1>
    }
    if (view === 'teacher') {
      return <h1>TEACHER</h1>
    }
  }

  render() {
   return (
    <div>
      {this.renderView()}
    </div>
  )}
}

ReactDOM.render(<App />, document.getElementById('app'));