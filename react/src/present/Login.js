import React, { Component } from "react";

const Login = ({changeView}) => (
  <div className="login">
  	<h1>Login</h1>
  	<input></input>
  	<button onClick={()=> changeView('student')}>Student</button>
  	<button onClick={()=> changeView('teacher')}>Teacher</button>

  </div>
)

module.exports.Login = Login;