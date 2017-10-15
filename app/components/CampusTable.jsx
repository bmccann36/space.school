import React from 'react'


export default function CampusTable (){
  let students
  // if (props.students){
  //      students = props.students.map((student => {
  //       return (
  //         <tr>
  //           <td> {student.name} </td>
  //           <td> {student.email} </td>
  //           <td> {student.gpa} </td>
  //         </tr>
  //       )
  //     }))
    // }
    return (
      <div className= "campus-table">
      <h1> a table will go here </h1>
      { students && <table>
        {students}
       </table> }
      </div>
    )
  }

