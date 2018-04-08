import React, { Component } from "react";

const Login = ({ setId, submit, clicked, personType }) => (
  <div>
    <section className="hero is-info is-fullheight">
      <div className="hero-head">
        <h1 className="title">EDI COIN2</h1>
      </div>
      <div className="hero-body">
        <div className="container has-text-centered">
          <div className="column is-6 is-offset-3">
            <h1 className="title">
              Welcome, please Login to continue:
            </h1>
            <h1 className="title">

              I am a...
            </h1>
            <div className="box">
              <article onClick={ ()=> clicked('student') }
                className={ personType === 'student' ? 'media student' : 'media' }
                id="person">
                <div className="columns">

                  <div className="column is-6 media-left">
                    <figure className="image is-64x64">
                      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Creative-Tail-People-boy.svg/1024px-Creative-Tail-People-boy.svg.png"
                        alt="Image" />
                    </figure>
                  </div>

                  <div className="column is-10">
                    <div className="content">
                      <a onClick={ ()=> clicked('student') } className="button is-black">
                        <span>Student </span>
                        <span className="icon is-large">
                          <i className="fas fa-child" aria-hidden="true" />
                        </span>
                      </a>

                    </div>
                  </div>

                  <div className="column">
                    <figure className="image is-64x64">
                      <img src="https://www.msdruzstevna.sk/img/teacher.png" alt="Image" />
                    </figure>
                  </div>
                </div>
              </article>

              <article onClick={ ()=> clicked('teacher') } className={personType === 'teacher' ? 'media teacher' : 'media'}
                id="person">
                <div className="columns">

                  <div className="column is-6 media-left">
                    <figure className="image is-64x64">
                      <img src="http://www.syracuse-computer-repairs.com/images/flat-faces-icons-circle-4.png" alt="Image" />
                    </figure>
                  </div>

                  <div className="column is-10">
                    <div className="content">
                      <a onClick={ ()=> clicked('teacher') } className="button is-black is-meduim">
                        <span>Teacher </span>
                        <span className="icon is-large">
                          <i className="fas fa-suitcase" aria-hidden="true" />
                        </span>
                      </a>
                    </div>
                  </div>

                  <div className="column">
                    <figure className="image is-64x64">
                      <img src="http://ohmandril.es/wp-content/uploads/2016/02/flat-faces-icons-circle-3-300x300.png" alt="Image" />
                    </figure>
                  </div>
                </div>
              </article>
            </div>

            <div className="box">

              <div className="field is-grouped">
                <p className="control is-expanded">
                  <input onChange={ (e)=> setId(e.target.value) } className="input" type="text" placeholder="Enter your id"/>
                </p>
                <p className="control">
                  <a onClick={ ()=> submit() }className="button is-info"> Submit
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
)

module.exports.Login = Login;