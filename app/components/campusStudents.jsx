import React, { Component } from 'react';
import axios from 'axios';

export default class campusStudents extends Component {
  constructor() {
    super()
    this.state = { students:[] }
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
      <div className= "students">
        <p> Navigation: as a user I...</p>
      </div>
    )
  }
}
