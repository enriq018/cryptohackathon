import React, { Component } from "react";

const TeacherForm = ({id, teacherList}) => (
  <div className="column box">
    <nav className="level">
      <div className="level-item has-text-centered">
        <div>
          <h1 className="title">{teacherList.name}</h1>
        </div>
      </div>
      <div className="level-item has-text-centered">
        <div>
          <div className="has-text-centered">
            <div className="field has-addons">

              <p className="control">
                <input className="input" type="text" placeholder="Test Score" />
              </p>
              <p className="control">
                <a className="button">
                  <span> Submit
                  </span>
                  <span className="icon is-large">
                    <i className="fas fa-check" aria-hidden="true" />
                  </span>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
)
module.exports.TeacherForm = TeacherForm