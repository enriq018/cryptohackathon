import React, { Component } from "react";
import { Teacher } from "../present/Teacher.js";
console.log('!!!', Teacher)
class TeacherContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
    }

  }



  render() {
   return (
    <div className="teacherView">
     <Teacher id={ this.props.id } teacherList={ this.props.teacherList } />
    </div>
  )}
}

module.exports.TeacherContainer = TeacherContainer;