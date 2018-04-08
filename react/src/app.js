import React, { Component } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import { LoginContainer } from "./container/LoginContainer.js";
import { TeacherContainer } from "./container/TeacherContainer.js";
import { get } from "http";
import fake from "../../server/fakeStudents.js"

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      view: 'home',
      id: '',
      teacherList: [],
    }
    this.changeView = this.changeView.bind(this);
    this.getTeacherData = this.getTeacherData.bind(this);
  }

  getTeacherData(id, callback) {
    axios.get('/fake')
      .then(response => {
        console.log('success', response)
        this.setState({ teacherList: response.data})
        callback()
      })
      .catch((error) => {
        console.log(error);
    })
  }

  changeView(changeTo, id) {
    // before changing the view, this is where the axios call
    // to the blockchain needs to be made to get user id

    // ie teachers will get courses
    // students will get to place their scores
    if (changeTo === 'teacher') {
      this.setState({ id: id });
      this.getTeacherData(this.state.id, () => this.setState({ view: changeTo}))
    }

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
      return <TeacherContainer id={ this.state.id } teacherList={ this.state.teacherList } />
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