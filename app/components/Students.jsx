import React, { Component } from 'react';
import axios from 'axios';

export default class Students extends Component {
  constructor() {
    super()
    this.state = { students:[] }
    }



  componentDidMount(){
    axios.get('/api/students')
      .then(res => res.data)
      .then(students => {

        this.setState({students})
        // console.log(this.state.students[1])
      })
  }

  render() {
    let students
    // console.log(this.state)
    if(this.state.students){
      students = this.state.students.map((student => {
        return (
          <tr>
            <td> {student.name} </td>
            <td> {student.email} </td>
            <td> {student.gpa} </td>
          </tr>
        )
      }))

    }
    return (
      <div className= "students">
      { students && <table>
        {students}
       </table> }
      </div>
    )
  }
}




// const Table = ({data}) = (
//   <table>
//     {data.map(student => {
//       <Tablestudent student={student} />
//     })}
//   </table>
// )
