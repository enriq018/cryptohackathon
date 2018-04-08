import React, { Component } from "react";
import ReactDOM from "react-dom";
import { LoginContainer } from "./container/LoginContainer.js"
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      view: 'home',
      id: '',
    }
    this.changeView = this.changeView.bind(this);
  }


  changeView(changeTo, id) {
    // before changing the view, this is where the axios call
    // to the blockchain needs to be made to get user id

    // ie teachers will get courses
    // students will get to place their scores
    this.setState({ view: changeTo, id: id })
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
      { this.renderView() }
    </div>
  )}
}

ReactDOM.render(<App />, document.getElementById('app'));