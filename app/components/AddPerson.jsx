import React, { Component } from 'react';
import axios from 'axios';

export default class AddPerson extends Component {
  constructor() {
    super()
    this.state = { newEntry: {} }
    }

  // componentDidMount(){

  // }

  render() {
    return (
      <div className= "add-person">
        <h1>Add Person </h1>
            <input placeholder="name" type="text" />
            <input placeholder= "campus"/>


      </div>
    )
  }
}
