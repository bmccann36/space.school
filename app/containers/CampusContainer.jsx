
import React, { Component } from 'react';
import { Link } from 'react-router-dom';


// make an axios request for all students

export default class CampusContainer extends Component {
  constructor() {
    super()
    this.state = {}
  }

  // axios request to load all campuses

  // on campus icon click react router gets triggered to show the studentList  view

  // student list container - - -
// maybe container and component can be the same
  // <Link className="thumbnail" to={`/albums/${album.id}`}>
  // link to /campus/${campus.id}

  // the list of students component
  // uses this.props.routeParams.campusId to know what students to render



  render(){
    return (
      <h2> campus container </h2>
    )

}
}



















