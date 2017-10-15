import React from 'react'


export default function StudentTable (props){
    let students = props.students
    if (props.students){
      students = props.students.map((student => {
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
      <div className= "students-table">

      { students && <table>
        {students}
       </table> }
      </div>
    )
  }

