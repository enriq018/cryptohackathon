import React, { Component } from "react";
import { TeacherForm } from './TeacherForm.js';

const Teacher = ({ id, teacherList }) => (
  <div className="container">
    <div className="section">
      <div className="columns">
        <div className="column ">
          <h1 className="title">
            Teacher Id:{ id }
          </h1>
        </div>

        <div className="column ">
          <h1 className="title">
            Course: History
          </h1>
        </div>

        <div className="column ">
          <h1 className="title">
            Test: The Dot com era
          </h1>
        </div>
      </div>
    </div>

    <div className="has-text-centered">
      <p className="title">Students</p>
    </div>
    <div className="section forms">

      <div className="tile is-ancestor">
        <div className="tile is-vertical is-12">
          <div className="tile is-centered">
            <div className="tile is-parent is-vertical">
              <article className="tile is-child">
                { teacherList.map((el, i) =>
                <TeacherForm teacherList={ el } index={ i }/>) }

              </article>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)
module.exports.Teacher = Teacher;
