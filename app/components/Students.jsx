import React, { Component } from 'react';
import axios from 'axios';

export default class Students extends Component {
  constructor() {
    super()
    this.state = {

    }

  }

  componentDidMount(){
    axios.get('/api/students')
      .then(res => res.data)
      .then(students => {
        console.log(students)
      })
  }

  render() {

    return (
      <div>
        <p> students here </p>
      </div>
    )
  }
}
